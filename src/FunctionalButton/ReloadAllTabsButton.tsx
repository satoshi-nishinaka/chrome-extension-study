import * as React from 'react';
export const ReloadAllTabsButton = (): React.ReactNode => {
  const execute = (): void => {
    chrome.tabs.query({}, (result) => {
      for (const tab of result) {
        if (tab.id !== undefined) {
          chrome.tabs.reload(tab.id);
        }
      }
    });
  };

  return (
    <button className="btn btn-secondary btn-sm w-100" onClick={execute}>
      開いているタブをすべてリロードする
    </button>
  );
};
