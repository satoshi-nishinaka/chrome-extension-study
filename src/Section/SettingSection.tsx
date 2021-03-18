import { Storage } from '../Storage';
import { CardContainer } from '../Container/CardContainer';
import * as React from 'react';

interface SettingSectionProps {
  storage: Storage;
}
interface State {
  storage: Storage;
  isOpenNewTab: boolean;
}

export class SettingSection extends React.Component<
  SettingSectionProps,
  State
> {
  state: State = {
    storage: null,
    isOpenNewTab: false,
  };
  constructor(props: SettingSectionProps) {
    super(props);
    this.state = {
      storage: props.storage,
      isOpenNewTab: false,
    };
  }
  componentDidMount(): void {
    // LocalStorageから設定情報を取得
    this.state.storage.readValues(() => {
      this.setState({
        isOpenNewTab: this.state.storage.isOpenNewTab,
      });
    });
  }

  render(): JSX.Element {
    return (
      <CardContainer>
        <div className="form-row px-2">
          <label>
            <input
              name="isOpenNewTab"
              type="checkbox"
              checked={this.state.storage.isOpenNewTab}
              onChange={(event) => {
                this.state.isOpenNewTab = this.state.storage.isOpenNewTab =
                  event.target.checked;
                this.setState({
                  isOpenNewTab: event.target.checked,
                });
                this.state.storage.saveValues();
              }}
            />
            <span className="label-info">新しいタブで開く</span>
          </label>
        </div>
      </CardContainer>
    );
  }
}
