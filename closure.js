/////////////////////////// Closures /////////////////////////////////////


// function outerFunction(){
//     var count = 0;

//     return function innerFunction(){
//         count++;
//         console.log(count);
//     };
// };


// var counter1 = outerFunction();
// var counter2 = outerFunction();

// counter1();
// counter1();
// counter1();

// counter2();
// counter2();


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
// console.log(result); // [Function (anonymous)]
// console.log(result(3, 4)); // 48