import * as React from 'react';

interface TabEntryProps {
  title: string;
  identify: string;
  active: boolean;
}

interface TabEntryState {
  title?: string;
  identify?: string;
  active?: boolean;
}

export default class TabEntry extends React.Component<
  TabEntryProps,
  TabEntryState
> {
  state: TabEntryState = {
    title: '',
    identify: '',
    active: false,
  };

  constructor(props: TabEntryProps) {
    super(props);
    this.state = {
      title: props.title,
      identify: props.identify,
      active: props.active,
    };
  }

  render(): JSX.Element {
    const href = `#${this.state.identify}`;
    const className = 'nav-link' + (this.state.active ? ' active' : '');
    return (
      <li className="nav-item">
        <a
          className={className}
          id="home-tab"
          data-toggle="tab"
          href={href}
          role="tab"
          aria-controls={this.state.identify}
          aria-selected="true"
        >
          {this.state.title}
        </a>
      </li>
    );
  }
}
