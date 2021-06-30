person.phone = '';

while (true) {
   let property = prompt('Введите свойство которое нужно удалить или изменить');

  if (property === null) {
    alert('Вы завершили действие')
    break;
  }

  if (property in person) {
    let act = prompt('Напишите что вы хотите сделать (delete или update)');

    if (act === 'delete') {
      delete person[property];
      alert(`Вы удалили свойство ${property}`)
    } else if (act === 'update'){
      let value =  prompt('Введите ваши изменение');
      alert(`Вы изменили свойство ${property} на ${value}`);
      person[property] = value;
    } else {
      alert('Неверное действие');
    }

  } else {
    alert('В вашем объекте нет такого свойства');
  }
}

console.log(person);
