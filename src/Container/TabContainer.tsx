import * as React from 'react';

type TabContainerProps = {
  activeTabId: string;
  identify: string;
  title: string | null;
  children?: React.ReactNode;
};

export const TabContainer: React.FC<TabContainerProps> = ({
  activeTabId,
  identify,
  title,
  children,
}) => {
  const tabClassName =
    'tab-pane fade show' + (activeTabId === identify ? ' active' : '');
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
