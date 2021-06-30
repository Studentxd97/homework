/* (2) Создайте массив из минимум 100 случайных целых чисел.
Переберите массив и сгенерируйте на его основе новый, который содержит только уникальные (неповторяющиеся) значения
исходного массива. Решите задачу, используя только цикл for. */

let arr = [];

 for (let i = 0; i < 100; i++) {
   let random = Math.floor(Math.random() * 100);
   arr.push(random);
}

let arrayOfUnicoleNumbers = [];

for (let i = 0; i < arr.length; i++) {
  if (arrayOfUnicoleNumbers.indexOf(arr[i]) === -1) {
    arrayOfUnicoleNumbers.push(arr[i]);
  }
}

console.log(arrayOfUnicoleNumbers);
