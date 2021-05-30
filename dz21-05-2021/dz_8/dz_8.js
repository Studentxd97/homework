let lang = prompt("Какой язык? (RU чи EN)");
let answer = lang.toLowerCase();
let i;
let day_ru = ["Воскресенье.","Понедельник.","Вторник.","Среда.","Четверг","Пятница","Субота"];
let day_en = ["Sun.","Mon","Tues.","Wednes.","Thuers.","Friday","Satur."];

if (answer == "ru") {
    i = prompt("Какой день недели?(От 0 до 6, где 0 - воскресение)");
    alert(day_ru[i]);
} else {
    i = prompt("What day is it?(From 0 to 6, where 0 - sunday");
    alert(day_en[i]);
};