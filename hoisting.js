////////////////////////////////////////////////////////// var & const & let ( hoisting ) ///////////////////////////////////////////////////////////////////////


// console.log(x); // undefined
// var x = 1;
// console.log(x); // 1

// function getX() {
//     return console.log(x); // 1
// }

// getX();


// -------------------------------------------------------------------------------------------------------


// function getName() {
//     return console.log(x);
// }

// getName();


// -------------------------------------------------------------------------------------------------------


// (function getX() {
//     var x = 1;
//     return console.log(x);
// })();

// console.log(x);

// (function getName() {
//     return console.log(x); // error x is not defined
// })();


// -------------------------------------------------------------------------------------------------------


// if (true) {
//     var x = 1;
// };

// console.log(x); // 1

// if (true) {
//     const x = 1;
//     let y = 2;
// };

// console.log(y); // y is not defined
// console.log(x); // x is not defined


// -------------------------------------------------------------------------------------------------------


// function person() {
// console.log(name); // undefined
// console.log(age); // age is not defined
// let age = 24;
// var name = "montaser";
// };

// person();

// console.log(name); // name is not defined
// console.log(age); // age is not defined


// -------------------------------------------------------------------------------------------------------


// function doSomethingVar() {
//     x = 33;
//     console.log(x);
//     var x;
// }
// doSomethingVar();

// function doSomethingLet() {
//     x = 33;
//     console.log(x);
//     let x;
// }
// doSomethingLet();

// function doSomethingConst() {
//     x = 33; // Implicitly declares 'x' as a global variable and assigns 33 to it
//     console.log(x);
//     const x; // error --> 'const' declarations must be initialized || must put a value
// }
// doSomethingConst();
// console.log(x); // 33


// -------------------------------------------------------------------------------------------------------


// var x;
// console.log(x); // Outputs "undefined" since the initialization of "x" is not hoisted
// x = 23;
// console.log(x); // 23


// -------------------------------------------------------------------------------------------------------


// function person() {
//     console.log(name);
//     var name = "montaser";
// };

// person();


// -------------------------------------------------------------------------------------------------------


// console.log(add(1, 2)); // 3 || hoisting was accepted
// console.log(add)
// function add(a, b) {
//     var result = a + b;
//     return result;
// };

// console.log(myAdd(1, 2)); // error || hoisting was NOT accepted
// console.log(myAdd); // undefined
// var myAdd = function (a, b) {
//     var result = a + b;
//     return result;
// };
// console.log(myAdd(1, 2)); // 3
// console.log(myAdd); // object from type --> Function


// console.log(arr); //undefined
// var arr = [1, "2", "monty", 22, function (a, b) { var result = a + b; return console.log(result); }, "Abou-trika"];
// arr[4](1, 2); // 3
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "function") {
//         const func = arr[i];
//         const result = func(1, 2);
//     };
// };


// function newAdd(a, b, c) {
//     return function sum() {
//         return a + b + c;
//     };
// };
// var result = newAdd(1, 2, 3);
// console.log(result()); // 6
// console.log(newAdd(1, 2, 3)); // [Function: sum]
// console.log(sum)); // error
// console.log(sum()); // error


// -------------------------------------------------------------------------------------------------------


// console.log(i); // undefined 
// var i = () => {
//     console.log(c);
// };
// console.log(i); // object from type --> Function
// console.log(i()); // error with c


// console.log(q); // error --> Cannot access 'q' before initialization
// const q = () => {
//     console.log(c);
// };
// console.log(q); // object from type --> Function 
// console.log(q()); // console.log(q); // object from type --> Function  


// console.log(x); // error  --> Cannot access 'q' before initialization
// let x = () => {
//     console.log(c);
// };
// console.log(x); // object from type --> Function
// console.log(x()); // error with c


// -------------------------------------------------------------------------------------------------------


// var x = "12345ABC";
// (function () {
//     console.log('x --> ' + x);
//     var x = "12345";
// })(); // undefined


// -------------------------------------------------------------------------------------------------------