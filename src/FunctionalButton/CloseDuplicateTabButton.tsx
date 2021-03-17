import * as React from 'react';
export default class CloseDuplicateTabButton extends React.Component {
  execute(): void {
    if (confirm('重複するタブを閉じます\nよろしいですか？？')) {
      if (closeDuplicateTabs()) {
        alert('重複するタブを閉じました');
      }
    }
  }

  render(): JSX.Element {
    return (
      <button className="btn btn-orange btn-sm w-100" onClick={this.execute}>
        重複するタブを閉じる
      </button>
    );
  }
}

/**
 * 重複するURLのタブを閉じます
 */
function closeDuplicateTabs(): boolean {
  let isClosed = false;
  chrome.tabs.query({}, (result) => {
    const urls = [];
    for (const tab of result) {
      if (urls.indexOf(tab.url) === -1) {
        // 重複するURLがない場合は記録
        urls.push(tab.url);
        continue;
      }
      // 重複するURLのタブはClose
      console.debug('close duplicate tab ' + tab.url);
      chrome.tabs.remove(tab.id);
      isClosed = true;
    }
  });
  return isClosed;
}
