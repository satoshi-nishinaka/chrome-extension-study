import * as React from 'react';
import { CardContainer } from '../../Container/CardContainer';
import { ImageButton } from '../../Component/ImageButton';
import { IStorage } from '../../Storage';

type Props = {
  storage: IStorage;
};
export const NewsLinksSection = (props: Props): JSX.Element => {
  const { storage } = props;
  return (
    <CardContainer title="☆News★">
      <ImageButton
        title="スポーツナビ"
        image="https://s.yimg.jp/images/sports/common/favicon/favicon.ico"
        url="https://sports.yahoo.co.jp/"
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
