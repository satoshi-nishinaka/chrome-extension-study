import * as React from 'react';
import { unique } from '../Functions/Unique';
import { useState } from 'react';

export const OpenByTextButton = (): JSX.Element => {
  const [text, setText] = useState('');

  const execute = (): void => {
    const lines = unique(text.split('\n'));
    for (const line of lines) {
      if (line.startsWith('http://') || line.startsWith('https://')) {
        chrome.tabs.create({
          url: line,
        });
      }
    }
  };
  return (
    <>
      <textarea
        className="form-control mx-auto"
        rows={5}
        onChange={(event) => setText(event.target.value)}
        value={text}
      />
      <button className="btn btn-primary btn-sm w-100 mt-2" onClick={execute}>
        URLを開く
      </button>
    </>
  );
};
