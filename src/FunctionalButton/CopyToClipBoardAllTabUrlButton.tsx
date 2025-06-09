import * as React from 'react';
export const CopyToClipBoardAllTabUrlButton = (): React.ReactNode => {
  const execute = (): void => {
    chrome.tabs.query({}, (results) => {
      const tabUrls = [];
      for (const tab of results) {
        tabUrls.push(tab.url);
      }
      const textArea = document.createElement('textarea');
      textArea.value = tabUrls.join('\n');
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('すべてのタブのURLをクリップボードにコピーしました');
    });
  };
  return (
    <button className="btn btn-secondary btn-sm w-100" onClick={execute}>
      開いているすべてのタブのURLをクリップボードにコピーする
    </button>
  );
};
