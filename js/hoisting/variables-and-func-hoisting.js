/* eslint-disable no-multi-str */
/* eslint-disable no-use-before-define */
/* eslint-disable vars-on-top */

/*
  hoisting (подъем)
  Переменные var и функции могут быть использованы, до их описания.

  variables declared as 'let', 'const' also will be hoist, but
  those variables are not accessible before initialization unlike 'var'.

  JavaScript interpreter hoists variables
  and the function declarations to the top of their scope before function execute.

  functional expressions don't hoist
*/

(function App() {
  console.log(varWillBeHoisted); // undefined

  var varWillBeHoisted = 'var будет поднята по области видимости, но только её пределение \
  операция присваивания останется на месте';

  functionWillBeHoisted();
  // functionalExpressionWillNotBeHoisted();

  function functionWillBeHoisted() {
    console.log(1);
  }

  function functionWillBeHoisted() {
    console.log('And function will be overwritten');
  }

  var functionalExpressionWillNotBeHoisted = function expression() {
    console.log('Function expressions in JavaScript are not hoisted');
  };
}());

/*
example 2
*/
(function immediatelyInvokedFunctionExpression() {
  /* ---------------------------------- */
  console.log(i); // undefined
  for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  } // will prints 10 times the number 10
  /*
  'i' was assigned as 'var'.
  variable 'i' has functional scope, and ended value of 'i' closed on all loop callbacks.
  every callback have closure, where variable 'i' is shared
  */

  /* ---------------------------------- */
  for (let j = 0; j < 10; j++) {
    setTimeout(() => {
      console.log(j);
    }, j * 1000);
  } // will prints numbers from 1 to 9
  /*
  'j' was assigned as 'let'
  because let variables have block scope (now LOOP) and ended value of 'j' closed
  on all loop callbacks.
  every callback has closure, where the value of variable 'j' different
  from other j values from every callbacks closure.

  В каждом замыкании у коллбека, своя переменная j.
  В первом примере i, имеет область видимости функции. И она была поднята (hoisted),
  потому в каждом замыкании коллбека сохранится последнее значение счетчика i

  Да и в обоих примерах цикл отработает быстрее чем setTimeout
  */
}());
