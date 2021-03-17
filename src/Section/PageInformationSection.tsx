import * as React from 'react';
import CardContainer from "../Container/CardContainer";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}
interface State {
  title: string;
  favicon: string;
  url: string;
  meta: string;
}

export default class PageInformationSection extends React.Component<
  Props,
  State
> {
  state: State = {
    title: '',
    url: '',
    favicon: '',
    meta: '',
  };

  componentDidMount(): void {
    chrome.tabs.getSelected(null, (tab) => {
      const pageSummary =
        `${tab.title}\n${tab.url}` +
        (tab.favIconUrl ? `\n${tab.favIconUrl}` : '');
      this.setState({
        title: tab.title ?? '',
        url: tab.url ?? '',
        favicon: tab.favIconUrl ?? '',
        meta: pageSummary ?? '',
      });
    });
  }

  render(): JSX.Element {
    return (
      <>
        <CardContainer
          title="☆Favicon★"
          className="m-2"
          cardBodyClassName="mx-2"
        >
          <textarea
            className="form-control"
            readOnly
            value={this.state.favicon}
          />
        </CardContainer>
        <CardContainer title="☆Title★" className="m-2" cardBodyClassName="mx-2">
          <textarea
            className="form-control"
            readOnly
            value={this.state.title}
          />
        </CardContainer>
        <CardContainer title="☆URL★" className="m-2" cardBodyClassName="mx-2">
          <textarea className="form-control" readOnly value={this.state.url} />
        </CardContainer>
        <CardContainer title="☆All★" className="m-2" cardBodyClassName="mx-2">
          <textarea
            className="form-control"
            rows={3}
            readOnly
            value={this.state.meta}
          />
        </CardContainer>
      </>
    );
  }
}
