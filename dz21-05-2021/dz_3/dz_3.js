var money_first_pers = +prompt("Какая сумма у вас?");
var money_friend = +prompt("Какая сумма у вашего друга?");
var sum = money_first_pers + money_friend;
if (sum <= 100) {
    alert ("Пока у вас нет такой возможности :(");
} else if (sum > 100 ) {
    alert("Вперед на Мальту");
} else  {
    alert("Что то не то...");
}