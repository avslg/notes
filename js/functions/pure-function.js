/*
Pure function is when conditions true:

- same arguments always return same outputs
- No side-effects
(e.g doesnt't change global variable values)

an example among existing function is method slice()
of an array which  is a pure function

*/

function subtraction(first, second) {
  return first - second;
}

console.log(subtraction(10, 20));

console.log([1, 2, 3, 4, 5].slice(0, 2));
