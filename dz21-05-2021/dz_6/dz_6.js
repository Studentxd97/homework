var type_of_op = prompt("Введите тип операции (UAH-USD / USD-UAH)");
var type_of = type_of_op.toUpperCase();
var money = +prompt("Какую сумму перевести?")
switch (type_of) {
    case "UAH-USD":
       let result = money / 29;
        alert (result)
        break;
    case "USD-UAH":
        let result_2 = money * 29;
        alert(result_2)
        break;
}