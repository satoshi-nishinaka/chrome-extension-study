import * as React from 'react';
import { Storage } from '../Storage';
type Props = {
  storage: Storage;
};

export const CloseDuplicateTabButton = (props: Props): JSX.Element => {
  const execute = (): void => {
    if (confirm('重複するタブを閉じます\nよろしいですか？？')) {
      if (closeDuplicateTabs(props.storage.enableConsoleLog)) {
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
const closeDuplicateTabs = (enableConsoleLog: boolean): boolean => {
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
      if (enableConsoleLog) {
        console.debug('close duplicate tab ' + tab.url);
      }
      chrome.tabs.remove(tab.id);
      isClosed = true;
    }
  });
  return isClosed;
};
