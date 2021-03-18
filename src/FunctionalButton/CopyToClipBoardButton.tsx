import * as React from 'react';
export function CopyToClipBoardButton(): JSX.Element {
  return (
    <button className="btn btn-secondary btn-sm w-100" onClick={execute}>
      現在アクティブなタブのURLをクリップボードにコピーする
    </button>
  );
}

function execute(): void {
  chrome.tabs.getSelected(null, (tab) => {
    const textArea = document.createElement('textarea');
    textArea.value = `${tab.title}\n${tab.url}`;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  });
}
