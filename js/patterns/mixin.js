/* eslint-disable no-restricted-syntax */
/* eslint-disable vars-on-top */
/*
Mixin – is a generic object-oriented programming term:
a class that contains methods for other classes
https://javascript.info/mixins
*/
var animal = {
  run: () => {
    console.log('to run as animal');
  },
  swim: () => {
    console.log('to swim as animal');
  },
};
var cat = {
  swim() {
    console.log('to swim as cat');
  },
  walk() {
    console.log('to walk as cat');
  },
};

function extendMixin(source, target) {
  for (const key in source) {
    if (!(key in target)) {
      target[key] = source[key];
    }
  }
  return target;
}

cat = extendMixin(animal, cat);

cat.run();
cat.walk();
cat.swim();
