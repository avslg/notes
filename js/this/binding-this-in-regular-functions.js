/* eslint-disable vars-on-top */
/*
в strict mode глобальный this - undefined

Привязка по умолчанию:
sayMessage функция вызывается по прямой ссылке (не обернутая функция)
*/
this.msg = 'default'; // doesn't work in strict mode
function sayMessage() {
  console.log(this.msg);
}
sayMessage();

/*
  неявная привязка:
  sayMessageImplicit фунция вызвана с объектом контекста (obj), владеющего вызовом функции
*/
function sayMessageImplicit(isUpper = false) {
  if (isUpper === true) {
    console.log(this.msg.toUpperCase());
  } else console.log(this.msg);
}
var obj = {
  msg: 'это сообщение будет напечатано',
  func: sayMessageImplicit,
};

obj.func();

/* Потеря контекста this */
const functionWithLostContext = obj.func; // ссылка на функцию без контекста
functionWithLostContext(); // context 'this' is undefined

/* явная привязка контекста this методами call или apply */
functionWithLostContext.apply(obj, [true]);
functionWithLostContext.call(obj);

/* жесткая привязка контекста this методом bind */
var functionWithHardBinding = obj.func.bind(obj, true);
functionWithHardBinding();
functionWithHardBinding();
functionWithHardBinding();
console.log(functionWithHardBinding.name); // bound sayMessageImplicit

/* привязка контекста с помощью new оператора и вызова конструктора

Когда функция вызывается с оператором new, также известный как вызов конструктора
Происходит следующее:
  Создаётся обьект, которому привязывается прототип.
  Конекст this привязывается на только что созданный объект оператором new.
*/
function Postman() {
  console.log(this.msg);
}

var instance = new Postman(); // will be print undefined
console.log(instance.msg); // undefined
instance.msg = 'context this inside instance';
console.log(instance.msg); // context this inside instance
