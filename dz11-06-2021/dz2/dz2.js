/* (2) Создайте функцию hello(), которая выводит приветствие пользователю.
Создайте два объекта, содержащие поля firstname, lastname.
Используя метод call и функцию hello() приветствуйте каждого из пользователей персонально. */

function hello() {
  console.log(`Hello, ${this.firstName}  ${this.lastName}!`);
}

let John = {
  firstName: 'John',
  lastName: 'Doe'
}

let Mari = {
  firstName:'Mari',
  lastName: 'Omani'
}

hello.call(John);
hello.call(Mari);
