////////////////////////////////////////////////////////// var & const & let ( hoisting ) ///////////////////////////////////////////////////////////////////////


// console.log(x); // undefined
// var x = 1;
// console.log(x); // 1

// function getX() {
//     return console.log(x); // 1
// };

// getX();


// -------------------------------------------------------------------------------------------------------


// function getName() {
//     return console.log(x);
// };

// getName();


// -------------------------------------------------------------------------------------------------------


// (function getX() {
//     var x = 1;
//     return console.log(x);
// })();

// console.log(x); // error x is not defined

// (function getName() {
//     return console.log(x); // error x is not defined
// })();


// -------------------------------------------------------------------------------------------------------


// if (true) {
//     var x = 1;
// };

// console.log('x: ', x); // 1

// if (true) {
//     const y = 1;
//     let z = 2;
// };

// console.log('y: ',y); // error y is not defined
// console.log('z: ', z); // error z is not defined


// -------------------------------------------------------------------------------------------------------


// function person() {
// console.log('name-inside: ', name); // undefined
// console.log('age-inside: ', age); // age is not defined
// let age = 24;
// var name = "montaser";
// };

// person();

// console.log('name-outside: ', name); // name is not defined
// console.log('age-outside: ', age); // age is not defined


// -------------------------------------------------------------------------------------------------------


// function doSomethingVar() {
//     x = 33;
//     console.log('var: ', x); // 33
//     var x;
// };
// doSomethingVar();

// function doSomethingLet() {
//     x = 33;
//     console.log('let: ', x); // error can't access before initialization
//     let x;
// };
// doSomethingLet();

// function doSomethingConst() {
// x = 33; // Implicitly declares 'x' as a global variable and assigns 33 to it
// console.log('const: ', x); // 33
// const x; // error --> 'const' declarations must be initialized || must put a value
// }
// doSomethingConst();
// console.log('x: ', x); // 33


// -------------------------------------------------------------------------------------------------------


// var x;
// console.log('x-before: ', x); // Outputs "undefined" since the initialization of "x" is not hoisted
// x = 23;
// console.log('x-after: ', x); // 23


// -------------------------------------------------------------------------------------------------------


// function person() {
//     console.log('name: ', name);
//     var name = "montaser";
// };

// person();


// -------------------------------------------------------------------------------------------------------


// console.log('add(1, 2): ', add(1, 2)); // 3 || hoisting was accepted
// console.log('add: ', add); // object from type --> Function
// function add(a, b) {
//     var result = a + b;
//     return result;
// };

// console.log('myAdd(1, 2)-before: ', myAdd(1, 2)); // error || hoisting was NOT accepted
// console.log('myAdd-before: ', myAdd); // undefined
// var myAdd = function (a, b) {
//     var result = a + b;
//     return result;
// };
// console.log('myAdd(1, 2)-after: ', myAdd(1, 2)); // 3
// console.log('myAdd-after: ', myAdd); // object from type --> Function


// console.log('arr: ', arr); //undefined
// var arr = [1, "2", "monty", 22, function (a, b) { var result = a + b; return console.log('result: ', result); }, "Abou-trika"];
// arr[4](1, 2); // 3
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "function") {
//         const func = arr[i];
//         const result = func(1, 2); // 3
//     };
// };


// function newAdd(a, b, c) {
//     return function sum() {
//         return a + b + c;
//     };
// };
// var result = newAdd(1, 2, 3);
// console.log('result(): ', result()); // 6)); // 6
// console.log('newAdd(1, 2, 3):', newAdd(1, 2, 3)); // [Function: sum]
// // console.log('sum: ',sum); // error
// console.log('sum(): ', sum()); // error


// -------------------------------------------------------------------------------------------------------


// console.log(i); // undefined 
// var i = () => {
//     console.log(c);
// };
// console.log(i); // object from type --> Function
// console.log(i()); // error with c is not defined


// console.log(q); // error --> Cannot access 'q' before initialization
// const q = () => {
//     console.log(c);
// };
// console.log(q); // object from type --> Function 
// console.log(q()); // error with c is not defined


// console.log(x); // error  --> Cannot access 'x' before initialization
// let x = () => {
//     console.log(c);
// };
// console.log(x); // object from type --> Function
// console.log(x()); // error with c is not defined


// -------------------------------------------------------------------------------------------------------


// var x = "12345ABC";
// (function () {
//     console.log('x --> ' + x); // undefined
//     var x = "12345";
// })();


// -------------------------------------------------------------------------------------------------------


// function func1() {
//     for (var i = 0; i < 3; i++) {
//         console.log(`i: ${i}`);
//         setTimeout(() => console.log(i), 0);
//     }
// }
// func1();

// function func2() {
//     for (let j = 0; j < 3; j++) {
//         console.log(`j: ${j}`);
//         setTimeout(() => console.log(j), 0);
//     }
// }
// func2();

// -------------------------------------------------------------------------------------------------------
