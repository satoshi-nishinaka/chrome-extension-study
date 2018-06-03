var showAlertMessage = function(message, disableErrorMessage) {
    if (disableErrorMessage) return;
    $("#message").text(message);
    $(".modal").modal('show');
    setTimeout(function() {
        $(".modal").modal('hide');
    }, 1500);
};

var validationNumeric = function(value, disableErrorMessage) {
    if (value.length == 0) {
        showAlertMessage('数値を入力してください', disableErrorMessage);
        return false;
    }
    var regex = /^\d+$/gi;
    var matches = regex.exec(value);
    if (matches.length < 1) {
        showAlertMessage('数値を入力してください', disableErrorMessage);
        return false;
    }
    if (matches[0].length != 12) {
        showAlertMessage('RestaurantIdのフォーマットが正しくありません', disableErrorMessage);
        return false;
    }
    return true;
};

var transitionToNextPage = function(url, newTab) {
    var background = chrome.extension.getBackgroundPage();

    if (newTab) {
        chrome.tabs.create({url: url});
        return;
    }

    // Get the current Tab
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {

        var active = tabs[0].id;

        // Set the URL to the Local-NTP (New Tab Page)
        // chrome.tabs.update(active, { url: "chrome-search://local-ntp/local-ntp.html" }, function() { });
        chrome.tabs.update(active, { url: url }, function() { });
    });
    window.close();
};

$(function() {

    $('[data-toggle="tooltip"]').tooltip();

    $('h5').click(function() {
        var target = $(this).attr('data-target');
        console.log(target);
        if (target) {
            $('#' + target).toggle(100);
        }
    });

    $('button').click(function() {
        var buttonName = $(this).attr('id');
        var className = $(this).attr('class');
        var newTab = $('#btn_newtab').prop('checked');
        var disableErrorMessage = $('#btn_disable_error_message').prop('checked');
        if (className == 'btn-image') {
            return transitionToNextPage($(this).attr('data-href'), newTab);
        }
        var value = $('#restaurant_id').val();
        if (!validationNumeric(value, disableErrorMessage)) {
            return;
        }
        var url = '';
        switch (buttonName) {
            case 'btn_go_restaurant':
                url = 'https://retty.me/restaurant/' + value;
                break;
            case 'btn_go_owner':
                url = 'https://owner.retty.me/restaurant/' + value + '/index';
                break;
            case 'btn_go_owner_stg':
                url = 'https://owner-staging.retty.me/restaurant/' + value + '/index';
                break;
            case 'btn_go_ebimayo':
                url = 'https://gotanda-minmin.retty.me/cs/' + value;
                break;
            case 'btn_go_minmin':
                url = 'https://retty.me/minmin/edit_restaurant.php?restaurant_id=' + value;
                break;
            case 'btn_go_yokocho':
                url = 'https://ebisu-yokocho.retty.me/detail/' + value;
                break;
            case 'btn_go_reserve':
                url = 'https://reserve.retty.me/restaurant/' + value + '/v2/reserve/step1';
                break;
            case 'btn_go_ebisu_minmin':
                url = 'https://ebisu-minmin.retty.me/?restaurant_id=' + value;
                break;
            default:
                return;
        }
        console.log(url);
        transitionToNextPage(url, newTab);
    });

    chrome.tabs.getSelected(null, function(tab) {
        var pageMeta = tab.title + "\n" + tab.url;
        if (tab.favIconUrl) {
            $('textarea#favicon-url').val(tab.favIconUrl);
            pageMeta += "\n" + tab.favIconUrl;
        }
        $('input#url').val(tab.url);
        $('input#title').val(tab.title);
        $('#page-meta').val(pageMeta);
    });
});