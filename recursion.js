//////////////////////////////////////// recursion function ////////////////////////////////////////////

// function factorial(n) {
//   // Base case: factorial of 0 is 1
//   if (n === 0) {
//     return 1;
//   }
//   console.log(`factorial ${n}`);
//   // Recursive case: multiply n with factorial of (n - 1)
//   return n * factorial(n - 1);
// };

// const result = factorial(5);
// console.log(result); // output --> factorial 5 -- factorial 4 -- factorial 3 -- factorial 2 -- factorial 1 -- 120


// function add(number) {
//     if (number <= 0) {
//         return 0;
//     } else {
//         // console.log(number);
//         var result = number + add(number - 1);
//         console.log(`this is number ${number} and the result is ${result}`);
//         // return number + add(number - 1);
//         return result;
//     };
// };

// console.log(add(4));