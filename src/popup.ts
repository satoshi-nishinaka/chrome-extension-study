import * as moment from 'moment';
import { LocalStorage } from './LocalStorage';
require('jquery')
require("jquery-ui/ui/widgets/tooltip.js");
require("bootstrap")

/**
* 指定したURLを開きます。
* @param url
* @param newTab 新しいタブで開くか？
*/
function transitionToNextPage(url: string, newTab: boolean): void {
  if (newTab) {
    chrome.tabs.create({ url: url });
    return;
  }

  // Get the current Tab
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {

    const active = tabs[0].id;

    // Set the URL to the Local-NTP (New Tab Page)
    chrome.tabs.update(active, { url: url }, function () { });
  });
  window.close();
}

$(() => {
  const storage = new LocalStorage();

  // LocalStorageから設定情報を取得
  storage.readValues(() => {
    $('#btn_newtab').prop('checked', storage.isOpenNewTab);

    chrome.tabs.getSelected(null, (tab) => {
      var pageMeta = `${tab.title}\n${tab.url}`;
      if (tab.favIconUrl) {
        $('textarea#favicon-url').val(tab.favIconUrl);
        pageMeta += "\n" + tab.favIconUrl;
      }
      $('input#url').val(tab.url);
      $('input#title').val(tab.title);
      $('#page-meta').val(pageMeta);
    });
    chrome.tabs.query({}, (results) => {
      $("#information").html(results.length.toString());
    });
  });

  $('[data-toggle="tooltip"]').tooltip();

  $('h5').on('click', (event) => {
    const target = $(event.target).attr('data-target');
    console.log(target);
    if (target) {
      $('#' + target).toggle(100);
    }
  });

  $('.btn-image').on('click', (event) => {
    const newTab = $('#btn_newtab').prop('checked');
    transitionToNextPage($(event.target).attr('data-href'), newTab);
  });

  $("#copy-to-clipboard").on('click', (event) => {
    chrome.tabs.getSelected(null, function (tab) {
      const textArea = document.createElement('textarea');
      textArea.value = `${tab.title}\n${tab.url}`;
      document.body.appendChild(textArea);

      textArea.select();
      document.execCommand('copy');

      document.body.removeChild(textArea);
    });
  });

  $("#all-copy-to-clipboard").on('click', (event) => {
    chrome.tabs.query({}, (results) => {
      const tabUrls = [];
      for (const tab of results) {
        tabUrls.push(tab.url);
      }
      const textArea = document.createElement('textarea');
      textArea.value = tabUrls.join("\n");
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
    console.log(text);
    var lines = unique(text.split('\n'));
    for (const line of lines) {
      if (line.startsWith('http://') || line.startsWith('https://')) {
        chrome.tabs.create({
          url: line
        });
      }
    }
  });

  $('input[type="checkbox"]').on('change', (event) => {
    const value = $(event.target).prop('checked');
    switch ($(event.target).attr('id')) {
      case 'btn_newtab':
        storage.isOpenNewTab = value;
        break;
      case 'btn_hidden_shortcut_menu':
        storage.hiddenShortcutMenu = value;
      default:
        break;
    }
    storage.saveValues();
  });
});