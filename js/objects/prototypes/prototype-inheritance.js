/*
Object.create() создаёт новый объект с указанным прототипом и свойствами.

example
*/
function Man(username) {
  this.username = username;
}
function SportsMan(username) {
  Man.call(this, username);
}

Man.prototype.walk = () => console.log('I am walking');
Man.prototype.getName = function getName() {
  return this.username;
};
SportsMan.prototype = Object.create(Man.prototype); // inhericance
SportsMan.prototype.speedRun = () => console.log('I am speedrunner');

let roy = new SportsMan('Roy');
console.log(Object.getPrototypeOf(roy)); // Man {speedRun: ƒ}
console.log(roy.getName());
roy.walk();
roy.speedRun();
