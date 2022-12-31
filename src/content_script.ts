import { Storage } from './Storage';
import { unique } from './Functions/Unique';
import {stringify} from "ts-jest";

// そもそもチェックしなくて良いタグは最初から弾く
const ignoreTags = [
  'html',
  'head',
  'title',
  'script',
  'style',
  'meta',
  'svg',
  'img',
];

console.info('short-cut-extension start');

/**
 * BackgroundScriptからメッセージを受け取る
 * ※順番が後ろの場合はメッセージを受け取れない
 */
chrome.runtime.onMessage.addListener((request) => {
  // 1. 任意のテキストを格納したテキストエリアを作成
  const textArea = document.createElement('textarea');
  textArea.value = `${request}`;
  document.body.appendChild(textArea);

  // 2. 作成したテキストエリアを選択し、クリップボードに保存
  textArea.select();
  document.execCommand('copy');

  // 3. テキストエリアを削除
  document.body.removeChild(textArea);

  alert('現在開いているページのタイトルとURLをクリップボードにコピーしました');
});

const storage = new Storage();
storage.readValues().then(() => {
  if (storage.enableHighlight === false || !storage.highlightWords) {
    return;
  }
  const highlightWords = unique(storage.highlightWords.trim().split('\n'));
  const highlight = (highlightWords: string[]): void => {
    const elements = document.querySelectorAll('*');
    elements.forEach((element) => {
      if (ignoreTags.includes(element.tagName.toLowerCase())) {
        return;
      }
      if (
        element.hasChildNodes() &&
        (element.childNodes.length !== 1 ||
          element.childNodes[0].nodeName !== '#text')
      ) {
        // 子要素のAttributeを書き換えてしまうケースがあるので子要素がある場合はスキップ
        // テキスト要素もhasChildNodes === trueになる
        return;
      }
      const htmlElement = element as HTMLElement;
      let html = element.innerHTML;
      const text = htmlElement.innerText;
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

      htmlElement.innerHTML = html;
    });
    if (storage.enableConsoleLog) {
      console.debug('replace finish');
    }
    if (storage.showSucceedMessage) {
      const label = document.createElement('span');
      label.innerHTML = 'Highlight text';
      label.className = 'shortcut-extension-succeed-message';
      label.addEventListener('click', () => {
        console.debug('clicked');
        const label = document.getElementsByClassName(
          'shortcut-extension-succeed-message'
        )[0] as HTMLElement;
        label.style.display = 'none';
      });
      // document.appendChild(label);
    }
  };
  if (storage.enableConsoleLog) {
    console.debug('start replaceHighlightText ');
  }
  highlight(highlightWords);
});
