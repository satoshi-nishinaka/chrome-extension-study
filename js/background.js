chrome.commands.onCommand.addListener(function(command) {
    var saveUrlAndTitle = function() {
        chrome.tabs.getSelected(null, function(tab) {
            // 1. 任意のテキストを格納したテキストエリアを作成
            var textArea = document.createElement('textarea');
            textArea.value = tab.title + "\n" + tab.url;
            document.body.appendChild(textArea);

            // 2. 作成したテキストエリアを選択し、クリップボードに保存
            textArea.select();
            document.execCommand('copy');

            // 3. テキストエリアを削除
            document.body.removeChild(textArea);

            console.log("Copied !");
        });
    };
    var saveUrlAndTitleForMarkDown = function() {
        chrome.tabs.getSelected(null, function(tab) {
            var textArea = document.createElement('textarea');
            textArea.value = '[' + tab.title + "](" + tab.url + ")";
            document.body.appendChild(textArea);

            textArea.select();
            document.execCommand('copy');

            document.body.removeChild(textArea);
        });
    };
    var saveUrlAndTitleAndFavicon = function() {
        chrome.tabs.getSelected(null, function(tab) {
            var textArea = document.createElement('textarea');
            textArea.value = tab.title + "\n" + tab.url + "\n" + tab.favIconUrl;
            document.body.appendChild(textArea);

            textArea.select();
            document.execCommand('copy');

            document.body.removeChild(textArea);

            console.log("Copied !");
        });
    };

    switch(command) {
        case 'save_url_and_title':
            saveUrlAndTitle();
            break;
        case 'save_url_and_title_and_favicon':
            saveUrlAndTitleAndFavicon();
            break;
        case 'save_url_and_title_for_markdown':
            saveUrlAndTitleForMarkDown();
            break;
        default:
            console.log(command);
            break;
    }
});
