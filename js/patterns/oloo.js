/*

Kyle Simpson's "OLOO (Objects Linking to Other Objects) Pattern

*/
var Human = {
  init(name) {
    this.humanName = name;
  },
  identify() {
    return `I'm ${this.humanName}`;
  },
};

var Joe = Object.create(Human);
Joe.init('Joe');
Joe.toString = function toString() {
  return this.identify();
};

console.log(`${Joe} !`);
