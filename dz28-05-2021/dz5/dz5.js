/* Динамически (скриптом) создайте HTML элемент <dl>.
Переберите в цикле (for..in) сгенерированный ранее объект person, добавляя dt - для имени свойства */

let listNode = document.createElement('dl');
document.body.appendChild(listNode);

for (let key in person) {
  console.log(person[key]);

  let titleNode = document.createElement('dt');
  listNode.appendChild(titleNode);
  titleNode.innerText = key;

  let definitionNode = document.createElement('dd');
  listNode.appendChild(definitionNode);
  definitionNode.innerText = person[key];
}
