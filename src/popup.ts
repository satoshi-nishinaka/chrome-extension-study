import * as $ from 'jquery';
import { Storage } from './Storage';
require('jquery');
require('jquery-ui/ui/widgets/tooltip.js');
require('bootstrap');

$(() => {
  const storage = new Storage();

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
