import * as React from 'react';
import { unique } from '../Functions/Unique';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}
interface State {
  text: string;
}
export default class OpenByTextButton extends React.Component<Props, State> {
  state: State = {
    text: '',
  };

  handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    this.setState({
      text: event.target.value,
    });
  };

  execute = (): void => {
    const lines = unique(this.state.text.split('\n'));
    for (const line of lines) {
      if (line.startsWith('http://') || line.startsWith('https://')) {
        chrome.tabs.create({
          url: line,
        });
      }
    }
  };
  render(): JSX.Element {
    return (
      <>
        <textarea
          className="form-control mx-auto"
          rows={5}
          onChange={this.handleChange}
          value={this.state.text}
        />
        <button
          className="btn btn-primary btn-sm w-100 mt-2"
          onClick={this.execute}
        >
          URLを開く
        </button>
      </>
    );
  }
}
