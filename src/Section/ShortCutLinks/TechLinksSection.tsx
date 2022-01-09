import * as React from 'react';
import { ImageButton } from '../../Component/ImageButton';
import { CardContainer } from '../../Container/CardContainer';

export const TechLinksSection = (): JSX.Element => {
  return (
    <CardContainer title="☆Tech★">
      <ImageButton
        title="GitHub"
        url="https://github.com/"
        image="https://github.githubassets.com/favicons/favicon.svg"
      />
      <ImageButton
        title="開発者向けのウェブ技術 | MDN"
        url="https://developer.mozilla.org/ja/docs/Web"
        image="https://developer.mozilla.org/favicon-48x48.97046865.png"
      />
      <ImageButton
        title="Packagist"
        image="icons/packagist.ico"
        url="https://packagist.org/"
      />
    </CardContainer>
  );
};
