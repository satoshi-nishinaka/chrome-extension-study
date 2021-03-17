import { Storage } from '../Storage';
import CardContainer from '../Container/CardContainer';
import * as React from 'react';
import * as $ from 'jquery';

interface SettingSectionProps {
  storage: Storage;
}
interface State {
  storage: Storage;
}

export class SettingSection extends React.Component<
  SettingSectionProps,
  State
> {
  state: State = {
    storage: null,
  };
  constructor(props: SettingSectionProps) {
    super(props);
    this.state = {
      storage: props.storage,
    };
  }
  componentDidMount(): void {
    // LocalStorageから設定情報を取得
    this.state.storage.readValues(() => {
      $('#btn_newtab').prop('checked', this.state.storage.isOpenNewTab);

      chrome.tabs.getSelected(null, (tab) => {
        let pageMeta = `${tab.title}\n${tab.url}`;
        if (tab.favIconUrl) {
          $('textarea#favicon-url').val(tab.favIconUrl);
          pageMeta += '\n' + tab.favIconUrl;
        }
        $('textarea#url').val(tab.url);
        $('textarea#title').val(tab.title);
        $('#page-meta').val(pageMeta);
      });
      chrome.tabs.query({}, (results) => {
        $('#information').html(results.length.toString());
      });
    });
  }

  render(): JSX.Element {
    return (
      <CardContainer>
        <div className="form-row px-2">
          <label>
            <input type="checkbox" id="btn_newtab" />
            <span className="label-info">新しいタブで開く</span>
          </label>
        </div>
      </CardContainer>
    );
  }
}
