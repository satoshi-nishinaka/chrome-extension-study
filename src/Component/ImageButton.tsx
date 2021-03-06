import * as React from 'react';
import { Storage } from '../Storage';
import { transitionToNextPage } from '../Functions/Transition';

interface ImageButtonProps {
  title: string;
  image: string;
  url: string;
}

export default function ImageButton(props: ImageButtonProps): JSX.Element {
  const { title, image, url } = props;

  const transitionTo = (): void => {
    const storage = new Storage();
    storage.readValues(() => {
      transitionToNextPage(url, storage.isOpenNewTab);
      window.close();
    });
  };

  return (
    <button data-toggle="tooltip" title={title} className="btn-image">
      <img src={image} alt={title} onClick={transitionTo} />
    </button>
  );
}
