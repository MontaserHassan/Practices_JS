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
// console.log([] == undefined); // false
// console.log([] == null); // false

// console.log({} == true); // false
// console.log({} == false); // false

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
// var str2 = new String("Hello JavaScript from str1");
// var str3 = String("Hello JavaScript from str3");

// console.log(str3.split('').reverse().join(''));

// console.log(typeof str1); // String
// console.log(typeof str2); // Object
// console.log(typeof str3); // String

// console.log(str1 == str2); // true
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


// let arr = [1, 2, 3];
// let str = "1,2,3";
// console.log(arr == str); // true --> compare between value only
// console.log(arr === str); // false --> compare between value and data type


// -----------------------------------------------------------------------------------------------------------------


function runFunc() {
    // console.log("1" + 1); // 11
    // console.log("A" - 1); // NaN
    // console.log(2 + "-2" + "2"); // 2-22
    // console.log("Hello" - "World" + 78); // NaN
    // console.log("Hello" + "78"); // Hello78
    // console.log(['a'] + ['b'] + ['c']); // abc
    // console.log(['a'] + ['b'] - ['c']); // NaN
    // console.log(String(() => 5)); // () => 5)
    // console.log(String(5)); // '5'
    // console.log(String(true)); // 'true'
    // console.log(Number(true)); // 1
    // console.log(Number('true')); // NaN
    // console.log(String([])); // '[]'
    // console.log(String({})); // object
    // console.log(String([1, 2, 3])); // '1, 2, 3'
}
runFunc();


// -----------------------------------------------------------------------------------------------------------------


// console.log(null + 1); // 1
// console.log(null - 1); // -1
// console.log(undefined + 1); // NaN
// console.log(undefined - 1); // NaN
// console.log(undefined + null); // NaN
// console.log(String(null)); // 'null'
// console.log(Number(null)); // 0


// -----------------------------------------------------------------------------------------------------------------