import * as $ from 'jquery';
require('jquery');
require('jquery-ui/ui/widgets/tooltip.js');
require('bootstrap');

$(() => {
  $('[data-toggle="tooltip"]').tooltip();
});
