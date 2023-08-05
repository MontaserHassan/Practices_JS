// ////////////////////////////////////////////////////////// this ///////////////////////////////////////////////////////////////////////


// const obj = {
//     name: 'montaser',
//     age:24,
//     func1(){
//         console.log('Declaration ---> ' + this); // current object
//     },
//     func2: ()=>{
//         console.log("Arrow ---> " + this); // global object
//     },
//     func3: function(){
//         console.log("Expression ---> " + this); // current object
//     }
// };

// console.log(obj.name);
// console.log(obj.age);
// obj.func1();
// obj.func2();
// obj.func3();
// console.log('global ---> ' + this) // global object


// var obj1 = {
//   address: "Mumbai,India",
//   getAddress: function () {
//     console.log(this.address);
//   },
// };

// var getAddress = obj1.getAddress;
// var obj2 = { name: "akshay"};
// obj2.getAddress(); // error because obj2 does not have function getAddress


//////////////////////////////// second big //////////////////////////////////


// var numbers = [5, 10, 3, 10, 8, 5, 8];
// var sortedArray = numbers.sort((a, b) => b - a)
// var notDuplicated = [...new Set(sortedArray)]
// let secondLargest = notDuplicated[1];
// console.log(secondLargest); // 8


//////////////////////////////// reverse word //////////////////////////////////


// var word = 'montaser';
// console.log(word.split('').reverse().join('')); // resatnom

//////////////////////////////// convert string to numbers //////////////////////////////////

// var numbers = ['5', '10', '3', '10', '8', '5', '8'];

// var convertedNumbers = numbers.map((num) => Number(num));

// console.log(convertedNumbers);  // Output: [5, 10, 3, 10, 8, 5, 8]


//////////////////////////////// convert string to number implicitly //////////////////////////////////


// var w = 10 - "5";
// var x = 10 * "5";
// var y = 10 / "5";
// var z = 10 % "5";

// console.log(w);
// console.log(x);
// console.log(y);
// console.log(z);

// var w = "5" - 10;
// var x = "5" * 10;
// var y = "5" / 10;
// var z = "5" % 10;

// console.log(w);
// console.log(x);
// console.log(y);
// console.log(z);


/////////////////////////////////////// convert number to string ///////////////////////////////////////


// const arrayOfNumbers = [1, 2, 3, 4, 5];
// const convertingArrayOfNumbers = arrayOfNumbers.map( (number)=> number.toString());
// console.log(convertingArrayOfNumbers);

/////////////////////////////////////// convert number to string and reverse ///////////////////////////////////////


// const arrayOfNumbers = [1, 2, 3, 4, 5];
// const reverseArrayOfNumbers = arrayOfNumbers.reverse().map( (number) => number.toString());
// console.log(reverseArrayOfNumbers);


/////////////////////////////////////// convert all to number, sorting and delete duplicated ///////////////////////////////////////


// const arr = ['3', 3, '2', 7, '1', 2, '7', 19, '0']
// const sortingArray = arr.map( (number) => Number(number)).sort( (a, b) => { return a-b } );
// const deleteDuplicatedNumbers = [ ... new Set(sortingArray) ];
// console.log(deleteDuplicatedNumbers);


/////////////////////////////////////// try object ///////////////////////////////////////


// const library = {
//     name: 'Egypt Library',
//     address: 'Nasr City',
//     books: [],

//     addBook: function (book){
//         this.books.push(book);
//     },

//     findBookById (id){
//         const book = this.books.find((book) => book.id === id);
//         if (!book) { return `this ${id} doesn't exist` };
//         return book;
//     },

//     printBooks: function (){
//         this.books.forEach(book => {
//             console.log(`this is title : ${book.title}`);
//             console.log(`this is title : ${book.author}`);
//             console.log(`this is title : ${book.isbn}\n`);
//             console.log(`-------------------------------------------\n`);
//         })
//     }
// };

// const book1 = { id: 1, title: "Book 1", author: "Author A", isbn: "1234567890" };
// const book2 = { id: 2, title: "Book 2", author: "Author B", isbn: "9876543210" };

// library.addBook(book1);
// library.addBook(book2);

// console.log(library.findBookById(6));

// library.printBooks();


/////////////////////////////////////// sum two number with three plus ///////////////////////////////////////


// var a = 1;
// var b = 2;
// console.log(a+++b);


////////////////////////////////////// convert array to string ///////////////////////////////////////////


// const array = [1, 2, 3, 4, 5];
// const string = array.join("");
// console.log(string); // "12345"
// console.log(typeof string); // string


// const array2 = [1, 2, 3, 4, 5];
// const string = JSON.stringify(array2); // convert the array to string 
// console.log(string); // "[1,2,3,4,5]"
// console.log(typeof string); // string



///////////////////////////////////// this /////////////////////////////////////////


// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// };

// console.log(person.fullName()); // Output: "John Doe"


