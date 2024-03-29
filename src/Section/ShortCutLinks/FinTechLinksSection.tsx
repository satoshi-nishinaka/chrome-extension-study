import * as React from 'react';
import { CardContainer } from '../../Container/CardContainer';
import { ImageButton } from '../../Component/ImageButton';
import { IStorage } from '../../Storage';

type Props = {
  storage: IStorage;
};
export const FinTechLinksSection = (props: Props): JSX.Element => {
  const { storage } = props;
  return (
    <CardContainer title="☆Fin-tech★">
      <ImageButton
        title="家計簿アプリ・家計簿ソフト「マネーフォワード」"
        image="icons/mf.ico"
        url="https://moneyforward.com/"
        storage={storage}
      />
      <ImageButton
        title="仮想通貨ビットコイン（Bitcoin）の購入/販売所/取引所【bitFlyer】"
        image="https://bitflyer.com/favicon.ico"
        url="https://bitflyer.com/ja-jp/"
        storage={storage}
      />
    </CardContainer>
  );
};
