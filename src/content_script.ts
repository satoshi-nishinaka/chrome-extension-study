import * as $ from 'jquery';
import { Storage } from './Storage';
import { unique } from './Functions/Unique';

// そもそもチェックしなくて良いタグは最初から弾く
const ignoreTags = ['head', 'title', 'script', 'style', 'meta', 'svg', 'img'];

const storage = new Storage();
storage.readValues().then(() => {
  if (storage.enableHighlight === false || !storage.highlightWords) {
    return;
  }
  const highlightWords = unique(storage.highlightWords.trim().split('\n'));
  const highlight = (highlightWords: string[]): void => {
    $('*').map((index, domElement) => {
      if (ignoreTags.includes(domElement.tagName.toLowerCase())) {
        return;
      }
      if (
        domElement.hasChildNodes() &&
        (domElement.childNodes.length !== 1 ||
          domElement.childNodes[0].nodeName !== '#text')
      ) {
        // 子要素のAttributeを書き換えてしまうケースがあるので子要素がある場合はスキップ
        // テキスト要素もhasChildNodes === trueになる
        return;
      }

      let html = domElement.innerHTML;
      const text = domElement.innerText;
      highlightWords.map((value) => {
        if (!text || text.indexOf(value) === -1) {
          return;
        }
        const regExp = new RegExp(`(${value})`, 'g');
        html = html.replace(
          regExp,
          '<span class="shortcut-extension-highlight">$1</span>'
        );
      });

      domElement.innerHTML = html;
    });
    if (storage.enableConsoleLog) {
      console.debug('replace finish');
    }
    if (storage.showSucceedMessage) {
      $('body').append(
        '<span class="shortcut-extension-succeed-message">Highlight text</span>'
      );
      $('.shortcut-extension-succeed-message').on('click', () => {
        console.log('clicked');
        $('.shortcut-extension-succeed-message').css('display', 'none');
      });
    }
  };
  if (storage.enableConsoleLog) {
    console.debug('start replaceHighlightText ');
  }
  highlight(highlightWords);
});
