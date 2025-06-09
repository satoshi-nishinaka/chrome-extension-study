import * as React from 'react';
import { CardContainer } from '../../Container/CardContainer';
import { ImageButton } from '../../Component/ImageButton';
import { IStorage } from '../../Storage';

type Props = {
  storage: IStorage;
};
export const NewsLinksSection = (props: Props): React.ReactNode => {
  const { storage } = props;
  return (
    <CardContainer title="☆News★">
      <ImageButton
        title="Yahoo!ニュース"
        url="https://news.yahoo.co.jp/"
        image="https://s.yimg.jp/c/icon/s/bsc/2.0/favicon.ico"
        storage={storage}
      />
      <ImageButton
        title="NHKニュース 速報・最新情報"
        url="https://www3.nhk.or.jp/news/"
        image="https://www3.nhk.or.jp/news/parts16/images/favicon/favicon.ico"
        storage={storage}
      />
      <ImageButton
        title="スポーツナビ"
        image="https://s.yimg.jp/images/sports/common/favicon/favicon.ico"
        url="https://sports.yahoo.co.jp/"
        storage={storage}
      />
      <ImageButton
        title="日刊スポーツ : nikkansports.com"
        url="https://www.nikkansports.com/"
        image="https://cache2.nipc.jp/mod2015/img/icon/favicon.ico"
        storage={storage}
      />
      <ImageButton
        title="スポニチ Sponichi Annex"
        url="https://www.sponichi.co.jp/"
        image="https://www.sponichi.co.jp/favicon.ico"
        storage={storage}
      />
      <ImageButton
        title="グノシー 無料で読めるニュースまとめ"
        image="https://gunosy.com/favicon.ico"
        url="https://gunosy.com/"
        storage={storage}
      />
      <ImageButton
        title="花粉飛散情報 2021 - 日本気象協会 tenki.jp"
        image="https://tenki.jp/favicon.ico"
        url="https://tenki.jp/pollen/"
        storage={storage}
      />
    </CardContainer>
  );
};
