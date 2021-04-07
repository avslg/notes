/* eslint-disable no-unused-vars */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-param-reassign */

/*
https://stackoverflow.com/questions/13104494/does-javascript-pass-by-reference

Primitives are passed by value, and Objects are passed by "copy of a reference".

When you pass an object (or array) you are
passing a reference to that object, and it is possible to modify the contents of that object.

But if you attempt to overwrite the reference it will not affect the copy of the reference
held by the caller - i.e. the reference itself is passed by value:
*/

(function app() {
  var config = {
    loaded: true,
  };
  // reference is passed by value
  function tryChangeObj(params) {
    params.loaded = false;
  }
  // reference is passed by value
  function truRemoveObj(params) {
    params = null; // to remove reference will not affect the config variable
  }

  tryChangeObj(config);
  // config will be modified
  console.log(config.loaded); // false

  // config doesn't will be 'null'
  truRemoveObj(config); // loaded: false
  console.log(config);
}());
