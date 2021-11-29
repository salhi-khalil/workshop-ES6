// let & const

// const ==> constant
const number = 42;
number = 23; // Error

// let ==> to reasign a variable
  function sayHello() {
    if (true) {
      //local variable to the if block
      var y = 20;
      console.log('inside a block', y);
    }
    console.log('outside', y);
  }

  sayHello();

// remplacer var par let
  function sayHello() {
    if (true) {
      //local variable to the if block
      let y = 20;
      console.log('inside a block', y);
    }
    console.log('outside', y);
  }

  sayHello();
