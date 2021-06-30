/* (5) Напишите функцию, которая в строке, состоящей из чисел, разделенных пробелом, находит максимальное и минимальное
и возвращает их */

let str = '3 8 25 24 7 9 -222 512 -64 0 -3 6 -6';

function maxAndMin(str) {
  let numbers = str.split(' ').map(Number);

  let max = numbers[0];
  let min = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }

    if (numbers[i] < min) {
      min = numbers[i];
    }
  }

  return (`Число ${max} максимальное, а число ${min} минимальное`);
}

let result = maxAndMin (str);
console.log(result);
