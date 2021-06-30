/* Создайте структуру данных, полностью описывающую html-разметку картинки.

<img src="https://www.google.com.ua/logos/doodles/2017/bella-akhmadulinas-80th-birthday-5134676388741120.3-law.gif" alt="" style="border: 1px solid #ccc" width="200" /> */

var img = {
  src: 'https://www.google.com.ua/logos/doodles/2017/bella-akhmadulinas-80th-birthday-5134676388741120.3-law.gif',
  alt: '',
  style: 'border: "1px solid #ccc"',
  width: '200'
};

var element = document.createElement('img');
element.setAttribute('src', img.src);
element.setAttribute('alt', img.alt);
element.setAttribute('style', img.style);
element.setAttribute('width',img.width )

document.body.append(element);
