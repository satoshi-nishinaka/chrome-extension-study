import * as React from 'react';
import * as ReactDOM from 'react-dom';
import CardContainer from './CardContainer';
import ImageButton from '../Component/ImageButton';
import TabEntry from '../Component/TabEntry';
import TabContainer from './TabContainer';
import LinkButton from '../Component/LinkButton';
import ReloadAllTabsButton from "../FunctionalButton/ReloadAllTabsButton";
import CloseDuplicateTabButton from "../FunctionalButton/CloseDuplicateTabButton";
import CopyToClipBoardAllTabUrlButton from "../FunctionalButton/CopyToClipBoardAllTabUrlButton";
import CopyToClipBoardButton from "../FunctionalButton/CopyToClipBoardButton";
import PageInformationSection from "../Section/PageInformationSection";
import ToolsSection from "../Section/ToolsSection";

export default class PopupContainer extends React.Component {
  render(): JSX.Element {
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
              <CardContainer title="☆SNS★">
                <ImageButton
                  title="FaceBook"
                  image="https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico?_nc_eui2=AeHkbnXHk8-uQM0bm9AaOT7WPOn1bULX7cv759IrZkPcIP6tSZ3bESNu27hkrF2Bo5Wu3mi91ph1nXTWKotHDb77lmXS1hY28HjCxNDFaIoBrA"
                  url="https://www.facebook.com/"
                />
                <ImageButton
                  title="Instagram"
                  image="https://www.instagram.com/static/images/ico/favicon.ico/36b3ee2d91ed.ico"
                  url="https://www.instagram.com/"
                />
                <ImageButton
                  title="Twitter"
                  image="https://abs.twimg.com/favicons/favicon.ico"
                  url="https://twitter.com/"
                />
                <ImageButton
                  title="Find your inspiration. | Flickr"
                  image="https://s.yimg.com/pw/favicon.ico"
                  url="https://www.flickr.com/"
                />
                <ImageButton
                  title="LinkedIn"
                  image="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca"
                  url="https://www.linkedin.com/"
                />
                <ImageButton
                  title="YouTube"
                  image="https://s.ytimg.com/yts/img/favicon_32-vflOogEID.png"
                  url="https://www.youtube.com/"
                />
                <ImageButton
                  title="Last.fm"
                  image="https://www.last.fm/static/images/favicon.702b239b6194.ico"
                  url="https://www.last.fm/ja/home"
                />
              </CardContainer>
              <CardContainer title="☆Tools★">
                <ImageButton
                  title="DAZN"
                  image="http://cdn.dazn.com/app/web/1.36.4/images/favicon/favicon-96x96.png"
                  url="https://www.dazn.com/ja-JP/home"
                />
                <ImageButton
                  title="AbemaTV(アベマTV) | 無料で楽しめるインターネットテレビ局"
                  image="https://abema.tv/favicon.ico?v=2"
                  url="https://abema.tv/"
                />
                <ImageButton
                  title="【公式】J SPORTS総合サイト | 国内最大4チャンネルのスポーツテレビ局"
                  image="https://www.jsports.co.jp/favicon.ico"
                  url="https://www.jsports.co.jp/"
                />
              </CardContainer>
              <CardContainer title="☆News★">
                <ImageButton
                  title="スポーツナビ"
                  image="https://s.yimg.jp/images/sports/common/favicon/favicon.ico"
                  url="https://sports.yahoo.co.jp/"
                />
                <ImageButton
                  title="グノシー 無料で読めるニュースまとめ"
                  image="https://gunosy.com/favicon.ico"
                  url="https://gunosy.com/"
                />
              </CardContainer>
              <CardContainer title="☆Gourmet★">
                <ImageButton
                  title="Rettyグルメ[レッティ]"
                  image="https://retty.me/favicon.ico"
                  url="https://retty.me/"
                />
                <ImageButton
                  title="食べログ - ランキングと口コミで探せるグルメサイト"
                  image="https://tblg.k-img.com/favicon.ico?20170919"
                  url="https://tabelog.com/"
                />
                <ImageButton
                  title="ぐるなび - レストラン予約と宴会・グルメ情報 検索サイト"
                  image="http://c-www.gnst.jp/img/icon/favicon.ico"
                  url="https://www.gnavi.co.jp/"
                />
              </CardContainer>
              <CardContainer title="☆Fin-tech★">
                <ImageButton
                  title="家計簿アプリ・家計簿ソフト「マネーフォワード」"
                  image="icons/mf.ico"
                  url="https://moneyforward.com/"
                />
                <ImageButton
                  title="仮想通貨ビットコイン（Bitcoin）の購入/販売所/取引所【bitFlyer】"
                  image="https://bitflyer.com/favicon.ico"
                  url="https://bitflyer.com/ja-jp/"
                />
              </CardContainer>
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
              <CardContainer>
                <div className="form-row px-2">
                  <label>
                    <input type="checkbox" id="btn_newtab" />
                    <span className="label-info">新しいタブで開く</span>
                  </label>
                </div>
              </CardContainer>
            </TabContainer>
            <TabContainer active={false} identify="about" title="About">
              <CardContainer title={null} className="text-center">
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
}

const root = document.getElementById('root')
if (root) {
  ReactDOM.render(<PopupContainer />, root);
}
