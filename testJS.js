//////////////////////////////// second big //////////////////////////////////


// var numbers = [5, 10, 3, 10, 8, 5, 8];
// var sortedArray = numbers.sort((a, b) => b - a)
// var notDuplicated = [...new Set(sortedArray)]
// let secondLargest = notDuplicated[1];
// console.log(secondLargest); // 8


//////////////////////////////// reverse word //////////////////////////////////


// var word = 'montaser';
// console.log(word.split('').reverse().join('')); // resatnom


//////////////////////////////// convert string to number implicitly //////////////////////////////////


// var w = 10 - "5";
// var x = 10 * "5";
// var y = 10 / "5";
// var z = 10 % "5";

// console.log('------------------------------------------------------');
// console.log(w); // 5
// console.log(x); // 50
// console.log(y); // 2
// console.log(z); // 0

// var w = "5" - 10;
// var x = "5" * 10;
// var y = "5" / 10;
// var z = "5" % 10;

// console.log('------------------------------------------------------');
// console.log(w); // -5
// console.log(x); // 50
// console.log(y); // 0.5
// console.log(z); // 5


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


////////////////////////////////////// setTimeout /////////////////////////////////////////////////


// function func1() {
//     console.log('x: ' + x);
//     console.log('y: ' + y);
//     setTimeout(() => {
//         console.log('x: ' + x);
//         console.log('y: ' + y);
//     }, 0);

//     var x = 2;
//     let y = 12;
// }
// func1();


//////////////////////////////////////////////////////////////////////////////////////


// var a = {};
// a['firstName'] = 'John';
// a.lastName = 'Doe';

// console.log(a);


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


// **************** call ******************

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

// **************** apply ******************

// let hero = {
//     powerLevel: 99,
//     getPower() {
//         return this.powerLevel;
//     },
// };
// let getPower = hero.getPower;

// let hero2 = { powerLevel: 42 };

// console.log(getPower()); // undefined
// console.log(getPower.apply(hero2)); // 42


/////////////////////////////////// IIFE ////////////////////////////////////


// (function () {
//   var message = "Hello, World!";
//   console.log(message);
// })();


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


// let n1 = 5;
// let n2 = new Number(5); // object from Number
// console.log('n2: ', n2);
// console.log('typeof(n2): ', typeof (n2)); // object
// console.log(n1 === n2); // false
// console.log(n1 == n2); // true 


/////////////////////////////////////////////////////////////////////////////////////////


// const arr = [
//     { x: 5, y: 6 },
//     { x: 7, y: 8 },
// ];

// arr.filter((ele) => ele.x === 5);
// console.log(arr); // the original array is not modified

// const element = arr.filter((ele) => ele.x === 5);
// console.log(element); // element is an array that accept condition

// arr.map((ele) => (ele.x = 22));
// console.log(arr); // the original array is modified --> x will equal 22 in all element


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


/////////////////////////////////////////////////////////////////////////////////////////


// let msg = "Good morning!!";
// msg.name = "John";
// console.log(msg.name); // undefined


/////////////////////////////////////////////////////////////////////////////////////////


// const func = () => {
//     return;
//     {
//         x = 5;
//     }
// };
// console.log(func()); // undefined


/////////////////////////////////////////////////////////////////////////////////////////


// try {
//     setTimeout(() => {
//         console.log("start try block"); // 2
//         throw new Error(`An exception is thrown`); // throw exception 3
//     }, 1000);
//     console.log("End try block"); // 1
// } catch (err) {
//     console.log("Error: ", err);
// };