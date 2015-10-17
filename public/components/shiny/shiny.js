import ShinyService from './shiny.service.js';
import ShinyController from './shiny.controller.js';
import ShinyDirective from './shiny.directive.js';

export default angular
  .module('ShinyComponent', [])
  .service('shinyService', ShinyService)
  .controller('shinyController', ShinyController)
  .directive('shiny', ShinyDirective)
  .name;