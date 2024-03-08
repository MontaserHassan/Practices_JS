////////////////////////////// call by value //////////////////////////////////


// let num1 = 1;
// let num2 = num1;
// console.log('num2: ', num2); // 1
// console.log(num1 == num2); // true
// console.log(num1 === num2); // true

// console.log('----------------------------------------------');

// num2 = 3;
// console.log('num1: ', num1); // 1
// console.log('num2: ', num2); // 3 
// console.log(num1 == num2); // false
// console.log(num1 === num2); // false


////////////////////////////// call by reference //////////////////////////////////


// let num1 = [1, 2];
// let num2 = num1;
// // num2.push(3);
// console.log('num1: ', num1); // [1, 2, 3]
// console.log('num2: ', num2); // [1, 2, 3]
// console.log(num1 == num2); // true
// console.log(num1 === num2); // true

// console.log('----------------------------------------------');

// num2 = [1, 2];
// console.log('num1: ', num1); // [1, 2]
// console.log('num2: ', num2); // [1, 2]
// console.log(num1 == num2); // false
// console.log(num1 === num2); // false