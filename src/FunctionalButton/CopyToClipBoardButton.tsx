import * as React from 'react';
import { saveUrlAndTitle } from '../background';
export const CopyToClipBoardButton = (): JSX.Element => {
  return (
    <button
      className="btn btn-secondary btn-sm w-100"
      onClick={saveUrlAndTitle}
    >
      現在アクティブなタブのURLをクリップボードにコピーする
    </button>
  );
};
