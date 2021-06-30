/* (3) Создайте объект array с методом инициализации начального значения массива, c методами добавления,
удаления последнего элемента массива и методом возврата текущего состояния массива.
Используйте концепцию chaining для создания цепочки вызовов. */

let array = {
  value: [],
  setValue(value) {
    this.value = value;
    return this;
  },
  getValue() {
    return this.value;
  },
  push(value) {
    this.value.push(value);
    return this;
  },
  pop() {
    this.value.pop();
    return this;
  }
}

array.setValue([1]).push(2).push(3).push(3).pop();

let currentValue = array.getValue();
console.log(currentValue);
