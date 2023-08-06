////////////////////////////////////////////////////////// typeof & operator ///////////////////////////////////////////////////////////////////////


// const a = [1];
// const b = [1];
// const c = ["1"];
// const e = a; // reference to the same array


// console.log('a ---> ' + typeof a + ' --> ' + Array.isArray(a)); // a ---> object --> true
// console.log('e ---> ' + typeof e + ' --> ' + Array.isArray(e)); // e ---> object --> true

// console.log(a == b); // false --> different place in memory
// console.log(a === b); // false --> different place in memory

// console.log(a == c); // false --> different place in memory
// console.log(a === c); // false --> different place in memory

// console.log(a == e); // true --> same place in memory
// console.log(a === e); // true --> same place in memory


// -----------------------------------------------------------------------------------------------------------------


// console.log(0 == true); // false
// console.log(0 == false); // true
// console.log(0 === false); // false

// console.log(0 == null); // false
// console.log(0 === null); // false

// console.log(0 == undefined); // false
// console.log(0 === undefined); // false

// console.log(0 == NaN); // false
// console.log(0 === NaN); // false

// console.log([] == true); // false
// console.log([] == false); // true
// console.log([] === false); // false
// console.log([] == 0); // true
// console.log([] === 0); // false
// console.log([] == '0'); // false
// console.log([] == ''); // true
// console.log([] === ''); // false

// console.log('' == false); // true
// console.log('' === false); // false


// -----------------------------------------------------------------------------------------------------------------


// const c = ["1"];
// const b = [1];

// let x = () => {
//     console.log(c);
// };
// function func() {
//     console.log(b);
// };


// console.log(x() == func()); // true
// console.log(x() === func()); // true


// console.log(x);
// console.log(func);
// console.log(x == func); // false
// console.log(x === func); // false


// console.log("x ---> " + typeof x + ' ' + Array.isArray(x)); // x ---> function false
// console.log("func ---> " + typeof func); // func ---> function


// -----------------------------------------------------------------------------------------------------------------


// var o = '';
// var o1 = '';

// console.log(o == o1); // true
// console.log(o === o1); // true


// -----------------------------------------------------------------------------------------------------------------


// let w = 0;
// let y = false;

// console.log(w == y); // true
// console.log(w === y); // false


// -----------------------------------------------------------------------------------------------------------------


// var str1 = "Hello JavaScript from str1";
// var str2 = new String("Hello JavaScript from str2");
// var str3 = String("Hello JavaScript from str3");

// console.log(str3.split('').reverse().join(''));

// console.log(typeof str1); // String
// console.log(typeof str2); // Object
// console.log(typeof str3); // String

// console.log(str1 == str2); // false
// console.log(str1 == str3); // false
// console.log(str2 == str3); // false

// console.log(str1 === str2); // false
// console.log(str1 === str3); // false
// console.log(str2 === str3); // false


// -----------------------------------------------------------------------------------------------------------------


// function foo() {
//     var a = b = 2;
//     a++;
//     return a;
// };

// console.log(foo()); // 3
// console.log(typeof a); // undefined --> global variable without value
// console.log(typeof b); // number


// -----------------------------------------------------------------------------------------------------------------


