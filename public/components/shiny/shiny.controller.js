export default class ShinyController {
  constructor(shinyService) {
    this._shinyService = shinyService;
    this.init();
  }

  init() {
    this.addResult = this._shinyService.add(2, 2);
    this.substractResult = this._shinyService.substract(15 , 4);
  }
}

ShinyController.$inject = ['shinyService'];