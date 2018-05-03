// Задачи на регулярные выражения JavaScript. Часть 3

// Задачи для решения
// На карманы при замене
// 1
// Дана строка 'aaa@bbb eee7@kkk'.
// Напишите регулярку, которая найдет строки по шаблону: любое количество букв и цифр,
// символ @, любое количество букв и цифр и поменяет местами то, что стоит до @ на то,
// что стоит после нее. Например, aaa@bbb должно превратиться в bbb@aaa.
function task1() {
  var str = 'aaa@bbb eee7@kkk';
  var res = str.replace(/([a-z0-9]+)@([a-z0-9]+)/g, '$2@$1');
  console.log(res);
}
task1();

// 2
// Дана строка вида 'a1b2c3'.
// Напишите регулярку, которая найдет все цифры и удвоит их количество таким образом:
// 'a11b22c33' (то есть рядом с каждой цифрой напишет такую же).
function task2() {
  var str = 'a1b2c3';
  var res = str.replace(/(\d+)/g, '$1$1');
  console.log(res);
}
task2();

// Задачи на test и match
// 3
// С помощью метода test определите, что переданная строка является емэйлом.
// Примеры емэйлов для тестирования mymail@mail.ru, my.mail@mail.ru,
// my-mail@mail.ru, my_mail@mail.ru, mail@mail.com, mail@mail.by, mail@yandex.ru
function task3() {
  var arr = ['mymail@mail.ru','my.mail@mail.ru','my-mail@mail.ru','my_mail@mail.ru', 'mail@mail.com','mail@mail.by', 'mail@yandex.ru'];
  var reg = /^[a-zA-Z-.]+@[a-z]+\.[a-z]{2,3}$/;
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    if (reg.test(arr[i])) {
      res.push(arr[i]);
    } else {
      console.log('This string: ' + arr[i] + ' is not a valid email!');
    }
  }
  console.log('Valid email: ' + res);
}
task3();

// 4
// Дана строка с текстом,
// в котором могут быть емейлы. С помощью match найдите все емэйлы в виде массива.
function task4() {
  var str = 'mymail@mail.ru my.mail@mail.ru my-mail@mail.ru my_mail@mail.ru mail@mail.com mail@mail.by mail@yandex.ru';
  var reg = /([a-zA-Z]+\W?[a-z]@[a-z]+\.[a-z]{2,3})/g;
  var res = str.match(reg);
  console.log(res);
}
task4();

// 5
// С помощью test определите, что переданная строка является доменом.
// Примеры доменов: site.ru, site.com, my-site.com.
function task5() {
  var arr = ['site.ru','site.com', 'my-site.com'];
  var reg = /^[a-z._-]+\.[a-z]{2,3}$/;
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    if (reg.test(arr[i])) {
      res.push(arr[i]);
    } else {
      console.log('This string: ' + arr[i] + ' is not a valid domain!');
    }
  }
  console.log('Valid domain: ' + res);
}
task5();

// 6
// С помощью test определите, что переданная строка является доменом.
// Примеры доменов: http://site.ru, http://site.com
function task6() {
  var arr = ['http://site.ru','http://site.com', 'my-site.com'];
  var reg = /^http:\/\/[a-z._-]+\.[a-z]{2,3}$/;
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    if (reg.test(arr[i])) {
      res.push(arr[i]);
    } else {
      console.log('This string: ' + arr[i] + ' is not a valid domain!');
    }
  }
  console.log('Valid domain: ' + res);
}
task6();

// 7
// С помощью test определите, что переданная строка является доменом
// вида http://site.ru. Протокол может быть как http, так и https.
function task7() {
  var arr = ['http://site.ru','https://site.com', 'my-site.com'];
  var reg = /^https?:\/\/[a-z._-]+\.[a-z]{2,3}$/;
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    if (reg.test(arr[i])) {
      res.push(arr[i]);
    } else {
      console.log('This string: ' + arr[i] + ' is not a valid domain!');
    }
  }
  console.log('Valid domain: ' + res);
}
task7();

// 8
// С помощью test определите, что переданная строка начинается с http или с https.
function task8() {
  var arr = ['http://site.ru','https://site.com', 'my-site.com'];
  var reg = /^https?:/;
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    if (reg.test(arr[i])) {
      res.push(arr[i]);
    } else {
      console.log('This string: ' + arr[i] + ' is not correct');
    }
  }
  console.log('Valid string: ' + res);
}
task8();

// 9
// С помощью test определите,
// что переданная строка заканчивается расширением txt, html или php.
function task9() {
  var arr = ['index.html','index.php', 'index.txt'];
  var reg = /\.txt|html|php$/;
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    if (reg.test(arr[i])) {
      res.push(arr[i]);
    } else {
      console.log('This string: ' + arr[i] + ' is not correct');
    }
  }
  console.log('Valid string: ' + res);
}
task9();

// 10
// С помощью test определите,
// что переданная строка заканчивается расширением jpg или jpeg.
function task10() {
  var arr = ['index.jpg','index.php', 'index.jpeg'];
  var reg = /\.jpg|jpeg$/;
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    if (reg.test(arr[i])) {
      res.push(arr[i]);
    } else {
      console.log('This string: ' + arr[i] + ' is not correct');
    }
  }
  console.log('Valid string: ' + res);
}
task10();

// 11
// С помощью test узнайте является ли строка числом, длиной до 12 цифр.
function task11(){
  var str = '12364gh8901u';
  var reg = /^[\d]{12}$/g;
  var res = reg.test(str);
  console.log(res);
}
task11();

// 12
// Дана строка с буквами, пробелами и цифрами.
// Найдите сумму всех чисел из данной строки.
function task12(){
  var str = 'da ff wa4 56 5 7_';
  var reg = /(\d)/g;
  var res = str.match(reg);
  console.log(res);
  var sum = 0;
  for (var i = 0; i < res.length; i++) {
    sum += parseInt(res[i]);
  }
  console.log('Sum: ' + sum);
}
task12();

// Задачи на replace
// С помощью replace замените в строке домены вида
// http://site.ru, http://site.com на <a href="http://site.ru">site.ru</a>.
function task13(){
  var str = 'http://site.ru';
  var reg = /http:\/\/([a-z]\.[a-z]{2,3})/g;
  var res = str.replace(reg, '<a href="$0">$1</a>');
  console.log(res);}
task13();

// 14
// С помощью replace замените все повторяющиеся пробелы на один.
function task14(){
  var str = 'dwdw      wdwdw     wdwdw       wdwd';
  var reg = /(\s{2,})/g;
  var res = str.replace(reg, ' ');
  console.log(res);
}
task14();

// 15
// Найдите и удалите все комментарии CSS.
function task15(){
  var reg = /\/\*.+\*\//g;
  var str = '/* wdwadw 222 22f dwddd */ wdwdqdwqd 22ed2e2e2e';
  var res = str.replace(reg, '');
  console.log(res);
}
task15();

// 16
 // Найдите и удалите все комментарии HTML.
function task16(){
  var reg = /<!--.+-->/g;
  var str = '<!-- wdwadw 222 22f dwddd --> wdwdqdwqd 22ed2e2e2e';
  var res = str.replace(reg, '');
  console.log(res);
}
task16();