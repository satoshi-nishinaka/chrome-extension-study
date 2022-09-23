import * as React from 'react';
import { CardContainer } from '../../Container/CardContainer';
import { ImageButton } from '../../Component/ImageButton';
import { IStorage } from '../../Storage';

type Props = {
  storage: IStorage;
};
export const MediaLinksSection = (props: Props): JSX.Element => {
  const { storage } = props;
  return (
    <CardContainer title="☆Tools★">
      <ImageButton
        title="DAZN"
        image="http://cdn.dazn.com/app/web/1.36.4/images/favicon/favicon-96x96.png"
        url="https://www.dazn.com/ja-JP/home"
        storage={storage}
      />
      <ImageButton
        title="AbemaTV(アベマTV) | 無料で楽しめるインターネットテレビ局"
        image="https://abema.tv/favicon.ico?v=2"
        url="https://abema.tv/"
        storage={storage}
      />
      <ImageButton
        title="【公式】J SPORTS総合サイト | 国内最大4チャンネルのスポーツテレビ局"
        image="https://www.jsports.co.jp/favicon.ico"
        url="https://www.jsports.co.jp/"
        storage={storage}
      />
      <ImageButton
        title="Netflix"
        url="https://www.netflix.com/"
        image="https://assets.nflxext.com/ffe/siteui/common/icons/nficon2016.ico"
        storage={storage}
      />
      <ImageButton
        title="njpwworld.com 新日本プロレスワールド"
        url="http://njpwworld.com/"
        image="http://njpwworld.com/favicon.ico"
        storage={storage}
      />
    </CardContainer>
  );
};
