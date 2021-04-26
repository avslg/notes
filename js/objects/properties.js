/*
  prevent extension of object
*/
var car = {};

try {
  Object.preventExtensions(car);
  car.year = 2020; // Cannot add property newProperty, object is not extensible
  console.log(car);
} catch (error) {
  console.log(error);
}

/* object sealing
  you cannot not only add properties, but also reconfigure or remove existing ones
*/
const boat = {
  year: 1990,
  color: 'gray',
};
Object.seal(boat);

console.log(Object.isSealed(boat));
try {
  boat.color = 'orange'; // it's working
  console.log(boat);
  delete boat.color; // TypeError: Cannot delete property 'color' of #<Object>
} catch (error) {
  console.log(error);
}

/* object freezing
  freezing it is sealing + adding writable:false
*/

const bike = {
  year: 2017,
};
Object.freeze(bike);
try {
  bike.year = 20000; // Cannot assign to read only property 'year' of object '#<Object>'
} catch (error) {
  console.log(error);
}

/*
Getters and Setters
*/

// getter
const cat = {};
Object.defineProperty(cat, 'name', {
  enumerable: true,
  get() { return 'my name is mr black meow'; },
});
console.log(cat.name);

/*
  how to check property exists in object
*/
console.log('name' in cat);
