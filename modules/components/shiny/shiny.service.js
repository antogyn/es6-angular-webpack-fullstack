import * as sharedMath from '../../../shared/services/sharedMath.js';

export default class ShinyService {
  constructor() {
  }

  add(a, b) {
    return sharedMath.add(a, b);
  }

  substract(a, b) {
    return sharedMath.substract(a, b)
  }

}
