/* (4) Создайте строку с текстом ‘Как Однажды Жак Звонарь Сломал Городской Фонарь’.
Разбейте ее на массив слов, и переставьте слова в правильном порядке с помощью любых методов массива (indexOf, splice ...) */

let str = 'Как Однажды Жак Звонарь Сломал Городской Фонарь';
let arrayStr = str.split(' ');
console.log(arrayStr);

arrayStr.splice(1, 1);
arrayStr.splice(3, 0, 'Однажды');
let string = arrayStr.join(' ');
alert(string);
