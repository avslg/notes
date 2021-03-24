/*
https://ultimatecourses.com/blog/mastering-the-module-pattern

https://stackoverflow.com/questions/17776940/javascript-module-pattern-with-example
https://flaviocopes.com/javascript-iife/

invoked Function Expressions (IIFE) -
An Immediately-invoked Function Expression is
a way to execute functions immediately,
as soon as they are created

Simple way to isolate variables declarations.

******************
(function() {

})()
******************

;(function(param) {

})()

IIFEs starting with a semicolon

This prevents issues when blindly concatenating two JavaScript files.
Since JavaScript does not require semicolons, you might concatenate
with a file with some statements in its last line that causes a syntax error.
This problem is essentially solved with “smart” code bundlers like webpack.

*/

const moduleForExample = (function () {
  let str = 'yyy';
  return {
    addRight(text) {
      str += text;
    },
    addLeft(text) {
      str = text + str;
    },
    getStr() {
      return str;
    },
  };
}());

moduleForExample.addLeft('555');
moduleForExample.addRight('777');

const result = moduleForExample.getStr();
console.log(result); // 555yyy777
