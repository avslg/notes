/*
it's bad practice
*/

// arguments.callee method doesn't work in stric mode

(function app(settings) {
  this.settings = Object.assign({}, settings);
  let counter = this.settings.maxValue;
  if (this.settings.maxValue === undefined) {
    return;
  }

  // let currentIteration;
  const arr = [];
  const generateIncrementedArray = function () {
    const currentIteration = counter; // function's scope
    // currentIteration = counter;
    if (counter > 1) {
      counter -= 1;
      arguments.callee();
    }

    arr.push(currentIteration);
    // currentIteration += 1;
    return arr;
  };
  console.log(generateIncrementedArray());
}({ maxValue: 2 }));
