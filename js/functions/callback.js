/* eslint-disable no-console */
/*

you can pass a reference to a function as an argument in another function
and then to call that function back right after something has happened or some task is completed.

It's called a callback.
*/

function App() {
  this.list = [1, 2, 3, 4];

  this.update = function (callback) {
    setTimeout(
      () => {
        this.list.push(5, 6, 7, 8);
        console.log('data has been updated');
        callback();
      }, 6000,
    );
  };

  this.getList = function () {
    console.log(this.list);
    return this.list;
  };
}

const appl = new App();
appl.update(appl.getList.bind(appl));

/*
data has been updated
(8) [1, 2, 3, 4, 5, 6, 7, 8]
*/
