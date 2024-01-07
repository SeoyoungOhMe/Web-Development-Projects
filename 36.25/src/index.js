// var numbers = [3, 56, 2, 48, 5];



// //Map -Create a new array by doing something with each item in an array.

// // function double(x) {
// //   return x * 2;
// // }

// // const newNumbers = numbers.map(double);

// // var newNumbers = [];

// // function double(x) {
// //   newNumbers.push(x * 2);
// // }
// // numbers.forEach();

// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });

// console.log(newNumbers);



// //Filter - Create a new array by keeping the items that return true.

// // const newNumbers2 = numbers.filter(function (num) {
// //   return num > 10
// // });

// var newNumbers2 = [];
// numbers.forEach(function(num) {
//   if(num < 10) {
//     newNumbers2.push(num);
//   }
// })

// console.log(newNumbers2);



// //Reduce - Accumulate a value by doing something to each item in an array.

// // var newNumbers3 = 0;
// // numbers.forEach(function (currentNumber) {
// //   newNumbers3 += currentNumber
// // })

// var newNumbers3 = numbers.reduce(function (accumulator, currentNumber){
//   return accumulator * currentNumber;
// })

// console.log(newNumbers3);



// //Find - find the first item that matches from an array.

// const newNumbers4 = numbers.find(function (num) {
//   return num > 10;
// })

// console.log(newNumbers4);



// //FindIndex - find the index of the first item that matches.

import emojipedia from "./emojipedia";

console.log(emojipedia);

const newArray = emojipedia.map(function(x) {
  return x.meaning;
})

console.log(newArray);

// // const newNumbers2 = numbers.filter(function (num) {
// //   return num > 10
// // });

// const newText = newArray.filter(function (text) {
//   return text.substring(0, 100);
// })

var newText = [];
newArray.forEach(function(text) {
  newText.push(text.substring(0, 100));
})

console.log(newText);