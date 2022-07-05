import * as React from 'react';
import { CardContainer } from '../Container/CardContainer';
import { useEffect, useState } from 'react';

export const PageInformationSection = (): JSX.Element => {
  const [state, setState] = useState({
    title: '',
    url: '',
    favicon: '',
    meta: '',
  });

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      const pageSummary =
        `${activeTab.title}\n${activeTab.url}` +
        (activeTab.favIconUrl ? `\n${activeTab.favIconUrl}` : '');
      setState({
        title: activeTab.title ?? '',
        url: activeTab.url ?? '',
        favicon: activeTab.favIconUrl ?? '',
        meta: pageSummary ?? '',
      });
    });
  }, []);

  return (
    <>
      <CardContainer
        title="☆Favicon★"
        cardClassName="m-2"
        cardBodyClassName="mx-2"
      >
        <textarea className="form-control" readOnly value={state.favicon} />
      </CardContainer>
      <CardContainer
        title="☆Title★"
        cardClassName="m-2"
        cardBodyClassName="mx-2"
      >
        <textarea className="form-control" readOnly value={state.title} />
      </CardContainer>
      <CardContainer title="☆URL★" cardClassName="m-2" cardBodyClassName="mx-2">
        <textarea className="form-control" readOnly value={state.url} />
      </CardContainer>
      <CardContainer title="☆All★" cardClassName="m-2" cardBodyClassName="mx-2">
        <textarea
          className="form-control"
          rows={3}
          readOnly
          value={state.meta}
        />
      </CardContainer>
    </>
  );
};
