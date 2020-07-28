function saveUrlAndTitle() {
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

        alert('現在開いているページのタイトルとURLをクリップボードにコピーしました');
    });
}

function saveUrlAndTitleForMarkDown() {
    chrome.tabs.getSelected(null, function(tab) {
        var textArea = document.createElement('textarea');
        textArea.value = '[' + tab.title + "](" + tab.url + ")";
        document.body.appendChild(textArea);

        textArea.select();
        document.execCommand('copy');

        document.body.removeChild(textArea);
        alert('現在開いているページのタイトルとURLをmarkdown形式でクリップボードにコピーしました');
    });
}

function saveUrlAndTitleAndFavicon() {
    chrome.tabs.getSelected(null, function(tab) {
        var textArea = document.createElement('textarea');
        textArea.value = tab.title + "\n" + tab.url + "\n" + tab.favIconUrl;
        document.body.appendChild(textArea);

        textArea.select();
        document.execCommand('copy');

        document.body.removeChild(textArea);

        console.log("Copied !");
    });
}

function unique(array) {
    // JavaScriptのArrayでuniqする8つの方法（と、その中で最速の方法） - Qiita
    // https://qiita.com/piroor/items/02885998c9f76f45bfa0#object%E3%81%AE%E3%82%AD%E3%83%BC%E3%82%92%E4%BD%BF%E3%81%86%E6%96%B9%E6%B3%95
    const knownElements = {};
    const uniquedArray = [];
    for (let i = 0, maxi = array.length; i < maxi; i++) {
        if (array[i] in knownElements)
          continue;
        uniquedArray.push(array[i]);
        knownElements[array[i]] = true;
    }
    return uniquedArray;
}

chrome.commands.onCommand.addListener(function(command) {
    console.log(command);
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
            break;
    }
});
