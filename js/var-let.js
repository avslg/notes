/* eslint-disable no-redeclare */
/* eslint-disable no-var */
/*
https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var

Main difference is scoping rules. Variables declared by var keyword are
scoped to the immediate function body (hence the function scope)
while let variables are scoped to the immediate enclosing block
denoted by { } (hence the block scope).

Hoisting (lift)

While variables declared with VAR keyword are hoisted
(initialized with undefined before the code is run) which means
they are accessible in their enclosing scope even
before they are declared:

let variables are not initialized until their definition is evaluated.
Accessing them before the initialization results in a ReferenceError
*/

(function app() {
  var num = 10;
  var num = 20;
  var num = 111; // yes. OMG. var in js may be declared more then once

  console.log('num: %s', num);

  {
    num = 444;
    const num2 = 2;
    //        let num2 = 4; //SyntaxError: Identifier 'num2' has already been declared
    console.log('num2: %s', num2); // 2
  }

  console.log('num: %s', num); // 444
  //    console.log(num2); //ReferenceError: num2 is not defined
}());
