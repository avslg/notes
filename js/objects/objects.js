/*

bult-in objects (bult-in functions, it is no classes)
    String
    Number
    Boolean
    Object
    Function
    Array
    Date
    RegExp
    Error
*/

var err = new Error('very bad');
console.log(typeof Error); // function
console.log(typeof err); // object
console.log(Object.prototype.toString.call(err));

/*
  Computed property names in objects
  es6
*/
const postfix = '_new';
const car = {
  [`brand${postfix}`]: 'renault',
  [`model${postfix}`]: 'arkana',
};

console.log(JSON.stringify(car));

/*
  Property descriptors
  es5
*/
// {value: 'renault', writable: true, enumerable: true, configurable: true}
console.log(Object.getOwnPropertyDescriptor(car, 'brand_new'));
Object.defineProperty(car, `egine${postfix}`, {
  writable: false,
  value: 'standard',
});
console.log(car[`egine${postfix}`]);
car[`egine${postfix}`] = 'power'; // nothing changes or error (in srict mode)
console.log(car[`egine${postfix}`]);
console.log(Object.getOwnPropertyDescriptor(car, `egine${postfix}`));

/*
  prevent extension of object
*/
Object.preventExtensions(car);
car.newProperty = true; // Cannot add property newProperty, object is not extensible
console.log(car);
