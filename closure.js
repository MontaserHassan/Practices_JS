/////////////////////////// Closures /////////////////////////////////////


// function outerFunction() {
//     var count = 0;

//     return function innerFunction() {
//         count++;
//         console.log(count);
//     };
// };


// var counter1 = outerFunction();
// var counter2 = outerFunction();
// var counter3 = counter1;

// counter1();
// counter1();
// counter1();

// counter2();
// counter2();

// counter3();
// counter3();


// -------------------------------------------------------------------------------------------


// var b = 2;
// function outerFunc(x, y) {
//     var z = 10;
//     var a = 1;
//     for (var i = 0; i < arguments.length; i++) {
//         console.log(`outer function --> ${i} : ${arguments[i]}`);
//     }
//     console.log('a --> ' + a); // a --> 10
//     return function (a, b) {
//         var w = 20;
//         for (var i = 0; i < arguments.length; i++) {
//             console.log(`inner function --> ${i} : ${arguments[i]}`);
//         }
//         return x + y + z + a + b + w;
//     };
// };
// console.log(outerFunc(5, 6)(3, 4)); // 48
// var result = outerFunc(5, 6);
// console.log('[Function (anonymous)]: ', result); // [Function (anonymous)]
// console.log(result(3, 4)); // 48


// -------------------------------------------------------------------------------------------


// function outerFunction(outerVar) {
//     return function innerFunction(innerVar) {
//         console.log(`Outer variable: ${outerVar}`);
//         console.log(`Inner variable: ${innerVar}`);
//     }

//     // Returning the inner function, creating a closure
// }

// const closure1 = outerFunction('I am from closure 1');
// const closure2 = outerFunction('I am from closure 2');

// closure1('Inner variable 1');
// closure2('Inner variable 2');