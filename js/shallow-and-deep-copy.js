/*
in javascript primitive data types are copied by value
through asigment operator '='.

but objects are copied by reference
the assignment operator doesn’t create a copy of an object

The shallow copy replicates the object's top-level properties,
but the nested objects don't copy.

! spread operator ( …spread ) also creates the shallow copy

nested objects shared between the original and the copied one
through the same reference. Shallow copy just copies the reference
of nested objects

deep copy is full copy object and all nested objects
*/

const list = [1, 2, 3, 4, [5, [1, 2]]];
const doubleRef = list;
const shallowCopyList = Object.assign([], list);
const deepCopyList = JSON.parse(JSON.stringify(list));

console.log(`list is ${JSON.stringify(list)}, doubleRef is ${JSON.stringify(doubleRef)}`);
// console.log(Object.is(list, doubleRef)); // same

console.log('shallow copy:');
console.log(`list is ${JSON.stringify(list)}, shallowCopyList is ${JSON.stringify(shallowCopyList)}`);
// console.log(Object.is(list, shallowCopyList)); // different objects, second is shallow copy

console.log('shallow copy after change');
shallowCopyList[4][0] = 500;
console.log(`list is ${JSON.stringify(list)}, shallowCopyList is ${JSON.stringify(shallowCopyList)}`);

console.log('deep copy:');
console.log(`list is ${JSON.stringify(list)}, deepCopyList from original is ${JSON.stringify(deepCopyList)}`);
// console.log(Object.is(list, deepCopyList)); // different objects, second is deep copy