////////////////////////////////////// setTimeout in loop /////////////////////////////////////////////////


// for (var i = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 1000);
// };

// for (let i = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 1000);
// };


//////////////////////////////////////////////////////////////////////////////////////


// var a = {};
// a['firstName'] = 'John';
// a.lastName = 'Doe';

// console.log(a);


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


//////////////////////////////////////// sum the positive numbers in the array /////////////////////////////////////////////


// function sumOfPositiveNumbers(numbers) {
//   if (numbers.length === 0) {
//     return 0;
//   }

//   // Get the first element of the array
//   const firstNumber = numbers[0];

//   if (firstNumber > 0) {
//     return firstNumber + sumOfPositiveNumbers(numbers.slice(1));
//   } else {
//     return sumOfPositiveNumbers(numbers.slice(1));
//   }
// }

// const numbers = [2, -5, 8, -3, 10, 3, 0, 6, -1];
// const sum = sumOfPositiveNumbers(numbers);
// console.log(sum);


///////////////////////////////// get the even numbers in the array ///////////////////////////////////////


// function getEvenNumbers(numbers) {
//   if (numbers.length === 0) {
//     return [];
//   }
//   const firstNumber = numbers[0];

//   if (firstNumber % 2 === 0) {
//     return [firstNumber].concat(getEvenNumbers(numbers.slice(1)));
//   } else {
//     return getEvenNumbers(numbers.slice(1));
//   }
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = getEvenNumbers(numbers);
// console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]


///////////////////////////// call, bind, apply ///////////////////////////////////////


// const person = {
//   name: 'John',
//   sayHello: function() {
//     console.log(`Hello, ${this.name}!`);
//   }
// };

// const anotherPerson = {
//   name: 'Alice'
// };

// person.sayHello(); // Output: Hello, John!

// person.sayHello.call(anotherPerson).app; // Output: Hello, Alice!


/////////////////////////////////// IIFE ////////////////////////////////////


// (function () {
//   var message = "Hello, World!";
//   console.log(message);
// })();


////////////////////////////// call by value //////////////////////////////////


// let num1 = 1;
// let num2 = num1;
// console.log(num2); // 1
// console.log(num1 == num2); // true
// console.log(num1 === num2); // true

// console.log('----------------------------------------------');

// num2 = 3;
// console.log(num1); // 1
// console.log(num2); // 3 
// console.log(num1 == num2); // false
// console.log(num1 === num2); // false


////////////////////////////////// missing number ////////////////////////////////////


// function findMissingNumber(arr) {
//   var n = arr.length + 1;
//   var expectedSum = (n * (n + 1)) / 2;
//   console.log(expectedSum);

//   var actualSum = arr.reduce((acc, curr) => acc + curr, 0);
//   console.log(actualSum)

//   var missingNumber = expectedSum - actualSum;
//   console.log(missingNumber);

//   return missingNumber;
// }

// function findMissingNumber(arr) {
//     var missingNumber;
//     for (var i = 0; i < arr.length - 1; i++) {
//         if ((arr[i]+1) !== arr[i + 1]) {
//             missingNumber = arr[i] + 1;
//             break;
//         }
//     }
//     return missingNumber;
// }


// var arr = [1, 2, 3, 5];
// var missingNumber = findMissingNumber(arr);
// console.log("Missing number:", missingNumber);


////////////////////////////////// remove duplicate number without Set ////////////////////////////////////


// const arr = [1, 2, 3, 2, 4, 2, 5];
// const uniqueArr = arr.filter((value, index) => arr.indexOf(value) === index );

// console.log(uniqueArr);




///////////////////////////// access element in array ///////////////////////////////////


// const obj1 = [
//     {name: 'montaser', num: 1},
//     {name: 'ahmed', num: 2},
//     {name: 'mohamed', num: 3},
// ];

// obj1[0].name = 'monty';

// console.log(obj1[0]);
// console.log(obj1);


/////////////////////////////////////////////////////////////////////////////////////////


// var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(arr1.join('')); // 123456789


/////////////////////////////////////////////////////////////////////////////////////////


// var today = new Date();
// console.log(today.getTime());
// console.log(today.getDate());
// console.log(today.getMonth());
// console.log(today.getFullYear());
// console.log(today.toISOString());
// console.log(today.toDateString());
// console.log(today.toTimeString());
// console.log(today.toUTCString());
// console.log(today.toLocaleString());
// console.log(today.toLocaleTimeString());
// console.log(today.toLocaleDateString());



/////////////////////////////////////////// Arguments /////////////////////////////////////////


// var fun = function (a, b) {
//     console.log(`length of arguments:  ${arguments.length}`);
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];

//     }
//     return sum;
// };
// console.log(fun(1, 2));
// console.log(fun(1, 2, 3));
// console.log(fun(1, 2, 3, 4, 5, 6));


