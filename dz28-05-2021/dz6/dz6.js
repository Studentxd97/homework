/* Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями,
прочитанными из prompt (например: brand, model, resolution, color...).*/

let gadgetInput = {};

while (true) {
  let propertyName =prompt('Введите свойство для вашего гаджета');
  if (propertyName === null) {
    break;
  }

 gadgetInput[propertyName] = prompt('Введите значение для этого свойства');
}

person.phone = gadgetInput;

let personClone = {};

for (let key in person) {
  personClone[key] = person[key];
}

console.log(personClone);
