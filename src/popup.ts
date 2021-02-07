import * as $ from 'jquery';
import { LocalStorage } from './LocalStorage';
require('jquery');
require('jquery-ui/ui/widgets/tooltip.js');
require('bootstrap');

$(() => {
  const storage = new LocalStorage();
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

  $('#copy-to-clipboard').on('click', (event) => {
    chrome.tabs.getSelected(null, function (tab) {
      const textArea = document.createElement('textarea');
      textArea.value = `${tab.title}\n${tab.url}`;
      document.body.appendChild(textArea);

      textArea.select();
      document.execCommand('copy');

      document.body.removeChild(textArea);
    });
  });

  $('#all-copy-to-clipboard').on('click', (event) => {
    chrome.tabs.query({}, (results) => {
      const tabUrls = [];
      for (const tab of results) {
        tabUrls.push(tab.url);
      }
      const textArea = document.createElement('textarea');
      textArea.value = tabUrls.join('\n');
      document.body.appendChild(textArea);

      textArea.select();
      document.execCommand('copy');

      document.body.removeChild(textArea);
    });
  });

  $('#reload-all-tabs').on('click', (event) => {
    chrome.tabs.query({}, (result) => {
      for (const tab of result) {
        chrome.tabs.reload(tab.id);
      }
    });
  });

  $('#open-by-text').on('click', (event) => {
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
