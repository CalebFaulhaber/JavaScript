// // JS Higher Order Functions
// console.log('is this still working')
// const myString = 'string';
// const myOtherString = myString;

// // Functions are base type
// // they can be assigned, re-assigned and passed
// // as arguments to other functions
// // as well as property values -> this is called methods
// const testFn = () => {
//     console.log('This is a test Fn');
//     return 1;
// }

// const myFnVariable = testFn;

// // const duplicator = (x) => {
// //     return x * 2;
// // }
// // Same thing as bellow

// const duplicator = x => x * 2;

// // When an Arrow function has only one parameter
// // The parentheses can be omitted
// const logger = value => console.log(value);
// const logger2 = value => console.log(value);
// logger('hello'); // 'hello' is logged to console
// logger2('hello'); // 'hello' is logged to console

// //if I use squiggly brackes then i will need to say return
// const num = (a, b) => a*b;

// // function flip(fn) {
// //     return function(a,b) {
// //         return fn(b,a);
// //     };
// // }

// const printer = x => console.log('x: ', x);

// const flip = fn => (a,b) => '${b}, ${a}';


// // const innerFn = flip();
// // this will give something similar
// const innerFn = (a,b) => '${b}, ${a}';

// // const loud = fn => {
// //     console.log(`Calling ${fn.name}`);
// //     const value = fn();
// //     console.log(`Called ${fn.name} and it returned ${value}`);
// //     return value;
// //   };

// // this is for an in class question
// const five = () => 5;
// const ten = () => 10;

// const four = () => 4;

// const customLogger = (logFn, fn) => {
//     logFn(`Calling ${fn.name}`);
//     const value = fn();
//     logFn(`Called ${fn.name} and it returned ${value}`);
//     return value;
// };

// customLogger(console.warn, five);
// customLogger(console.info, ten);
// customLogger(console.warn, () {
//     return 20;
// });


// // When an Arrow function has only one parameter
// // The parentheses can be omitted
// const logger = value => console.log(value);
// const logger2 = value => console.log(value);
// logger("hello"); // 'hello' is logged to console
// logger2("hello"); // 'hello' is logged to console

// // Exercise: To Arrow

// // function divide (a, b) {
// //     return a / b;
// // }

// const divide = (a, b) => a / b;

// // function printMe(x) {
// //   console.log(x);
// // }

// const printMe = x => console.log(x);

// // (function printer(x) {
// //   console.log('x: ', x);
// // }(4));

// // function flip() {
// //   return function(a, b) {
// //     return `${b}, ${a}`;
// //   };
// // }

// // const flip = () => (a, b) => `${b}, ${a}`;

// // const innerFn = flip(); // this will give us back something similar to the below line

// // const innerFn = (a, b) {
// //     return `${b}, ${a}`;
// // }

// const print1 = fn => {
//   if (fn instanceof Function) {
//     return fn();
//   }
// };

// print1(
//   "here you will need to send a function, then the if statement inside print1 function will be true"
// );

// const V = x => y => z => z(x)(y);

// // HIGHER ORDER FUNCTIONS
// // 1. a function is a higher order function if it accepts a function as an argument
// const square = x => x * x;

// const callSquare = (x, fn) => fn(x);

// // function callSquare(x, fn) {
// //   return fn(x);
// // }

// // in above function (callSquare) we can:

// console.log(callSquare(10, square)); // 100
// // - above we are calling callSquare function with two arguments (10, and square function)
// // - the callSquare higher order function takes in both (10, and square function) arguments
// // - so in callSquare now: x = 10, and fn = square
// // - in the body of callSquare we are returning fn(x) => which in our case will be square(10)

// // 2. a function is a higher order function if it returns a function

// function multiplier(factor) {
//   return function(x) {
//     return x * factor;
//   };
// }
// // const multiplier = factor => x => x * factor;

// const doubleIt = multiplier(2);
// const tripleIt = multiplier(3);
// const quadIt = multiplier(4);

// // 1 & 2 Below function is accepting a function as an argument and also returns a function which calls the function argument that we pass down
// // and that makes it a higher order function
// // function flip(fn) {
// //   return function(a, b) {
// //     return fn(b, a);
// //   };
// // }

