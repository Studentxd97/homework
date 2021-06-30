/*  (1) Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’].
Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert. */

let array = [10, 17, 30, 50, 'abc', 'v', '1', '39'];

let sum = 0;
for (let i = 0; i < array.length; i++) {
  let value = +array[i];
  if (!isNaN(value)) {
    sum += value;
  }
}
alert(sum);
