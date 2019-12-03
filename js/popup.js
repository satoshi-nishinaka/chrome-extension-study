function showAlertMessage(message, disableErrorMessage) {
    if (disableErrorMessage) return;
    $("#message").text(message);
    $(".modal").modal('show');
    setTimeout(function() {
        $(".modal").modal('hide');
    }, 1500);
}

/**
 * ローカルストレージに設定内容を保存します
 */
function saveValuesForLocalStorage() {
    console.log('isOpenNewtab: ' + isOpenNewtab);
    console.log('disableErrorMessage: ' + disableErrorMessage);
    console.log('hiddenShortcutMenu: ' + hiddenShortcutMenu);

    chrome.storage.local.set({
        "isOpenNewtab": isOpenNewtab,
        "disableErrorMessage": disableErrorMessage,
        "hiddenShortcutMenu": hiddenShortcutMenu,
    });
};

/**
 * 指定したURLを開きます。
 * @param url
 * @param newTab 新しいタブで開くか？
 */
function transitionToNextPage(url, newTab) {
    var background = chrome.extension.getBackgroundPage();

    if (newTab) {
        chrome.tabs.create({url: url});
        return;
    }

    // Get the current Tab
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {

        var active = tabs[0].id;

        // Set the URL to the Local-NTP (New Tab Page)
        chrome.tabs.update(active, { url: url }, function() { });
    });
    window.close();
}

$(function() {
    $('[data-toggle="tooltip"]').tooltip();

    $('h5').click(function() {
        var target = $(this).attr('data-target');
        console.log(target);
        if (target) {
            $('#' + target).toggle(100);
        }
    });

    $('.btn-image').click(function() {
        var newTab = $('#btn_newtab').prop('checked');
        transitionToNextPage($(this).attr('data-href'), newTab);
    });

    $("#copy-to-clipboard").click(function() {
        chrome.tabs.query({}, function(results) {
            let tabUrls = [];
            for (i = 0; i < results.length; i++) {
                const tab = results[i];
                tabUrls.push(tab.url);
            }
            var textArea = document.createElement('textarea');
            textArea.value = tabUrls.join("\n");
            document.body.appendChild(textArea);

            textArea.select();
            document.execCommand('copy');

            document.body.removeChild(textArea);
        });
    });

    $('input[type="checkbox"]').change(function() {
        var value = $(this).prop('checked');
        switch ($(this).attr('id')) {
            case 'btn_newtab':
                isOpenNewtab = value;
                break;
            case 'btn_disable_error_message':
                disableErrorMessage = value;
                break;
            case 'btn_hidden_shortcut_menu':
                hiddenShortcutMenu = value;
            default:
                break;
        }
        saveValuesForLocalStorage();
    });
    values = [
        "isOpenNewtab",
        "isOpenTab",
        "hiddenShortcutMenu",
    ];

    chrome.storage.local.get(values, function(items) {
        // LocalStorageから設定情報を取得
        // LocalStorageから設定情報を取得
        isOpenNewtab = items.isOpenNewtab;
        disableErrorMessage = items.disableErrorMessage;
        hiddenShortcutMenu = items.hiddenShortcutMenu;

        $('#btn_newtab').prop('checked', isOpenNewtab);

        console.log(items);
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
        chrome.tabs.query({}, function(results) {
            $("#information").html(results.length);
        });
    });
});