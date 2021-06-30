// Создайте объект dates для хранения дат. Первая дата – позавчера. Вторая дата – текущая дата (new Date) минус 365 дней. 


var date = new Date();

var dates = {
  firstDate: date.setDate(date.getDay() - 2),
  secondDate: date.setDate(date.getDay() - 365)
}

var dateInput = (prompt('Введите дату в формате "yyyy-MM-dd"'));
dateInput = Number(new Date(dateInput));

if (dateInput > dates.secondDate && dateInput < dates.firstDate) {
  alert('Введённая вами дата попадает в диапазон');
} else {
  alert('Введённая вами дата не попадает в диапазон');
}
