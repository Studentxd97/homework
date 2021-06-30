/* (2) Используя стрелочный синтаксис ES6, напишите функцию max (аналог Math.max),
которая сравнивает два числа и возвращает большее: */

let max = (a, b) => {
  if (a > b) {
    return a;
  } else {
   return b;
  }
}

let minNumber = max(20, 7);
console.log(minNumber);
