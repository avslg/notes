/*
https://frontender.info/exploring-the-abyss-of-null-and-undefined-in-javascript/

В JavaScript null — это литерал и ключевое слово языка,
которое представляет собой отсутствие какого-либо объекта.
Другими словами, null указывает «в никуда».
В свою очередь, хоть и похожий по смыслу undefined, олицетворяет отсутствие значения как такового.
Оба абсолютно неизменны, не имеют свойств и методов и не способны их иметь.

*/

const app = (function () {
  console.log(undefined == null); // true
  console.log(undefined === null); // !!! false
  console.log(null == 0); // false
  console.log(' ');
  console.log(false == null); // false
  console.log(' ');
  console.log(false == 0); // true
  console.log(true == 1); // true
  console.log(false == '0'); // true
  console.log(true == '1'); // true
}());
