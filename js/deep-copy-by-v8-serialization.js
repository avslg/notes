/*
As of version 8.0.0, Node.js provides a serialization api
which is compatible with structured clone
*/
// const v8 = require('v8');

// need change "type" property in package.json
import { deserialize, serialize } from 'v8';

const array = [1, [2, [3, 4]]];
const copy = deserialize(serialize(array));

array[1][1].push(5);
console.log(JSON.stringify(array));
console.log(JSON.stringify(copy));

console.log(Object.is(array, copy));
