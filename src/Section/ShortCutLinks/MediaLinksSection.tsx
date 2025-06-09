import * as React from 'react';
import { CardContainer } from '../../Container/CardContainer';
import { ImageButton } from '../../Component/ImageButton';
import { IStorage } from '../../Storage';

type Props = {
  storage: IStorage;
};
export const MediaLinksSection = (props: Props): React.ReactNode => {
  const { storage } = props;
  return (
    <CardContainer title="☆Media★">
      <ImageButton
        title="Netflix"
        url="https://www.netflix.com/"
        image="https://assets.nflxext.com/ffe/siteui/common/icons/nficon2016.ico"
        storage={storage}
      />
      <ImageButton
        title="U-NEXT（ユーネクスト）-映画 / ドラマ / アニメから、マンガや雑誌といった電子書籍まで-│31日間無料トライアル"
        image="https://video.unext.jp/favicon.svg"
        url="https://video.unext.jp/"
        storage={storage}
      />
      <ImageButton
        title="AbemaTV(アベマTV) | 無料で楽しめるインターネットテレビ局"
        image="https://abema.tv/favicon.ico?v=2"
        url="https://abema.tv/"
        storage={storage}
      />
      <ImageButton
        title="TVer - 無料で動画見放題"
        url="https://tver.jp/"
        image="https://tver.jp/favicon.ico"
        storage={storage}
      />
      <ImageButton
        title="YouTube"
        image="https://s.ytimg.com/yts/img/favicon_32-vflOogEID.png"
        url="https://www.youtube.com/"
        storage={storage}
      />
      <ImageButton
        title="Spotify - Web Player：すべての人に音楽を"
        image="https://open.spotifycdn.com/cdn/images/favicon.0f31d2ea.ico"
        url="https://open.spotify.com/intl-ja"
        storage={storage}
      />
      <ImageButton
        title="radiko"
        url="https://radiko.jp/#!/top"
        image="https://radiko.jp/favicon.ico"
        storage={storage}
      />
      <ImageButton
        title="DAZN"
        image="https://www.dazn.com/favicon.svg"
        url="https://www.dazn.com/ja-JP/home"
        storage={storage}
      />
      <ImageButton
        title="【公式】J SPORTS総合サイト | 国内最大4チャンネルのスポーツテレビ局"
        image="https://www.jsports.co.jp/favicon.ico"
        url="https://www.jsports.co.jp/"
        storage={storage}
      />
      <ImageButton
        title="NJPW WORLD"
        url="https://www.njpwworld.com/"
        image="https://storage.googleapis.com/njpwworld/gallery/images/favicon.ico"
        storage={storage}
      />
    </CardContainer>
  );
};
