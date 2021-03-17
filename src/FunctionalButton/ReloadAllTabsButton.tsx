import * as React from 'react';
export default class ReloadAllTabsButton extends React.Component {
  execute(): void {
    chrome.tabs.query({}, (result) => {
      for (const tab of result) {
        chrome.tabs.reload(tab.id);
      }
    });
  }

  render(): JSX.Element {
    return (
      <button className="btn btn-orange btn-sm w-100" onClick={this.execute}>
        開いているタブをすべてリロードする
      </button>
    );
  }
}
