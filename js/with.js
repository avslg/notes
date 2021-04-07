/*
with keyword dynamically turns an object into a local scope
where object's properties are treated as identifiers in that new scope's block.

usage keywords 'eval' and 'with' is a bad practice which slows down optimization and performance
*/

const customer = {
  id: 1,
  name: "joe"
}

// doesn't work in stric mode
with (customer) {
  console.log(typeof id);
  console.log(typeof name);
}
/*
number
string
*/