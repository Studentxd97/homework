/* (1) Создайте функцию p и a, которые будут служить короткими именами для prompt и alert соответственно,
то есть запрашивать окно с полем ввода и выводить любое пользовательское сообщение в стандартном модальном окне.
Напишите функцию d, которая будет служить коротким именем для debugger, то есть запускать процесс отладки.*/

function p(message, value) {
  let input = prompt(message, value);
  return input;
}
let resultP = p('Введите ваше имя', 'Oleg');
console.log(resultP);

debugger;

function a(message) {
  return message;
}
let resultA = a(`Hello ${ resultP}`);
console.log(resultA);


function d() {
  debugger;
}
let resultD = d();
console.log(resultD);
