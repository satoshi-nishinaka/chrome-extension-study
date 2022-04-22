import * as React from 'react';
import { useEffect, useState } from 'react';
import { Storage } from '../Storage';
import { CardContainer } from '../Container/CardContainer';

interface SettingSectionProps {
  storage: Storage;
}

export const SettingSection = (props: SettingSectionProps): JSX.Element => {
  const [storage] = useState(props.storage);
  const [isOpenNewTab, setIsOpenNewTab] = useState(false);
  const [enableConsoleLog, setEnableConsoleLog] = useState(false);

  useEffect(() => {
    // LocalStorageから設定情報を取得
    storage.readValues(() => {
      setIsOpenNewTab(storage.isOpenNewTab);
      setEnableConsoleLog(storage.enableConsoleLog);
    });
  }, []);

  return (
    <CardContainer>
      <div className="form-row px-2">
        <label>
          <input
            name="isOpenNewTab"
            type="checkbox"
            defaultChecked={false}
            checked={isOpenNewTab}
            onChange={(event) => {
              storage.isOpenNewTab = event.target.checked;
              setIsOpenNewTab(storage.isOpenNewTab);
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
            defaultChecked={false}
            checked={enableConsoleLog}
            onChange={(event) => {
              storage.enableConsoleLog = event.target.checked;
              setEnableConsoleLog(storage.enableConsoleLog);
              storage.saveValues();
            }}
          />
          <span className="label-info">ログをConsoleに流す</span>
        </label>
      </div>
    </CardContainer>
  );
};
