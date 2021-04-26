/*
  iterable - итерируемые объекты, могут перебираться циклом
  for of

  Итератор объект, перебирающий элементы колекции
  Итератор должен реализовать функцию next() и возвращать объект
  {value, done}, где велью значение а дон логический флаг того
  что последовательность уже пройдена

  [Symbol.iterator]()
  known symbol that specifies the default iterator for an object
*/

let str = 'lorem';
let itr = str[Symbol.iterator]();
let result;
while (true) {
  result = itr.next();
  if (result.done) break;
  console.log(result.value);
}
