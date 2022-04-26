import * as React from 'react';
import { useEffect, useState } from 'react';
import { Storage } from '../Storage';
import { CardContainer } from '../Container/CardContainer';

type SettingSectionProps = {
  storage: Storage;
};

type State = {
  isOpenNewTab: boolean;
  enableConsoleLog: boolean;
};

export const SettingSection = ({
  storage,
}: SettingSectionProps): JSX.Element => {
  const [state, setState] = useState<State>({
    enableConsoleLog: false,
    isOpenNewTab: false,
  });

  useEffect(() => {
    // LocalStorageから設定情報を取得
    storage.readValues(() => {
      setState({
        isOpenNewTab: storage.isOpenNewTab,
        enableConsoleLog: storage.enableConsoleLog,
      });
    });
  }, []);

  return (
    <CardContainer>
      <div className="form-row px-2">
        <label>
          <input
            name="isOpenNewTab"
            type="checkbox"
            checked={state.isOpenNewTab}
            onChange={(event) => {
              storage.isOpenNewTab = event.target.checked;
              setState({ ...state, isOpenNewTab: storage.isOpenNewTab });
              storage.saveValues();
            }}
          />
          <span className="label-info">新しいタブで開く</span>
        </label>
      </div>
      <div className="form-row px-2">
        <label>
          <input
            name="enableConsoleLog"
            type="checkbox"
            checked={state.enableConsoleLog}
            onChange={(event) => {
              storage.enableConsoleLog = event.target.checked;
              setState({
                ...state,
                enableConsoleLog: storage.enableConsoleLog,
              });
              storage.saveValues();
            }}
          />
          <span className="label-info">ログをConsoleに流す</span>
        </label>
      </div>
    </CardContainer>
  );
};
