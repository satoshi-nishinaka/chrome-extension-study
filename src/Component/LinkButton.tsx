import * as React from 'react';
import { transitionToNextPage } from '../Functions/Transition';
import { Storage } from '../Storage';

interface LinkButtonProps {
  text: string;
  url: string;
}

export default function LinkButton(props: LinkButtonProps): JSX.Element {
  const { text, url } = props;
  const transitionTo = (): void => {
    const storage = new Storage();
    storage.readValues(() => {
      transitionToNextPage(url, storage.isOpenNewTab);
    });
  };

  return (
    <button className="btn btn-primary w-80" onClick={transitionTo}>
      {text}
    </button>
  );
}
