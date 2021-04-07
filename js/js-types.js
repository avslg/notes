/*
built-in types
 */

console.log(typeof 1); // number
console.log(typeof false); // boolean
console.log(typeof 'str'); // string
console.log(typeof null); // object. bug
console.log(typeof {}); // object
console.log(typeof undefined); // undefined
console.log(typeof Symbol('')); // symbol
console.log(typeof (() => { })); // function. Functions are a special kind of objects
console.log(typeof BigInt(2)); // bigint
