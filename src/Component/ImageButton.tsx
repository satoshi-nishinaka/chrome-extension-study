import * as React from 'react';
import { IStorage } from '../Storage';
import { transitionToNextPage } from '../Functions/Transition';

type ImageButtonProps = {
  title: string;
  image: string;
  url: string;
  storage: IStorage;
};

export const ImageButton = (props: ImageButtonProps): React.ReactNode => {
  const { title, image, url, storage } = props;

  const transitionTo = (): void => {
    transitionToNextPage(url, storage.isOpenNewTab);
    window.close();
  };

  return (
    <button data-toggle="tooltip" title={title} className="btn-image">
      <img src={image} alt={title} onClick={transitionTo} />
    </button>
  );
};
