import React = require('react');
import { Storage } from '../Storage';
import { useEffect, useState } from 'react';
interface HighlightSectionProps {
  storage: Storage;
}
type State = {
  enableHighlight: boolean;
  highlightWords: string;
  showSucceedMessage: boolean;
};

export const HighlightSection = ({
  storage,
}: HighlightSectionProps): JSX.Element => {
  const [state, setState] = useState<State>({
    enableHighlight: false,
    highlightWords: '',
    showSucceedMessage: false,
  });

  const saveHighlightWords = (): void => {
    storage.highlightWords = state.highlightWords;
    storage.showSucceedMessage = state.showSucceedMessage;
    storage.saveValues();
  };

  useEffect(() => {
    storage.readValues(() => {
      setState({
        highlightWords: storage.highlightWords,
        enableHighlight: storage.enableHighlight,
        showSucceedMessage: storage.showSucceedMessage,
      });
    });
  }, []);

  return (
    <div>
      <label
        className={state.enableHighlight ? 'label label-enabled' : 'label'}
        onClick={() => {
          const value = !state.enableHighlight;
          setState({ ...state, enableHighlight: value });
          storage.enableHighlight = value;
          storage.saveValues();
        }}
      >
        ハイライト有効
      </label>
      <textarea
        className="form-control"
        rows={8}
        disabled={!state.enableHighlight}
        defaultChecked={false}
        onChange={(event) =>
          setState({ ...state, highlightWords: event.target.value })
        }
        value={state.highlightWords}
      />
      <div className="my-2">
        <label>
          <input
            type="checkbox"
            className="mx-2"
            defaultChecked={false}
            checked={state.showSucceedMessage}
            onClick={() =>
              setState({
                ...state,
                showSucceedMessage: !state.showSucceedMessage,
              })
            }
          />
          ハイライトに成功した場合にメッセージを表示する
        </label>
      </div>
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
