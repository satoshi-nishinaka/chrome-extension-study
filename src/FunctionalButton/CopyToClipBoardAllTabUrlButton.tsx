import * as React from 'react';
export default class CopyToClipBoardAllTabUrlButton extends React.Component {
  execute(): void {
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
    });
  }

  render(): JSX.Element {
    return (
      <button className="btn btn-blue btn-sm w-100" onClick={this.execute}>
        開いているすべてのタブのURLをクリップボードにコピーする
      </button>
    );
  }
}
