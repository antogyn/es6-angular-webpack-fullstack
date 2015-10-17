// Expose globals with webpack
import 'expose?jQuery!expose?$!jquery';
import 'expose?angular!angular';

// Load legacy js
import '../legacy_modules/js/blue';
import '../legacy_modules/components/legacy';

export default angular
  .module('Home', [
    'LegacyModule'
  ]);
