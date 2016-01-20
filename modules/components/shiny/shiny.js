import ShinyService from './shiny.service.js';
import ShinyController from './shiny.controller.js';
import ShinyDirective from './shiny.directive.js';

export default angular
  .module('ShinyComponent', [])
  .service('ShinyService', ShinyService)
  .controller('ShinyController', ShinyController)
  .directive('shiny', ShinyDirective)
  .name;