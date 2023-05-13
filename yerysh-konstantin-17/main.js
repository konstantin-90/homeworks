//     Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
const arr = [1, 2, 'a', 3, 'b', 4];

function calculateAverage(arr) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      sum += arr[i];
      count++;
    }
  }
  return count > 0 ? sum / count : 0;
}

const avg = calculateAverage(arr); 



//     Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

function doMath(x, znak, y) {
  let result;
  switch (znak) {
    case '+':
      result = x + y;
      break;
    case '-':
      result = x - y;
      break;
    case '*':
      result = x * y;
      break;
    case '/':
      result = x / y;
      break;
    case '%':
      result = x % y;
      break;
    case '^':
      result = Math.pow(x, y);
      break;
    default:
      result = NaN;
  }
  return result;
}

const x = 5;
const y = 3;
const znak = '*';
const result = doMath(x, znak, y);


//     Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

// function fillArray(rows, cols) {
//   const arr = [];
//   for (let i = 0; i < rows; i++) {
//     arr[i] = [];
//     for (let j = 0; j < cols; j++) {
//       arr[i][j] = prompt(`Enter value for arr[${i}][${j}]:`);
//     }
//   }
//   return arr;
// }

// const rows = prompt('Enter number of rows:');
// const cols = prompt('Enter number of columns:');
// const arr = fillArray(rows, cols);



//     Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

// function removeChars(str, charsToRemove) {
//   let result = '';
//   for (let i = 0; i < str.length; i++) {
//     if (!charsToRemove.includes(str[i])) {
//       result += str[i];
//     }
//   }
//   return result;
// }

// const str = ' hello world';
// const charsToRemove = ['l', 'd'];
// const result = removeChars(str, charsToRemove); 

