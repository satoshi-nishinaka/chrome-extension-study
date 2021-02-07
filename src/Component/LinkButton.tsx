import * as React from "react";
import { LocalStorage } from "../LocalStorage";
import { transitionToNextPage } from "../Functions/Transition";

interface Props {
  text: string;
  url: string;
}

interface State {
  url?: string;
  text?: string;
}

export default class LinkButton extends React.Component<Props, State> {
  state: State = {
    url: "",
    text: "",
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      url: props.url,
      text: props.text,
    };
    this.transitionTo = this.transitionTo.bind(this);
  }

  transitionTo() {
    const storage = new LocalStorage();
    storage.readValues(() => {
      const url = this.state.url;
      transitionToNextPage(url, storage.isOpenNewTab);
    });
  }

  render() {
    return (
      <button className="btn btn-primary w-80" onClick={this.transitionTo}>
        {this.state.text}
      </button>
    );
  }
}
