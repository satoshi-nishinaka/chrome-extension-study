import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useState } from 'react';
import TabEntry from '../Component/TabEntry';
import { TabContainer } from './TabContainer';
import LinkButton from '../Component/LinkButton';
import PageInformationSection from '../Section/PageInformationSection';
import ToolsSection from '../Section/ToolsSection';
import SNSLinksSection from '../Section/ShortCutLinks/SNSLinksSection';
import MediaLinksSection from '../Section/ShortCutLinks/MediaLinksSection';
import NewsLinksSection from '../Section/ShortCutLinks/NewsLinksSection';
import GourmetLinksSection from '../Section/ShortCutLinks/GourmetLinksSection';
import FinTechLinksSection from '../Section/ShortCutLinks/FinTechLinksSection';
import SettingSection from '../Section/SettingSection';
import { Storage } from '../Storage';
import { CardContainer } from './CardContainer';

export default function PopupContainer(): JSX.Element {
  const [storage] = useState(new Storage());

  return (
    <div className="form-group">
      <section>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <TabEntry title="共通リンク" identify="home" active={true} />
          <TabEntry title="ツール" identify="tools" active={false} />
          <TabEntry
            title="ページ情報"
            identify="page-information"
            active={false}
          />
          <TabEntry title="設定" identify="settings" active={false} />
          <TabEntry title="About" identify="about" active={false} />
        </ul>
        <div className="tab-content" id="myTabContent">
          <TabContainer active={true} identify="home" title={null}>
            <SNSLinksSection />
            <MediaLinksSection />
            <NewsLinksSection />
            <GourmetLinksSection />
            <FinTechLinksSection />
          </TabContainer>
          <TabContainer active={false} identify="tools" title="Tools">
            <ToolsSection />
          </TabContainer>
          <TabContainer
            active={false}
            identify="page-information"
            title="Page Information"
          >
            <PageInformationSection />
          </TabContainer>
          <TabContainer active={false} identify="settings" title="Settings">
            <SettingSection storage={storage} />
          </TabContainer>
          <TabContainer active={false} identify="about" title="About">
            <CardContainer title={null} cardClassName="text-center">
              <LinkButton
                text="GitHub"
                url="https://github.com/satoshi-nishinaka/chrome-extension-study"
              />
            </CardContainer>
          </TabContainer>
        </div>
      </section>
    </div>
  );
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<PopupContainer />, root);
}
