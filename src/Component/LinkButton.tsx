import * as React from 'react';
import { transitionToNextPage } from '../Functions/Transition';
import { Storage } from '../Storage';

interface LinkButtonProps {
  text: string;
  url: string;
}

interface LinkButtonState {
  url?: string;
  text?: string;
}

export default class LinkButton extends React.Component<
  LinkButtonProps,
  LinkButtonState
> {
  state: LinkButtonState = {
    url: '',
    text: '',
  };

  constructor(props: LinkButtonProps) {
    super(props);
    this.state = {
      url: props.url,
      text: props.text,
    };
  }

  transitionTo = (): void => {
    const storage = new Storage();
    storage.readValues(() => {
      const url = this.state.url;
      transitionToNextPage(url, storage.isOpenNewTab);
    });
  };

  render(): JSX.Element {
    return (
      <button className="btn btn-primary w-80" onClick={this.transitionTo}>
        {this.state.text}
      </button>
    );
  }
}
