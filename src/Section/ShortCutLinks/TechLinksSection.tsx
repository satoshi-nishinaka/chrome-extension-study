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
      <span> | </span>
      <ImageButton
        title="ChatGPT"
        url="https://chatgpt.com/"
        image="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='180'%20height='180'%20fill='none'%3e%3cstyle%3e%20:root%20{%20--primary-fill:%20%23000;%20--secondary-fill:%20%23fff;%20}%20@media%20(prefers-color-scheme:%20dark)%20{%20:root%20{%20--primary-fill:%20%23fff;%20--secondary-fill:%20%23000;%20}%20}%20%3c/style%3e%3cg%20clip-path='url(%23a)'%3e%3crect%20width='180'%20height='180'%20fill='var(--primary-fill)'%20rx='90'%20/%3e%3cg%20clip-path='url(%23b)'%3e%3cpath%20fill='var(--secondary-fill)'%20d='M75.91%2073.628V62.232c0-.96.36-1.68%201.199-2.16l22.912-13.194c3.119-1.8%206.838-2.639%2010.676-2.639%2014.394%200%2023.511%2011.157%2023.511%2023.032%200%20.839%200%201.799-.12%202.758l-23.752-13.914c-1.439-.84-2.879-.84-4.318%200L75.91%2073.627Zm53.499%2044.383v-27.23c0-1.68-.72-2.88-2.159-3.719L97.142%2069.55l9.836-5.638c.839-.48%201.559-.48%202.399%200l22.912%2013.195c6.598%203.839%2011.035%2011.995%2011.035%2019.912%200%209.116-5.397%2017.513-13.915%2020.992v.001Zm-60.577-23.99-9.836-5.758c-.84-.48-1.2-1.2-1.2-2.16v-26.39c0-12.834%209.837-22.55%2023.152-22.55%205.039%200%209.716%201.679%2013.676%204.678L70.993%2055.516c-1.44.84-2.16%202.039-2.16%203.719v34.787-.002Zm21.173%2012.234L75.91%2098.339V81.546l14.095-7.917%2014.094%207.917v16.793l-14.094%207.916Zm9.056%2036.467c-5.038%200-9.716-1.68-13.675-4.678l23.631-13.676c1.439-.839%202.159-2.038%202.159-3.718V85.863l9.956%205.757c.84.48%201.2%201.2%201.2%202.16v26.389c0%2012.835-9.957%2022.552-23.27%2022.552v.001Zm-28.43-26.75L47.72%20102.778c-6.599-3.84-11.036-11.996-11.036-19.913%200-9.236%205.518-17.513%2014.034-20.992v27.35c0%201.68.72%202.879%202.16%203.718l29.989%2017.393-9.837%205.638c-.84.48-1.56.48-2.399%200Zm-1.318%2019.673c-13.555%200-23.512-10.196-23.512-22.792%200-.959.12-1.919.24-2.879l23.63%2013.675c1.44.84%202.88.84%204.32%200l30.108-17.392v11.395c0%20.96-.361%201.68-1.2%202.16l-22.912%2013.194c-3.119%201.8-6.837%202.639-10.675%202.639Zm29.748%2014.274c14.515%200%2026.63-10.316%2029.39-23.991%2013.434-3.479%2022.071-16.074%2022.071-28.91%200-8.396-3.598-16.553-10.076-22.43.6-2.52.96-5.039.96-7.557%200-17.153-13.915-29.99-29.989-29.99-3.239%200-6.358.48-9.477%201.56-5.398-5.278-12.835-8.637-20.992-8.637-14.515%200-26.63%2010.316-29.39%2023.991-13.434%203.48-22.07%2016.074-22.07%2028.91%200%208.396%203.598%2016.553%2010.075%2022.431-.6%202.519-.96%205.038-.96%207.556%200%2017.154%2013.915%2029.989%2029.99%2029.989%203.238%200%206.357-.479%209.476-1.559%205.397%205.278%2012.835%208.637%2020.992%208.637Z'%20/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='a'%3e%3cpath%20fill='var(--primary-fill)'%20d='M0%200h180v180H0z'%20/%3e%3c/clipPath%3e%3cclipPath%20id='b'%3e%3cpath%20fill='var(--primary-fill)'%20d='M29.487%2029.964h121.035v119.954H29.487z'%20/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
        storage={storage}
      />
      <ImageButton
        title="Gemini"
        url="https://gemini.google.com/app?hl=ja"
        image="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg"
        storage={storage}
      />
      <ImageButton
        title="Claude"
        url="https://claude.ai/new"
        image="https://claude.ai/favicon.ico"
        storage={storage}
      />
    </CardContainer>
  );
};
