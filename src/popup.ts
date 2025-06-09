import * as $ from 'jquery';
import 'jquery-ui/ui/widgets/tooltip.js';
import 'bootstrap';

$(() => {
  $('[data-toggle="tooltip"]').tooltip();
});
