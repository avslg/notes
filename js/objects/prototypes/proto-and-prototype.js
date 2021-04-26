/* eslint-disable no-proto */

/*

ƒ () it is 'Function.prototype'

*************
свойство объект __proto__ есть у всех объектов (включая любые функции и функциональные выражения),
Свойство prototype, есть у функций кроме стрелочных (у классов тоже есть).
Prototype это всегда независимые объекты, т е проототипы двух функций не будут равны

__proto__ любого объекта ссылается на протитип функции-конструктор (prototype), которой этот
объект был создан

{}.__proto__ is Object.prototype

function test(){}
f.__proto__ is Function.prototype
*************

при обращении к свойство __proto__ у примитива, создастся временный объект
с __proto__.
Т.е 'строка'.__proto__ будет работать, как и другие примеры с примитивами.
со строкой временно создаеься объъект String()

__proto__ одинаковый у объектов одного и того же типа

examples below:
*/

// 1
console.log({}.prototype); // undefined
console.log({}.__proto__); // Object.prototype
console.log(Object.prototype === {}.__proto__); // true
console.log(Object.getPrototypeOf({})); // Object.prototype

// 2
function greeting() { }
console.log(greeting.prototype); // {constructor: ƒ}
console.log(greeting.__proto__); // ƒ ()
console.log(Object.getPrototypeOf(greeting)); // ƒ ()

// 3
function newGreeting() { }
console.log(Function.prototype); // ƒ () it is 'Function.prototype'
console.log(newGreeting.prototype); // {constructor: ƒ}
console.log(newGreeting.__proto__); // ƒ ()
console.log(Object.getPrototypeOf(newGreeting));

console.log(newGreeting.prototype === greeting.prototype); // false
console.log(newGreeting.__proto__ === greeting.__proto__); // true
newGreeting.prototype.newFeatures = () => 'hi it\'s new feature';
console.log(newGreeting.__proto__ === greeting.__proto__); // true
console.log(newGreeting.prototype === greeting.prototype); // false

// 4
let Component = (props) => '<h1>sdsadsa</h1>';
console.log(Component.prototype); // undefined
console.log(Component.__proto__); // ƒ ()
console.log(typeof Component); // function

console.log(Object.prototype); // OBJECT prototype default
console.log(Object.prototype === Component.prototype); // false

// 5
let counter = 1000;
console.log(counter.__proto__); // Number(0)
console.log(counter.prototype); // undefined
console.log(Number.prototype); // Number(0)
console.log(Number.prototype === counter.prototype); // false
console.log(counter.__proto__ === Number.prototype); // true
console.log(Number.__proto__); // ƒ ()

// 6
class Gorilla { }
console.log(Gorilla.prototype); // {constructor: ƒ}
console.log(Gorilla.__proto__); // ƒ ()
console.log(Gorilla.__proto__.__proto__); // Object.prototype
// {constructor: ƒ, __defineGetter__: ƒ, etc...}
console.log(Function.prototype); // ƒ ()

// 7
const num = 12;
console.log(num.prototype); // undefined
console.log(num.__proto__); // Numver(0)

// 8
console.log('string'.__proto__); // String()
