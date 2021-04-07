/* eslint-disable no-use-before-define */
/*
  JavaScript engine hoists the function declarations
  to the top of their scope before function execute.

  from MDN
  "Conceptually, for example, a strict definition of hoisting suggests
  that variable and function declarations are physically moved to the top of your code,
  but this is not in fact what happens. Instead, the variable and function declarations
  are put into memory during the compile phase,
  but stay exactly where you typed them in your code."
*/

const result = arrManualReverse([1, 2, 3, 'word']);
console.log(result);

function arrManualReverse(arr) {
  const size = arr.length;
  const reversed = [];
  for (let i = 0; i < size; i += 1) {
    reversed.push(arr.pop());
  }
  return reversed;
}
