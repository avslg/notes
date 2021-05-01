/*

Kyle Simpson's "OLOO (Objects Linking to Other Objects) Pattern

*/

var LifeForm = {
  breath: function breath() {
    console.log('breathing');
  },
};

var Human = {
  init(name) {
    this.humanName = name;
  },
  identify() {
    return `I'm ${this.humanName}`;
  },
};

Object.setPrototypeOf(Human, LifeForm);

let Joe = Object.create(Human);
Joe.init('Joe');
Joe.toString = function toString() {
  return this.identify();
};

console.log(`${Joe} !`);
Joe.breath();
