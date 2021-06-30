/* (3) Используя синтаксис ES5, напишите функцию-аналог Math.min().
Функция принимает любое количество чисел и возвращает меньшее из них: */

function min() {
  console.log(arguments);

  let minValue = arguments[0];

  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] < minValue) {
      minValue = arguments[i];
    }
  }
  return minValue;
}
let minNumber = min(6, 5, 170, 4, 21, 98, 3);
console.log(minNumber);
