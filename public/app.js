// Expose globals with webpack
import 'expose?jQuery!expose?$!jquery';
import 'expose?angular!angular';

// Load legacy js
import '../legacy_modules/js/blue';
import '../legacy_modules/components/legacy';

// Import our new component
import ShinyComponent from '../public/components/shiny/shiny';

export default angular
  .module('Es6App', [
    'LegacyModule',
    ShinyComponent
  ]);
