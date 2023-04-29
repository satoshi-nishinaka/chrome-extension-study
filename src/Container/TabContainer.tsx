import * as React from 'react';

type TabContainerProps = {
  active: boolean;
  identify: string;
  title: string | null;
};

export const TabContainer: React.FC<TabContainerProps> = ({
  active,
  identify,
  title,
  children,
}) => {
  const tabClassName = 'tab-pane fade show' + (active ? ' active' : '');
  return (
    <div
      className={tabClassName}
      id={identify}
      role="tabpanel"
      aria-labelledby={identify + '-tab'}
    >
      {title && <h5 className="my-2">{title}</h5>}
      {children}
    </div>
  );
};
