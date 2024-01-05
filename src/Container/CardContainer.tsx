import * as React from 'react';

type CardContainerProps = {
  title?: string;
  cardClassName?: string;
  cardBodyClassName?: string;
  children?: React.ReactNode;
};

export const CardContainer: React.FC<CardContainerProps> = ({
  title,
  cardClassName,
  cardBodyClassName,
  children,
}) => {
  const cardClass = 'card' + (cardClassName ? ` ${cardClassName}` : '');
  const cardBodyClass =
    'card-body' + (cardBodyClassName ? ` ${cardBodyClassName}` : '');
  return (
    <article className={cardClass}>
      {title && <h6 className="card-header">{title}</h6>}
      <div className={cardBodyClass}>{children}</div>
    </article>
  );
};
