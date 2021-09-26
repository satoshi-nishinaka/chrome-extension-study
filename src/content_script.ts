import * as $ from 'jquery';
import { Storage } from './Storage';
import { unique } from './Functions/Unique';

const ignoreTags = [
    'head',
    'script',
    'meta',
]

const storage = new Storage();
storage.readValues(() => {
  if (storage.enableHighlight === false || !storage.highlightWords) {
    return;
  }
  console.debug('start replaceHighlightText ');
  const highlightWords = unique(storage.highlightWords.trim().split('\n'));
  const highlight = (highlightWords: string[]): void => {
    $('*').map((index, domElement) => {
      let html = domElement.innerHTML;
      console.debug(domElement.tagName)
      if (ignoreTags.includes(domElement.tagName)) {
        return
      }
      highlightWords.map((value) => {
        const regExp = new RegExp(`(${value})`, 'g');
        html = html.replace(
          regExp,
          '<span class="shortcut-extension-highlight">$1</span>'
        );
      });

      domElement.innerHTML = html;
    });
    console.debug('replace finish');
  };
  highlight(highlightWords);
});
