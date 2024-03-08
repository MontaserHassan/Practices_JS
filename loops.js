/////////////////////////////////////// while ///////////////////////////////////////


let i = 0;
console.log('--------------------- while ---------------------');
while (i < 5) {
    console.log(`index: ${i} ----- Iteration ${i + 1}`);
    i++;
};


/////////////////////////////////////// do while ///////////////////////////////////////


let j = 0;
console.log('--------------------- do while ---------------------');
do {
    console.log(`index: ${i} ----- Iteration ${j + 1}`);
    j++;
} while (j < 5);


/////////////////////////////////////// for ///////////////////////////////////////


console.log('--------------------- for ---------------------');
for (let i = 0; i < 5; i++) {
    console.log(`index: ${i} ----- Iteration ${i + 1}`);
};


/////////////////////////////////////// for in {object} ///////////////////////////////////////


console.log('--------------------- for in ---------------------');
const object = { a: 1, b: 2, c: 3 };
for (const property in object) {
    console.log(`${property}: ${object[property]}`);
};


/////////////////////////////////////// for of [array] ///////////////////////////////////////


console.log('--------------------- for of ---------------------');
const array1 = ['a', 'b', 'c'];
for (const element of array1) {
    console.log(element);
};