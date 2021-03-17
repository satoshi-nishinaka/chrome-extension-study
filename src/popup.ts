import * as $ from 'jquery';
import { Storage } from './Storage';
require('jquery');
require('jquery-ui/ui/widgets/tooltip.js');
require('bootstrap');

$(() => {
  const storage = new Storage();
  // LocalStorageから設定情報を取得
  storage.readValues(() => {
    $('#btn_newtab').prop('checked', storage.isOpenNewTab);

    chrome.tabs.getSelected(null, (tab) => {
      let pageMeta = `${tab.title}\n${tab.url}`;
      if (tab.favIconUrl) {
        $('textarea#favicon-url').val(tab.favIconUrl);
        pageMeta += '\n' + tab.favIconUrl;
      }
      $('textarea#url').val(tab.url);
      $('textarea#title').val(tab.title);
      $('#page-meta').val(pageMeta);
    });
    chrome.tabs.query({}, (results) => {
      $('#information').html(results.length.toString());
    });
  });

  $('[data-toggle="tooltip"]').tooltip();

  $('#open-by-text').on('click', () => {
    const text = $('#referer').val().toString();
    const lines = unique(text.split('\n'));
    for (const line of lines) {
      if (line.startsWith('http://') || line.startsWith('https://')) {
        chrome.tabs.create({
          url: line,
        });
      }
    }
  });

  $('input[type="checkbox"]').on('change', (event) => {
    const id = $(event.target).attr('id');
    const value = $(event.target).prop('checked');
    switch (id) {
      case 'btn_newtab':
        storage.isOpenNewTab = value;
        break;
      case 'btn_hidden_shortcut_menu':
        storage.hiddenShortcutMenu = value;
        break;
      default:
        break;
    }
    storage.saveValues();
  });
});

function unique(array: string[]): string[] {
  // JavaScriptのArrayでuniqする8つの方法（と、その中で最速の方法） - Qiita
  // https://qiita.com/piroor/items/02885998c9f76f45bfa0#object%E3%81%AE%E3%82%AD%E3%83%BC%E3%82%92%E4%BD%BF%E3%81%86%E6%96%B9%E6%B3%95
  const knownElements = {};
  const uniquedArray = [];
  for (let i = 0, maxi = array.length; i < maxi; i++) {
    if (array[i] in knownElements) {
      continue;
    }
    uniquedArray.push(array[i]);
    knownElements[array[i]] = true;
  }
  return uniquedArray;
}
