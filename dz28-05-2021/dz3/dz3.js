/* Создайте объект person, описывающий персону, с произвольным количеством произвольных полей.
Запустите цикл, в котором через prompt запрашивается имя свойства.
С помощью оператора in или typeof проверьте наличие в объекте этого свойства, и выведите его на экран.*/

var person = {
  lastName: 'Oleg',
  firstName: 'Shapovalov',
  age: 23,
  sex: 'female',
  height: 175,
  job: 'Google',
};

while (true) {
  let propertyName = prompt('Введите имя свойства, которое вас интересует')
  if (propertyName === null) {
    break;
  }

  if (propertyName in person) {
    alert(person[propertyName]);
  } else {
    person[propertyName] = prompt('Введите значение для этого свойства');
  }
}

console.log(person);
