/*

in js all function creates closures. ALL
closure gives you access to the Lexical scope of the function
even when that function is executing outside its lexical scope.

Every function in JavaScript maintains a link to its outer lexical environment
Therefore every function in JavaScript has access to the vars
and parameters of its outer function

closure may be described as
persistent local variable scope.

The scope object and all its local variables are bound to the function
and will exist as long as that function persists.

*/

function getFeatures(mes) {
  function addDiezLetter() {
    let message = mes;
    message += '#';
    return message;
  }

  return addDiezLetter; // Returns but doesn't invoke
}

const caption = 'Some Text';
const launcher = getFeatures(caption);

// invokes 5 times
for (let i = 0; i < 5; i += 1) {
  console.log(launcher());
}

/*
Some Text#
Some Text##
Some Text###
Some Text####
Some Text#####
*/