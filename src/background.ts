export const saveUrlAndTitle = (): void => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    // 1. 任意のテキストを格納したテキストエリアを作成
    const textArea = document.createElement('textarea');
    textArea.value = `${activeTab.title}\n${activeTab.url}`;
    document.body.appendChild(textArea);

    // 2. 作成したテキストエリアを選択し、クリップボードに保存
    textArea.select();
    document.execCommand('copy');

    // 3. テキストエリアを削除
    document.body.removeChild(textArea);

    alert(
      '現在開いているページのタイトルとURLをクリップボードにコピーしました'
    );
  });
};

export const saveUrlAndTitleForMarkDown = (): void => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    const textArea = document.createElement('textarea');
    textArea.value = `[${activeTab.title}](${activeTab.url})`;
    document.body.appendChild(textArea);

    textArea.select();
    document.execCommand('copy');

    document.body.removeChild(textArea);
    alert(
      '現在開いているページのタイトルとURLをmarkdown形式でクリップボードにコピーしました'
    );
  });
};

chrome.commands.onCommand.addListener((command) => {
  switch (command) {
    case 'save_url_and_title':
      saveUrlAndTitle();
      break;
    case 'save_url_and_title_for_markdown':
      saveUrlAndTitleForMarkDown();
      break;
    default:
      break;
  }
});
