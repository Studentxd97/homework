/* (3) Создайте массив со значениями: ‘Angular’, ‘jQuery’
Добавьте в начало массива значение ‘Backbone.js’
Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’ */

let libraries = ['Angular', 'jQuery'];
libraries.unshift('Backbone.js');
libraries.push('React.js', 'Vue.js');
libraries.splice(2, 0, 'CommonJS');
let deletedLibrary = libraries.splice(libraries.indexOf('jQuery'), 1);
alert(`Это лишнее: ${deletedLibrary}`);
