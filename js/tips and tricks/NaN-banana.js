/* eslint-disable prefer-template */
/* eslint-disable no-useless-concat */
console.log(2 ** 3 / 'text'); // NaN
console.log(+'example'); // NaN

console.log('b' + 'a' + +'a' + 'a'); // baNaNa
console.log(('b' + 'a' + +'a' + 'a').toLowerCase()); // banana
