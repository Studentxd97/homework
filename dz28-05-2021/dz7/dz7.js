/* С помощью деструктуризации сохраните свойство phone объекта-копии в переменную с именем gadget.
Добавьте поля объекта gadget в созданный ранее список <dl> */

let {phone: gadget} = person;

for (let key in gadgetInput) {
  console.log(gadgetInput[key]);

  let gadgetElement = document.createElement('dt');
  listNode.appendChild(gadgetElement);
  gadgetElement.innerText = key;

  let valueElement = document.createElement('dd');
  gadgetElement.appendChild(valueElement);
  valueElement.innerText = gadgetInput[key];
}
