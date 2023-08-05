////////////////////////////////////////////////////////// pure function ///////////////////////////////////////////////////////////////////////


let x = 5;
// y = ++x;
// console.log('y --> ' + y);
// console.log(typeof y); // number

function pure(x) {
    return ++x;
};

// console.log('pure function --> ' + pure(5));
let newX = pure(5);
console.log(x);
console.log(newX);
// console.log(typeof newX); // number
