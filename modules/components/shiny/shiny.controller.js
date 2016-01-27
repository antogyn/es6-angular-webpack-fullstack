export default class ShinyController {
  constructor(ShinyService) {
    this.addResult = ShinyService.add(2, 2);
    this.substractResult = ShinyService.substract(15, 4);
  }
}

ShinyController.$inject = ['ShinyService'];