// const subtract = (x, y) => x - y;

// // const flipSomething = flip("here we need to pass down a function");
// const flip = fn => (a, b) => fn(b, a);

// // Demo: A Loud Function

// // fn is a callback function
// // It will be executed in the body of the loud function

// const hello = () => "greeting";
// const bye = () => "bye";

// const loud = fn => {
//   console.log(`Calling ${fn.name}`); // Calling hello
//   const value = fn();
//   console.log(`Called ${fn.name} and it returned ${value}`); // Called hello and it returned greeting
//   return value; // "greeting"
// };

// // loud(hello()); // this will not work! loud will try to call hello();
// // loud(hello);

// // Exercise: customLogger

// const five = () => 5;
// const ten = () => 10;

// const four = () => 4;

// const customLogger = (logFn, fn) => {
//   logFn(`Calling ${fn.name}`);
//   const value = fn();
//   logFn(`Called ${fn.name} and it returned ${value}`);
//   return value;
// };

// customLogger(console.warn, five);
// customLogger(console.info, ten);
// customLogger(console.warn, () => 20);

// // Demo: Implement Each

// const each = (callback, arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i], i);
//   }
// };

// // how to use the each function that we created.
// // takes in the first parameter of a callback
// // the callback takes in two parameters
// // value, and index
// // The second parameter is the array the HOF will operate on

// const printValues = (val, index) =>
//   console.log(`The index: ${index} is ${val}`);

// each(printValues, [1, 2, 3, 4, 5, 6]);

// // Demo: Map implementation

// const map = (fn, array) => {
//   const newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     // this loop will invoke 'fn' for every single elment in the array
//     newArray.push(fn(array[i], i));
//   }

//   return newArray;
// };

// // repeat implementation
// const repeat = (str, repeatTimes) => {
//   const newString = "";

//   for (let i = 1; i <= repeatTimes; i++) {
//     newString += str;
//   }

//   return newString;

//   // return str.repeat(repeatTimes);
// };

// console.clear();
// // Recursion

// function printMeRecursivly(n) {
//   if (n === 0) {
//     return;
//   }

//   console.log(n);
//   return printMeRecursivly(n - 1);
// }

// printMeRecursivly(9);

// // Sumation
// const sum = arr => {
//   // arr = [1, 2, 3] => iteration 1
//   // arr = [2, 3] => iteration 2
//   // arr = [3] => iteration 3
//   // arr = [] => iteration 4
//   if (arr.length === 0) {
//     return 0;
//   } else {
//     return arr[0] + sum(arr.slice(1));
//     // return 1    + sum([2, 3]);
//     // return 2    + sum([3]);
//     // return 3    + sum([]);
//     //
//     // return (1 + return(2 + return (3)))
//     // return (1 + return(2 +      3   ))
//   }
// };

// const sumValue = sum([1, 2, 3]);

// // Factorial
// // 5! => 5 * 4 * 3 * 2 * 1
// // 0! => 1
// const factorial = n => {
//   if (n === 0 || n === 1) {
//     return 1;
//   }

//   return n * factorial(n - 1);
// };

// factorial(5);
// factorial(0);

// const factorialI = n => {
//     let product = 1;
//     for(let i = n; i >= 1; i--) {
//         product =* i;
//     }
//     return product;
// }

// When creating recursion you need to:
// have an if statement that will terminate your recursive calls
// call the current function you are defining: this is known as the recursive step 
// you will need to make sure that arguments to the recursive call are getting 
// closer to the termination condition

// reverse a string using recursion 

const reverse = string => {
    const reverseString = [];
    for (let i in string) {
        reverseString.push(string.CharAt(string.length - 1));
    }
    return reverseString.join('');
};

console.log(reverse('caleb'));

// recursiveReverse
const recursiveReverse = string => {
    if (string.length === 0) {
        return '';
    }
    const firstChar = string[0];
    const restOfString = string.slice(1);

    return reversiveReverse(restOfString) + firstChar;
};

console.log(recursiveReverse('Caleb'))