/*

*/
var config = { order: 'fsdfw3esfsd3sfd3sdf' };
var mapConfig = new Map();
mapConfig.set(config, 'description');
let weakMapConfig = new WeakMap();
weakMapConfig.set(config, 'description');

console.log(mapConfig.entries()); // MapIterator {{actual: true} => description}
console.log(weakMapConfig.has(config)); // true

config = null; // garbage colector
console.log(mapConfig); // Map(1) {{order: 'fs…f'} => description}
console.log(weakMapConfig); // will be cleared by garbage collector
