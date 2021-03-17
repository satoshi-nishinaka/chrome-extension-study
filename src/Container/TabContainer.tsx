import * as React from 'react';

interface Props {
  active: boolean;
  identify: string;
  title: string | null;
}

interface State {
  active?: boolean;
  identify?: string;
  title?: string | null;
}

export default class TabContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      active: props.active,
      identify: props.identify,
      title: props.title,
    };
  }

  render(): JSX.Element {
    const className =
      'tab-pane fade show' + (this.state.active ? ' active' : '');
    return (
      <div
        className={className}
        id={this.state.identify}
        role="tabpanel"
        aria-labelledby={this.state.identify + '-tab'}
      >
        {this.state.title && <h5 className="my-2">{this.state.title}</h5>}
        {React.Children.map(this.props.children, (child) => {
          return child;
        })}
      </div>
    );
  }
}
