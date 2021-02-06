import * as React from "react";
import * as $ from "jquery";
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
  if (url === undefined) {
    return
  }
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
      let pageMeta = `${tab.title}\n${tab.url}`;
      if (tab.favIconUrl) {
        $('textarea#favicon-url').val(tab.favIconUrl);
        pageMeta += "\n" + tab.favIconUrl;
      }
      $('textarea#url').val(tab.url);
      $('textarea#title').val(tab.title);
      $('#page-meta').val(pageMeta);
    });
    chrome.tabs.query({}, (results) => {
      $("#information").html(results.length.toString());
    });
  });

  $('[data-toggle="tooltip"]').tooltip();

  $('.btn-image').on('click', (event) => {
    const newTab = storage.isOpenNewTab
    const url = $(event.target).parent().attr('data-href')
    transitionToNextPage(url, newTab);
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
    const lines = unique(text.split('\n'));
    for (const line of lines) {
      if (line.startsWith('http://') || line.startsWith('https://')) {
        chrome.tabs.create({
          url: line
        });
      }
    }
  });

  $('input[type="checkbox"]').on('change', (event) => {
    const id = $(event.target).attr('id')
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
