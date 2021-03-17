import * as React from 'react';
export default class CopyToClipBoardButton extends React.Component {
  execute(): void {
    chrome.tabs.getSelected(null, (tab) => {
      const textArea = document.createElement('textarea');
      textArea.value = `${tab.title}\n${tab.url}`;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    });
  }

  render(): JSX.Element {
    return (
      <button className="btn btn-secondary btn-sm w-100" onClick={this.execute}>
        現在アクティブなタブのURLをクリップボードにコピーする
      </button>
    );
  }
}
