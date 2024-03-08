/////////////////////////////////////////// Scope Chain /////////////////////////////////////////


// var globalNum = 10;
// function firstScope(num1, num2) {
//     console.log("first level");
//     console.log(globalNum); // from global scope
//     console.log(num1);
//     console.log(num2);
//     // console.log(num3); // not defined
//     // console.log(num4); // not defined
//     // console.log(num5); // not defined
//     console.log("-------------------------------");
//     function secondScope(num3) {
//         console.log("second level");
//         console.log(globalNum); // from global scope
//         console.log(num1); // from firstScope
//         console.log(num2); // from firstScope
//         console.log(num3);
//         // console.log(num4); // not defined
//         // console.log(num5); // not defined
//         console.log("-------------------------------");
//         function thirdScope(num4) {
//             console.log("third level");
//             var num5 = 5;
//             console.log(globalNum); // from global scope
//             // globalNum = 100; // new assign
//             // console.log(globalNum); // from thirdScope
//             console.log(num1); // from firstScope
//             console.log(num2); // from firstScope
//             console.log(num3); // from secondScope
//             console.log(num4);
//             console.log(num5);
//             console.log("-------------------------------");
//             let result = globalNum + num1 + num2 + num3 + num4 + num5;
//             console.log("===== final result =====");
//             return console.log(result);
//         };
//         thirdScope(4);
//     };
//     secondScope(3);
// };
// firstScope(1, 2);


/////////////////////////////////////////// Scope Chain /////////////////////////////////////////


// var x = 23;

// (function () {
//     var x = 43;
//     (function random() {
//         console.log('x-before: ', x); // undefined
//         x++; // undefined++
//         console.log('x: ', x); // NaN
//         var x = 21;
//         console.log('x-after: ', x); //21
//     })();
//     console.log('x-outer: ', x); // 43
// })();
// console.log('x-global: ', x); // 23


/////////////////////////////////////////////////////////////////////////////////////////


// let count = 10;

// (function innerFunc() {
//     if (count === 10) {
//         let count = 11;
//         console.log('count inside condition: ', count); // 11 - scope
//     }
//     console.log('count outside condition: ', count); // 10
// })();


/////////////////////////////////////////////////////////////////////////////////////////