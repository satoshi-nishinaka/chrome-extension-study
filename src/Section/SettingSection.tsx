import * as React from 'react';
import { useEffect, useState } from 'react';
import { Storage } from '../Storage';
import { CardContainer } from '../Container/CardContainer';

interface SettingSectionProps {
  storage: Storage;
}

export default function SettingSection(
  props: SettingSectionProps
): JSX.Element {
  const [storage] = useState(props.storage);
  const [isOpenNewTab, setIsOpenNewTab] = useState(false);

  useEffect(() => {
    // LocalStorageから設定情報を取得
    storage.readValues(() => {
      setIsOpenNewTab(storage.isOpenNewTab);
    });
  }, []);

  return (
    <CardContainer>
      <div className="form-row px-2">
        <label>
          <input
            name="isOpenNewTab"
            type="checkbox"
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
    </CardContainer>
  );
}
