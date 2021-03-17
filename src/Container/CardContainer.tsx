import * as React from 'react';

interface Props {
  title?: string;
  className?: string;
  cardBodyClassName?: string
}

interface State {
  title?: string;
  className?: string;
  cardBodyClassName?: string
}

export default class CardContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      title: props.title,
      className: props.className ?? '',
      cardBodyClassName: props.cardBodyClassName ?? '',
    };
  }
  render(): JSX.Element {
    const cardBodyClass =
        'card-body' +
        (this.props.cardBodyClassName ? ` ${this.props.cardBodyClassName}` : '');
    return (
      <article className="card">
        {this.state.title && (
          <h6 className="card-header">{this.state.title}</h6>
        )}
        <div className={cardBodyClass}>
          {React.Children.map(this.props.children, (child) => {
            return child;
          })}
        </div>
      </article>
    );
  }
}
