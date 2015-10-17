import * as sharedMathService from '../../shared/services/sharedMath.js';

export const index = (req, res) => {
  res.render('home', {
    pageTitle: 'Fullstack ES6',
    addResult: sharedMathService.add(1, 1),
    substractResult: sharedMathService.substract(10, 2)
  });
};