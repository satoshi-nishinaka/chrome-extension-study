import * as React from 'react';
import { Storage } from '../Storage';
import { transitionToNextPage } from '../Functions/Transition';

interface ImageButtonProps {
  title: string;
  image: string;
  url: string;
}

interface ImageButtonState {
  image?: string;
  title?: string;
  url?: string;
}

export default class ImageButton extends React.Component<
  ImageButtonProps,
  ImageButtonState
> {
  state: ImageButtonState = {
    title: '',
    image: '',
    url: '',
  };

  constructor(props: ImageButtonProps) {
    super(props);
    this.state = {
      title: props.title,
      image: props.image,
      url: props.url,
    };
  }

  transitionTo = (): void => {
    const storage = new Storage();
    storage.readValues(() => {
      const url = this.state.url;
      transitionToNextPage(url, storage.isOpenNewTab);
      window.close();
    });
  };

  render(): JSX.Element {
    return (
      <button
        data-toggle="tooltip"
        title={this.state.title}
        className="btn-image"
      >
        <img
          src={this.state.image}
          alt={this.state.title}
          onClick={this.transitionTo}
        />
      </button>
    );
  }
}
