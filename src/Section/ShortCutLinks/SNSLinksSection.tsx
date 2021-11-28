import * as React from 'react';
import { ImageButton } from '../../Component/ImageButton';
import { CardContainer } from '../../Container/CardContainer';

export const SNSLinksSection = (): JSX.Element => {
  return (
    <CardContainer title="☆SNS★">
      <ImageButton
        title="FaceBook"
        image="icons/facebook.ico"
        url="https://www.facebook.com/"
      />
      <ImageButton
        title="Instagram"
        image="https://www.instagram.com/static/images/ico/favicon.ico/36b3ee2d91ed.ico"
        url="https://www.instagram.com/"
      />
      <ImageButton
        title="Twitter"
        image="https://abs.twimg.com/favicons/favicon.ico"
        url="https://twitter.com/"
      />
      <ImageButton
        title="Find your inspiration. | Flickr"
        image="https://s.yimg.com/pw/favicon.ico"
        url="https://www.flickr.com/"
      />
      <ImageButton
        title="LinkedIn"
        image="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca"
        url="https://www.linkedin.com/"
      />
      <ImageButton
        title="YouTube"
        image="https://s.ytimg.com/yts/img/favicon_32-vflOogEID.png"
        url="https://www.youtube.com/"
      />
      <ImageButton
        title="Last.fm"
        image="https://www.last.fm/static/images/favicon.702b239b6194.ico"
        url="https://www.last.fm/ja/home"
      />
    </CardContainer>
  );
};
