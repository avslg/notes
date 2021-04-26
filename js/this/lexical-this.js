/*

it's different of standard behavior 'this'
'this' context in an arrow function inherits from the parent lexical scope.

стрелочные функции заимствуют привязку this из окружающей
(функции или глобальной) области видимости.
*/

function outerFunction() {
  this.a = 11; // by default - this is global or undefined
  this.b = 22;
  this.c = 33;
  this.name = 'real name';

  const arrowFunction = () => {
    console.log(this.a);
    console.log(this.b);
    console.log(this.c);
  };
  arrowFunction();

  let dog = {
    name: 'luis', // it would work in 'regular' function
    bark: () => {
      console.log(`${this.name} aw aw aw`);
    },
  };
  dog.bark();
}

const env = new outerFunction();
