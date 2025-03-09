import * as React from 'react';
import { ImageButton } from '../../Component/ImageButton';
import { CardContainer } from '../../Container/CardContainer';
import { IStorage } from '../../Storage';

type Props = {
  storage: IStorage;
};
export const TechLinksSection = (props: Props): JSX.Element => {
  const { storage } = props;
  return (
    <CardContainer title="☆Tech★">
      <ImageButton
        title="GitHub"
        url="https://github.com/"
        image="https://github.githubassets.com/favicons/favicon.svg"
        storage={storage}
      />
      <ImageButton
        title="開発者向けのウェブ技術 | MDN"
        url="https://developer.mozilla.org/ja/docs/Web"
        image="https://developer.mozilla.org/favicon-48x48.bc390275e955dacb2e65.png"
        storage={storage}
      />
      <ImageButton
        title="Packagist"
        image="icons/packagist.ico"
        url="https://packagist.org/"
        storage={storage}
      />
    </CardContainer>
  );
};
