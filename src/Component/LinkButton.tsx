import * as React from 'react';
import { transitionToNextPage } from '../Functions/Transition';
import { IStorage } from '../Storage';

type LinkButtonProps = {
  text: string;
  url: string;
  storage: IStorage;
};

export const LinkButton = (props: LinkButtonProps): React.ReactNode => {
  const { text, url, storage } = props;
  const transitionTo = (): void => {
    transitionToNextPage(url, storage.isOpenNewTab);
  };

  return (
    <button className="btn btn-primary w-80" onClick={transitionTo}>
      {text}
    </button>
  );
};
