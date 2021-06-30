/* (4) Придумайте алгоритм расчета суммы всех фактических параметров функции с использованием только рекурсии: */

let numbers = [6, 5, 3];

function rec(arr, index) {
  if (index > arr.length - 1) {
    return 0;
  }

  return arr[index] + rec(arr, index + 1);
}
let sum = rec(numbers, 0);
console.log(sum);
