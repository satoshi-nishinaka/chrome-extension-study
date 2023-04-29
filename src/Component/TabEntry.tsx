import * as React from 'react';

type TabEntryProps = {
  title: string;
  identify: string;
  active: boolean;
};

export default function (props: TabEntryProps): JSX.Element {
  const { title, identify, active } = props;

  const href = `#${identify}`;
  const className = 'nav-link' + (active ? ' active' : '');
  return (
    <li className="nav-item">
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
