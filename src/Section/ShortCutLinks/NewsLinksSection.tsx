import * as React from 'react';
import { CardContainer } from '../../Container/CardContainer';
import { ImageButton } from '../../Component/ImageButton';

export const NewsLinksSection = (): JSX.Element => {
  return (
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
      <ImageButton
        title="花粉飛散情報 2021 - 日本気象協会 tenki.jp"
        image="https://tenki.jp/favicon.ico"
        url="https://tenki.jp/pollen/"
      />
    </CardContainer>
  );
};
