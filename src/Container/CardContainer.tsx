import * as React from "react";

interface Props {
  title: string;
}

interface State {
  title?: string;
}

export default class CardContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      title: props.title,
    };
  }
  render() {
    return (
      <article className="card">
        <h6 className="card-header">{this.state.title}</h6>
        <div className="card-body">
          {React.Children.map(this.props.children, (child) => {
            return child;
          })}
        </div>
      </article>
    );
  }
}
