import * as React from 'react';

type CardContainerProps = {
  title?: string;
  cardClassName?: string;
  cardBodyClassName?: string;
  children?: React.ReactNode;
  isOpen?: boolean;
};

export const CardContainer: React.FC<CardContainerProps> = ({
  title,
  cardClassName,
  cardBodyClassName,
  children,
  isOpen = true,
}) => {
  const cardClass = 'card' + (cardClassName ? ` ${cardClassName}` : '');
  const cardBodyClass =
    'card-body' + (cardBodyClassName ? ` ${cardBodyClassName}` : '');
  const [opened, setOpened] = React.useState(isOpen);
  return (
    <article className={cardClass}>
      {title && (
        <h6
          className="card-header"
          onClick={() => {
            setOpened(!opened);
          }}
        >
          {title}
        </h6>
      )}
      {opened && <div className={cardBodyClass}>{children}</div>}
    </article>
  );
};
