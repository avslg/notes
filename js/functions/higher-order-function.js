/*
a higher-order function is a function that either pass at least one or
more another function as its argument or returns
a function through keyword 'return'

e.g functions with callbacks
*/
class Calculator {

}

function makeSumFunc(...vars) {
  this.numbers = Array.prototype.slice.call(vars);

  return function () {
    return this.numbers.reduce((one, second) => one + second);
  };
}
function makeSumFuncWithArrow(...vars) {
  this.numbers = Array.prototype.slice.call(vars);
  return () => {
    console.log(this);
    return this.numbers.reduce((one, second) => one + second)
  };
}

const calc = new Calculator();
calc.sum = makeSumFunc.call(calc, 1, 2, 3, 4, 5, 6);
console.log(calc.sum());

calc.sum = makeSumFuncWithArrow(1, 2, 3, 4, 5, 6);
console.log(calc.sum());
