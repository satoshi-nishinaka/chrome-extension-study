import * as React from 'react';
import { unique } from '../Functions/Unique';
import { useState } from 'react';

export const OpenByTextButton = (): JSX.Element => {
  const [text, setText] = useState('');

  const execute = (): void => {
    const lines = unique(text.split('\n'));
    for (const url of lines) {
      if (url.startsWith('http://') || url.startsWith('https://')) {
        chrome.tabs.create({
          url: url,
          active: false,
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
