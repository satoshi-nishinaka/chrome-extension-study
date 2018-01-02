chrome.commands.onCommand.addListener(function(command) {
    chrome.tabs.getSelected(null, function(tab) {
        // 1. 任意のテキストを格納したテキストエリアを作成
        var text_area = document.createElement('textarea');
        text_area.value = tab.title + "\n" + tab.url;
        document.body.appendChild(text_area);

        // 2. 作成したテキストエリアを選択し、クリップボードに保存
        text_area.select();
        document.execCommand('copy');

        // 3. テキストエリアを削除
        document.body.removeChild(text_area);
    });
});
