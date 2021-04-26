/*
https://developer.mozilla.org/ru/docs/conflicting/Web/JavaScript/Reference/Global_Objects/Object

У каждой функции по умолчанию в свойстве "prototype".
будет объект, с единственным свойством - constructor
{constructor: ƒ}
ссылающимися на функцию конструктор

Геттер __proto__ позволяет прототипу [[Prototype]] объекта быть изменяемым
*/
function MakeRobot() {
}
MakeRobot.prototype.robotProp = 'robot property';

function nonDefaultConstructor() {
  console.log('replaced');
}
console.log(MakeRobot.prototype);
MakeRobot.prototype.constructor = nonDefaultConstructor;
console.log(MakeRobot.prototype);

let cyborg = new MakeRobot();
cyborg.prop = 'secret';
console.log(cyborg.constructor); // ƒ nonDefaultConstructor()

console.log(Object.getPrototypeOf(cyborg) === MakeRobot.prototype); // true
console.log(cyborg.prototype); // undefined
console.log(cyborg.robotProp);
console.log(MakeRobot.hasOwnProperty('robotProp')); //
