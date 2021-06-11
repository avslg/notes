/*
explicit type coercion
*/

/*
double-negation (!!) is not not operator

# https://www.samanthaming.com/tidbits/19-2-ways-to-convert-to-boolean/
How the !! works

The first ! coerce the value to a boolean and inverse it.
So to reverse it back to true, we put another ! on it. Hence the double use !!.
*/
console.group('!!:');
let result = Object.create(null);
result['!!"some text"'] = !!'some text'; // true
result['!!undefined'] = !!undefined; // false
result['!!-100'] = !!-100; // true
result['!!100'] = !!100; // true
result['!!0'] = !!0; // false
result['!!null'] = !!null; // false

console.table(result);
console.groupEnd();

/* convert to number */
console.group('convert to number by function Number():');
console.log(Number(undefined)); // NaN
console.log(typeof NaN); // number

console.log(Number(false)); // 0
console.log(Number(true)); // 1
console.log(Number('text')); // NaN
console.log(Number('')); // 0
console.groupEnd();
/* convert to String */
console.group('convert to string by function String():');
console.log(typeof String('')); // string
console.log(typeof String(false)); // string
console.log(typeof String(true)); // string
console.log(typeof String(null)); // string
console.log(typeof String(NaN)); // string
console.log(typeof String(undefined)); // string
console.groupEnd();
/* convert to boolean */
console.group('convert to boolean by function Boolean():');
console.log(Boolean(undefined)); // false
console.log(Boolean('')); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(1.1)); // true
console.log(Boolean(1)); // true
console.log(Boolean(10)); // true
console.log(Boolean(-1)); // true

console.log(Boolean(null)); // false
console.log(typeof null); // object
console.groupEnd();
