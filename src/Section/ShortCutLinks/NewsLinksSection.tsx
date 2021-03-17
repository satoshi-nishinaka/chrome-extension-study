import CardContainer from '../../Container/CardContainer';
import ImageButton from '../../Component/ImageButton';
import * as React from 'react';

export function NewsLinksSection(): JSX.Element {
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
    </CardContainer>
  );
}
