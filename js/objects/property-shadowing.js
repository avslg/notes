/*

*/
var baseObj = {
  propA: 1,
};

var obj = Object.create(baseObj);
console.log(obj.hasOwnProperty('propA')); // false

obj.propA = 100; // will be created property in obj which will shadows property from baseObj
console.log(obj.hasOwnProperty('propA')); // true
console.log(obj.propA); // 100
console.log(baseObj.propA); // 1
