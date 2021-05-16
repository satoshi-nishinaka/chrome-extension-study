import * as React from 'react';
export default function ReloadAllTabsButton(): JSX.Element {
  const execute = (): void => {
    chrome.tabs.query({}, (result) => {
      for (const tab of result) {
        chrome.tabs.reload(tab.id);
      }
    });
  };

  return (
    <button className="btn btn-secondary btn-sm w-100" onClick={execute}>
      開いているタブをすべてリロードする
    </button>
  );
}
