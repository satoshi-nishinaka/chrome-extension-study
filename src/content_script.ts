import { Storage } from './Storage';
import { unique } from './Functions/Unique';

// そもそもチェックしなくて良いタグは最初から弾く
const ignoreTags = [
  'html',
  'head',
  'title',
  'script',
  'source',
  'style',
  'meta',
  'svg',
  'img',
];

const escapeRegExp = (value: string): string => {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

const replaceTextWithHighlight = (
  element: HTMLElement,
  highlightWords: string[]
): void => {
  const text = element.textContent;
  if (!text) {
    return;
  }

  const words = highlightWords.filter((word) => text.includes(word));
  if (words.length === 0) {
    return;
  }

  const pattern = new RegExp(
    `(${words.map((word) => escapeRegExp(word)).join('|')})`,
    'g'
  );
  const fragment = document.createDocumentFragment();

  for (const part of text.split(pattern)) {
    if (words.includes(part)) {
      const highlight = document.createElement('span');
      highlight.className = 'shortcut-extension-highlight';
      highlight.textContent = part;
      fragment.appendChild(highlight);
    } else {
      fragment.appendChild(document.createTextNode(part));
    }
  }

  element.replaceChildren(fragment);
};

console.info('---- short-cut-extension start ----');

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

const highlight = (storage: Storage): void => {
  if (storage.enableHighlight === false || !storage.highlightWords) {
    return;
  }
  const highlightWords = unique(storage.highlightWords.trim().split('\n'));
  if (storage.enableConsoleLog) {
    console.debug('start replaceHighlightText ');
  }
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
    replaceTextWithHighlight(element as HTMLElement, highlightWords);
  });
  if (storage.enableConsoleLog) {
    console.debug('replace finish');
  }
  if (storage.showSucceedMessage) {
    const label = document.createElement('span');
    label.textContent = 'Highlight text';
    label.className = 'shortcut-extension-succeed-message';
    label.addEventListener('click', () => {
      console.debug('clicked');
      const label = document.getElementsByClassName(
        'shortcut-extension-succeed-message'
      )[0] as HTMLElement;
      label.style.display = 'none';
    });
  }
};

const storage = new Storage();
window.onload = () => {
  if (storage.enableConsoleLog) {
    console.debug('---- short-cut-extension window.onload --');
  }
  storage
    .readValues()
    .then(() => {
      highlight(storage);
    })
    .catch((e) => {
      console.error(e);
      alert('設定の読み込みに失敗しました');
    });
};
