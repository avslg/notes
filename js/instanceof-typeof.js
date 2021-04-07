/* eslint-disable max-classes-per-file */

/*
instanceof returns a boolean indicating whether or not the object
has the given constructor in its prototype chain.
*/
class BaseClass { }
class InheritedClass extends BaseClass {
  constructor() {
    super();
    this.x = 100;
  }
}

const inst = new InheritedClass();
console.log(inst instanceof BaseClass); // true
console.log(inst instanceof InheritedClass); // true
