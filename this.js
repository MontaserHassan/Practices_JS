///////////////////////////////////// this /////////////////////////////////////////


// const obj = {
//     name: 'montaser',
//     age: 24,
//     func1() {
//         console.log('Declaration ---> ' + this); // current object
//     },
//     func2: () => {
//         console.log("Arrow ---> " + this); // global object
//     },
//     func3: function () {
//         console.log("Expression ---> " + this); // current object
//     }
// };

// console.log(obj.name);
// console.log(obj.age);
// obj.func1();
// obj.func2();
// obj.func3();
// console.log('global ---> ' + this); // global object


///////////////////////////////////// this /////////////////////////////////////////


// var obj1 = {
//     address: "Mumbai,India",
//     getAddress: function () {
//         console.log(this.address);
//     },
// };

// var getAddress = obj1.getAddress;
// var obj2 = { address: "Bani-Suef, Egypt" };
// obj1.getAddress.call(obj2); // Bani-Suef, Egypt
// obj1.getAddress.apply(obj2); // Bani-Suef, Egypt
// obj1.getAddress.bind(obj2);
// obj2.getAddress(); // error because obj2 does not have function getAddress


///////////////////////////////////// this /////////////////////////////////////////


// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// };

// const person2 = {
//     firstName: "Montaser",
//     lastName: "Hassan",
// };

// console.log('person.fullName: ', person.fullName()); // Output: "John Doe"
// console.log('apply: ', person.fullName.apply(person2)); // Output: "Montaser Hassan"
// console.log('call: ', person.fullName.call(person2)); // Output: "Montaser Hassan"
// console.log('bind: ', person.fullName.bind(person2)()); // Output: "Montaser Hassan"


///////////////////////////////////// this /////////////////////////////////////////


// const a = function () {
//     console.log('first: ' + this); // global
//     const b = {
//         fun1: function () {
//             console.log('function () { ' + this); // object
//         }
//     };
//     const c = {
//         fun2: () => {
//             console.log('() => { ' + this); // global
//         }
//     };
//     b.fun1();
//     c.fun2();
// };
// a();


///////////////////////////////////// this /////////////////////////////////////////


// const myObject = {
//     foo: 'bar',
//     func() {
//         const self = this;
//         console.log(`outer func: this.foo = ${this.foo}`);
//         console.log(`outer func: self.foo = ${self.foo}`);
//         const c = () => {
//             console.log(`inner func: this.foo = ${this.foo}`);
//             console.log(`inner func: self.foo = ${self.foo}`);
//         };
//         c();
//     },
// };

// myObject.func();


///////////////////////////////////// this /////////////////////////////////////////

// const x = {
//     name: 'hassan',
//     b: {
//         name: "montaser",
//         f: function () {
//             var self = this;
//             console.log(this.name);
//             (function () {
//                 console.log('inside IIFE: ' + this);
//                 console.log(this.name);
//                 console.log(self.name);
//             })();
//         },
//     }
// };
// x.b.f();