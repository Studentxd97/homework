/* (2) Напишите функцию checkNumber, которая получает на вход как параметр массив любых значений и возвращает true,
если все элементы - числа, и false - если в массиве хотя бы  одно не число.
Для проверки массива используйте метод every или some */

let arr1 = [1, 2, '3', 'a', 's', 6 ];
let arr2 = [1, 2, '3', '4'];

function checkNumber(arr) {

  let newArray = arr.every(v => !isNaN(v));

  return newArray;
};

let newArr = checkNumber(arr1);
console.log(newArr);
