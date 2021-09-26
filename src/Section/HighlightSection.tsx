import React = require('react');
import { Storage } from '../Storage';
import { useEffect, useState } from 'react';
interface HighlightSectionProps {
  storage: Storage;
}
export const HighlightSection = (props: HighlightSectionProps): JSX.Element => {
  const [storage] = useState(props.storage);
  const [enableHighlight, setEnableHighlight] = useState<boolean>();
  const [highlightWords, setHighlightWords] = useState<string>();

  const saveHighlightWords = (): void => {
    storage.highlightWords = highlightWords;
    storage.saveValues();
  };

  useEffect(() => {
    storage.readValues(() => {
      setHighlightWords(storage.highlightWords);
      setEnableHighlight(storage.enableHighlight);
    });
  }, []);

  return (
    <div>
      <label
        className={enableHighlight ? 'label label-enabled' : 'label'}
        onClick={() => {
          const value = !enableHighlight;
          setEnableHighlight(value);
          storage.enableHighlight = value;
          storage.saveValues();
        }}
      >
        ハイライト有効
      </label>
      <textarea
        className="form-control"
        rows={8}
        disabled={!enableHighlight}
        onChange={(event) => setHighlightWords(event.target.value)}
        value={highlightWords}
      />
      <button
        className="btn btn-primary btn-sm w-100 mt-2"
        onClick={saveHighlightWords}
      >
        保存する
      </button>
      <div className="p-2">
        ※ハイライトしたい単語を1行に1つずつ入力してください
      </div>
    </div>
  );
};
