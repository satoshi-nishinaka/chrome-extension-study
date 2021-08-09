import * as React from 'react';
export const CloseDuplicateTabButton = (): JSX.Element => {
  const execute = (): void => {
    if (confirm('重複するタブを閉じます\nよろしいですか？？')) {
      if (closeDuplicateTabs()) {
        alert('重複するタブを閉じました');
      }
    }
  };

  return (
    <button className="btn btn-secondary btn-sm w-100" onClick={execute}>
      重複するタブを閉じる
    </button>
  );
};

/**
 * 重複するURLのタブを閉じます
 */
const closeDuplicateTabs = (): boolean => {
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
};
