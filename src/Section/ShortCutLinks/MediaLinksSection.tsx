import * as React from 'react';
import { CardContainer } from '../../Container/CardContainer';
import { ImageButton } from '../../Component/ImageButton';

export const MediaLinksSection = (): JSX.Element => {
  return (
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
  );
};
