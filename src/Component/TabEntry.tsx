import * as React from 'react';

type TabEntryProps = {
  title: string;
  identify: string;
  activeTabId: string;
  onClickEvent: () => void;
};

export default function (props: TabEntryProps): JSX.Element {
  const { title, identify, activeTabId, onClickEvent } = props;

  const href = `#${identify}`;
  const className = 'nav-link' + (activeTabId === identify ? ' active' : '');
  return (
    <li className="nav-item" onClick={() => onClickEvent()}>
      <a
        className={className}
        id="home-tab"
        data-toggle="tab"
        href={href}
        role="tab"
        aria-controls={identify}
        aria-selected="true"
      >
        {title}
      </a>
    </li>
  );
}
