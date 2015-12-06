export default class ShinyController {
  constructor(ShinyService) {
    this._ShinyService = ShinyService;
    this.init();
  }

  init() {
    this.addResult = this._ShinyService.add(2, 2);
    this.substractResult = this._ShinyService.substract(15 , 4);
  }
}

ShinyController.$inject = ['ShinyService'];