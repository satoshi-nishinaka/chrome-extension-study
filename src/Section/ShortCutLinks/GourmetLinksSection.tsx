import * as React from 'react';
import { CardContainer } from '../../Container/CardContainer';
import { ImageButton } from '../../Component/ImageButton';
import { IStorage } from '../../Storage';

type Props = {
  storage: IStorage;
};
export const GourmetLinksSection = (props: Props): React.ReactNode => {
  const { storage } = props;
  return (
    <CardContainer title="☆Gourmet★">
      <ImageButton
        title="Rettyグルメ[レッティ]"
        image="https://retty.me/favicon.ico"
        url="https://retty.me/"
        storage={storage}
      />
      <ImageButton
        title="食べログ - ランキングと口コミで探せるグルメサイト"
        image="https://tblg.k-img.com/favicon.ico?20170919"
        url="https://tabelog.com/"
        storage={storage}
      />
      <ImageButton
        title="ぐるなび - レストラン予約と宴会・グルメ情報 検索サイト"
        image="http://c-www.gnst.jp/img/icon/favicon.ico"
        url="https://www.gnavi.co.jp/"
        storage={storage}
      />
    </CardContainer>
  );
};
