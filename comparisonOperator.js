////////////////////////////////////////////////////////// typeof & operator ///////////////////////////////////////////////////////////////////////


// const a = [1];
// const b = [1];
// const c = ["1"];
// const e = a;


// console.log('e ---> ' + typeof e + ' ' + Array.isArray(e));
// console.log('a ---> ' + typeof a + ' ' + Array.isArray(a));

// console.log(a === b); // false
// console.log(a == b); // false

// console.log(a === c); // false
// console.log(a == c); // false

// console.log(a === e); // true
// console.log(a == e); // true

// console.log(0 == true); // false
// console.log([] == true); // false
// console.log(0 == []); // true
// console.log('0' == []); // false
// console.log(0 === []); // false


// -----------------------------------------------------------------------------------------------------------------


// let x = () => {
//     console.log(c);
// };
// function func() {
//     console.log(b);
// };


// console.log(x() == func());
// console.log(x() === func());

// console.log("x ---> " + typeof x + ' ' + Array.isArray(x));
// console.log("func ---> " + typeof func);


// -----------------------------------------------------------------------------------------------------------------

var o = '';
var o1 = '';

console.log(o == o1);
console.log(o === o1);

// -----------------------------------------------------------------------------------------------------------------


// let w = 0;
// let y = false;

// console.log(w == y);
// console.log(w === y);
// console.log(0 == false); // false
// console.log(0 === false); // false


// -----------------------------------------------------------------------------------------------------------------


// var str1 = "Hello JavaScript from str1";
// var str2 = new String("Hello JavaScript from str2");
// var str3 = String("Hello JavaScript from str3")

// console.log(str1.reverse());
// console.log(typeof str1);
// console.log(typeof str2);
// console.log(typeof str3);
// console.log(str1 === str2);
// console.log(str1 === str3);
// console.log(str2 === str3);


// -----------------------------------------------------------------------------------------------------------------


// function foo() {
//     var a = b = 2;
//     a++;
//     return a;
// };

// console.log(foo()); 3
// console.log(typeof a); // undefined --> global variable without value
// console.log(typeof b); // number


// -----------------------------------------------------------------------------------------------------------------


