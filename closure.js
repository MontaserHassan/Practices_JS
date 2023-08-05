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
//         console.log(arguments[i]);
//     }
//     console.log(a);
//     return function (a, b) {
//         var w = 20;
//         for (var i = 0; i < arguments.length; i++) {
//             console.log(arguments[i]);
//         }
//         return x + y + z + a + b + w;
//     };
// };
// console.log(outerFunc(5, 6)(3, 4));
// var result = outerFunc(5, 6);
// console.log(result);
// console.log(result(3, 4));
