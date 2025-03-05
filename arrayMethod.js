/////////////////////////////////////////////////////////////////////////////////////////


// let arr = [1, 2, 3, 4, 5, -6, 7];
// arr.length = 0;
// console.log(arr); // []


/////////////////////////////////////////////////////////////////////////////////////////


// const numbers = [11, 25, 31, 23, 33, 18, 200];
// numbers.sort();
// console.log(numbers);

// sort() : method in JavaScript converts elements to strings and then compares their sequences of UTF-16 code unit values.


/////////////////////////////////////////////////////////////////////////////////////////


// var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(arr1.join('')); // 123456789


////////////////////////////////// remove duplicate number without Set ////////////////////////////////////


// const arr = [1, 2, 3, 2, 4, 2, 5];
// const uniqueArr = arr.filter((value, index) => arr.indexOf(value) === index );

// console.log(uniqueArr);


////////////////////////////////////// convert array to string and convert string to array ///////////////////////////////////////////


// const array = [1, 2, 3, 4, 5];
// const string = array.join("");
// console.log(string); // "12345"
// console.log(typeof string); // string


// const array2 = [1, 2, 3, 4, 5];
// const string = JSON.stringify(array2); 
// console.log(string); // "[1,2,3,4,5]"
// console.log(typeof string); // string


function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;
    console.log('str1: ', str1);
    console.log('str2: ', str2);
    console.log('str1.split(""): ', str1.split(''));
    console.log('str2.split(""): ', str2.split(''));
    console.log('str1.split("").sort(): ', str1.split('').sort());
    console.log('str2.split("").sort(): ', str2.split('').sort());
    console.log('str1.split("").sort().join(""): ', str1.split('').sort().join(''));
    console.log('str2.split("").sort().join(""): ', str2.split('').sort().join(''));
    return str1.split('').sort().join('') === str2.split('').sort().join('');
};

var word1 = "cat";
var word2 = "tca";

console.log(areAnagrams(word1, word2)); // Output: true


//////////////////////////////// convert string to numbers //////////////////////////////////

// var numbers = ['5', '10', '3', '10', '8', '5', '8'];

// var convertedNumbers = numbers.map((num) => Number(num));

// console.log(convertedNumbers);  // Output: [5, 10, 3, 10, 8, 5, 8]


/////////////////////////////////////// convert number to string ///////////////////////////////////////


// const arrayOfNumbers = [1, 2, 3, 4, 5];
// const convertingArrayOfNumbers = arrayOfNumbers.map( (number)=> number.toString());
// console.log(convertingArrayOfNumbers);


/////////////////////////////////////// convert number to string and reverse ///////////////////////////////////////


// const arrayOfNumbers = [1, 2, 3, 4, 5];
// const reverseArrayOfNumbers = arrayOfNumbers.reverse().map( (number) => number.toString());
// console.log(reverseArrayOfNumbers);