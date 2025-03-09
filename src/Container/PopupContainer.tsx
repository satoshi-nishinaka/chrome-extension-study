'use strict';

import * as React from 'react';
import { useState } from 'react';
import TabEntry from '../Component/TabEntry';
import { TabContainer } from './TabContainer';
import { LinkButton } from '../Component/LinkButton';
import { Storage } from '../Storage';
import { CardContainer } from './CardContainer';
import { FinTechLinksSection } from '../Section/ShortCutLinks/FinTechLinksSection';
import { GourmetLinksSection } from '../Section/ShortCutLinks/GourmetLinksSection';
import { MediaLinksSection } from '../Section/ShortCutLinks/MediaLinksSection';
import { NewsLinksSection } from '../Section/ShortCutLinks/NewsLinksSection';
import { PageInformationSection } from '../Section/PageInformationSection';
import { SettingSection } from '../Section/SettingSection';
import { SNSLinksSection } from '../Section/ShortCutLinks/SNSLinksSection';
import { TechLinksSection } from '../Section/ShortCutLinks/TechLinksSection';
import { ToolsSection } from '../Section/ToolsSection';
import { HighlightSection } from '../Section/HighlightSection';
import { createRoot } from 'react-dom/client';

const PopupContainer = (): JSX.Element => {
  const [storage] = useState(new Storage());
  const [activeTabId, setActiveTabId] = useState('home');

  return (
    <div className="form-group">
      <section>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <TabEntry
            title="共通リンク"
            identify="home"
            activeTabId={activeTabId}
            onClickEvent={() => setActiveTabId('home')}
          />
          <TabEntry
            title="ツール"
            identify="tools"
            activeTabId={activeTabId}
            onClickEvent={() => setActiveTabId('tools')}
          />
          <TabEntry
            title="ハイライト"
            identify="highlight"
            activeTabId={activeTabId}
            onClickEvent={() => setActiveTabId('highlight')}
          />
          <TabEntry
            title="ページ情報"
            identify="page-information"
            activeTabId={activeTabId}
            onClickEvent={() => setActiveTabId('page-information')}
          />
          <TabEntry
            title="設定"
            identify="settings"
            activeTabId={activeTabId}
            onClickEvent={() => setActiveTabId('settings')}
          />
          <TabEntry
            title="About"
            identify="about"
            activeTabId={activeTabId}
            onClickEvent={() => setActiveTabId('about')}
          />
        </ul>
        <div className="tab-content" id="myTabContent">
          <TabContainer activeTabId={activeTabId} identify="home" title={null}>
            <SNSLinksSection storage={storage} />
            <MediaLinksSection storage={storage} />
            <NewsLinksSection storage={storage} />
            <GourmetLinksSection storage={storage} />
            <FinTechLinksSection storage={storage} />
            <TechLinksSection storage={storage} />
          </TabContainer>
          <TabContainer
            activeTabId={activeTabId}
            identify="tools"
            title="Tools"
          >
            <ToolsSection storage={storage} />
          </TabContainer>
          <TabContainer
            activeTabId={activeTabId}
            identify="highlight"
            title="ハイライト"
          >
            <HighlightSection storage={storage} />
          </TabContainer>
          <TabContainer
            activeTabId={activeTabId}
            identify="page-information"
            title="Page Information"
          >
            <PageInformationSection />
          </TabContainer>
          <TabContainer
            activeTabId={activeTabId}
            identify="settings"
            title="Settings"
          >
            <SettingSection storage={storage} />
          </TabContainer>
          <TabContainer
            activeTabId={activeTabId}
            identify="about"
            title="About"
          >
            <CardContainer title={null} cardClassName="text-center">
              <LinkButton
                storage={storage}
                text="GitHub"
                url="https://github.com/satoshi-nishinaka/chrome-extension-study"
              />
            </CardContainer>
          </TabContainer>
        </div>
      </section>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<PopupContainer />);
