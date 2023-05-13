// --------------Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] 
// Знайти суму та кількість позитивних елементів
// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let result = 0;
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     result += arr[i];
//     sum ++
//   }
// }
// console.log(result);
// console.log(sum);

// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let counter = 0;
// let value = arr.reduce(function(accumulator, sum) {
//   if (Number(sum) > 0) {
//     counter++;
//     return accumulator + sum;
//     } else {
//       return accumulator;
//     }
// }, 0)

// console.log(value); 
// console.log(counter);


// -----------------------Знайти мінімальний елемент масиву та його порядковий номер.-------------------
// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// resultmin = arr.reduce(function(element, index) {
//     return Math.min(element, index); 
//   }, 0);

// let arrIndex = arr.indexOf(resultmin);  
// console.log(resultmin, arrIndex);


// -------------------------Знайти максимальний елемент масиву та його порядковий номер.------------------
// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// resultmax = arr.reduce(function(element, index) {
//     return Math.max(element, index); 
//   }, 0);

// let arrIndex = arr.indexOf(resultmax);
// console.log(resultmax, arrIndex);


// -----------------Визначити кількість негативних елементів.--------------------
// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let result = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     result ++;
//   }
// }
// console.log(result);

// ------------------------Знайти кількість непарних позитивних елементів.------------------------
// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let result = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 3 == 0 && arr[i] > 0) {
//     result ++;
//   }
// }
// console.log(result);


// ------------------------Знайти кількість парних позитивних елементів.------------------------
// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let result = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0 && arr[i] > 0) {
//     result ++;
//   }
// }
// console.log(result);

// ------------------------Знайти суму парних позитивних елементів.------------------------
// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let result = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0 && arr[i] > 0) {
//     result += arr[i];
//   }
// }
// console.log(result);

// ------------------------Знайти суму непарних позитивних елементів.------------------------
// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let result = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0 && arr[i] > 0) {
//     result += arr[i];
//   }
// }
// console.log(result);


// ------------------------Знайти добуток позитивних елементів.------------------------
// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let result = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     result = arr[i] * arr[i];
//     console.log(result);
//   }
// }


// ---------------------Знайти найбільший серед елементів масиву, осnальні обнулити.------------------
let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let max = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   } 
// }
// console.log(max);

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] != max) {
//     arr[i] = 0;
//   } 
// }

// console.log(arr);

// arr.splice(0, arr.length, max);

// console.log(arr);

// al = arr.length;
// let maximum = arr[al - 1];
// while (al--) {
//   if (arr[al] > maximum) {
//     counter = al;
//     maximum = arr[al];
//   }
// }

// for (i = 0; i < arr.length; i++) {
//   if(arr[i] === maximum) {
//     continue;
//   } else {
//     arr.splice(i, 1, 0);
//   }
// }

// console.log(arr);