/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/*
Цикл for in проходит по всем свойствам объекта, и его цепочки прототитопов,
(при условии что свойства enumerable)

https://www.freecodecamp.org/news/the-javascript-in-operator-explained-with-examples/
а так же и оператор in
(но будет проверять не только enumerable свойства)
 */
var obPrototype = {
  prop: 'property from prototype',
};

var obj = Object.create(obPrototype);
obj.ownProp = 'own property';
for (const key in obj) {
  console.log(`${key}: ${obj[key]}`);
}
