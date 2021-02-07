import * as React from "react";

interface Props {
  active: boolean;
  identify: string;
}

interface State {
  active?: boolean;
  identify?: string;
}

export default class TabContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      active: props.active,
      identify: props.identify,
    };
  }

  render() {
    const className =
      "tab-pane fade show" + (this.state.active ? " active" : "");
    return (
      <div
        className={className}
        id={this.state.identify}
        role="tabpanel"
        aria-labelledby={this.state.identify + "-tab"}
      >
        {React.Children.map(this.props.children, (child) => {
          return child;
        })}
      </div>
    );
  }
}
