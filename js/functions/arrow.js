/*

An arrow function does not have its own 'this'
Arrow functions always have this based on their closest non-arrow function
independent of where it is called, unlike regular function().

NDN:
Differences & Limitations:

    Does not have its own bindings to this or super, and should not be used as methods.
    Does not have arguments, or new.target keywords.
    Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
    Can not be used as constructors.
    Can not use yield, within its body.

*/

function getFunction() {
  return () => {
    console.log(this);
  };
}

const func = getFunction();
func(); // this is global
