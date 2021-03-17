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
