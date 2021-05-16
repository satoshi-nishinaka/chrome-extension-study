import * as React from 'react';
import { CardContainer } from '../../Container/CardContainer';
import ImageButton from '../../Component/ImageButton';

export default function FinTechLinksSection(): JSX.Element {
  return (
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
  );
}
