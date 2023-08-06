////////////////////////////////////////// type casting ( Coercion ) -- ( loosely typed ) /////////////////////////////////////////////////


// let a = "10";
// let a1 = "10";
// let b = 20;
// let c = true;


// console.log(a + b + c); // --> 1020true ( cast to string )
// console.log(b + c + a); // --> 2110 ( add 20 + 1 then write 10 )
// console.log(a + a1); // --> 1010 ( write 10 then write 10 )

// console.log(a - c); // --> 9 ( cast to number )
// console.log(b - a1); // --> 10 ( cast to number )

// console.log(a % a1); // 0 ( cast to number )
// console.log(b % a); // 0 ( cast to number )

// console.log(b / c); // 20 ( cast to number )
// console.log(a / a1); // 1 ( cast to number )

// console.log(a * c); // 10 ( cast to number )
// console.log(a1 * b); // 200 ( cast to number )

// % - / *  --> cast to number

// console.log(a + ((a1 / b) * c) - 5); // 10 + 10 / 20 * 1 - 5
// console.log(a + 0.5); // 100.5



// -----------------------------------------------------------------------------------------


// var x = 3;
// var y = "3";
// console.log(x - y);
// console.log(isNaN(Number(y))); // false


// -----------------------------------------------------------------------------------------


// var a = "hello";
// var b = "world";
// console.log(isNaN(a - b)); // true