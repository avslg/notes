/*
length property determines the number of arguments expected by the function

currying (карирование)

Currying is a tehnique that transforms a function
with multiple arguments into a series of functions,
in which each function only single argument.
*/

function multiply(a, b, c) {
  return a * b * c;
}

/* example, manual currying function */
let manual = function getManualCurridFumction(fname) {
  return function putA(a) {
    return function putB(b) {
      return function putC(c) {
        return fname(a, b, c);
      };
    };
  };
};
console.log(manual(multiply)(5)(5)(5)); // 125

/* example 2, implementation universal currying function */
function getCurriedFunction(fname) {
  return function curriedFunction(...firstInvokedArgs) {
    if (firstInvokedArgs.length >= fname.length) {
      return fname.call(null, ...firstInvokedArgs);
    }
    return (...additionalArgs) => curriedFunction(...firstInvokedArgs.concat(additionalArgs));
  };
}
let curriedFunction = getCurriedFunction(multiply);

// console.log(curriedFunction(1, 2, 3, 5)(5)); // TypeError
console.log(curriedFunction(1, 2, 3, 5)); // 6
console.log(curriedFunction(1, 2)(3, 5)); // 6
console.log(curriedFunction(1)(2, 3)); // 6
console.log(curriedFunction(1)(2)(3)); // 6, it is standard currying
