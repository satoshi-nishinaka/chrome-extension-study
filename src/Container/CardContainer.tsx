import * as React from 'react';

interface Props {
  title?: string;
  className?: string;
}

interface State {
  title?: string;
  className?: string;
}

export default class CardContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      title: props.title,
      className: props.className,
    };
  }
  render() {
    const bodiesClassName =
      'card-body' + (this.state.className ? ` ${this.state.className}` : '')
    return (
      <article className="card">
        {this.state.title && (
          <h6 className="card-header">{this.state.title}</h6>
        )}
        <div className={bodiesClassName}>
          {React.Children.map(this.props.children, (child) => {
            return child;
          })}
        </div>
      </article>
    );
  }
}
