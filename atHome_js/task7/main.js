// Задачи на функции работы со строками в JavaScript

// Работа с регистром символов
// 1
// Дана строка 'js'. Сделайте из нее строку 'JS'.
document.write('Task-1' + '<br/>');

var str = 'js';
var strNew = str.toUpperCase();
document.write(str + '<br/>');
document.write(strNew + '<br/>');
document.write('<hr/>');

// 2
// Дана строка 'JS'. Сделайте из нее строку 'js'
document.write('Task-2' + '<br/>');

var str = 'JS';
var strNew = str.toLowerCase();
document.write(str + '<br/>');
document.write(strNew + '<br/>');
document.write('<hr/>');

// Работа с length, substr, substring, slice. Работа с indexOf
// 3
// Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.
document.write('Task-3' + '<br/>');

var str = 'я учу javascript!';
var strLength = str.length;
document.write(strLength + '<br/>');
document.write('<hr/>');

// 4
// Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу'
// и слово 'javascript' тремя разными
// способами (через substr, substring, slice).
document.write('Task-4' + '<br/>');
var str = 'я учу javascript!';

var firstWord = str.indexOf('учу');
var secondWord = str.indexOf('javascript');

var strSubstr1 = str.substr(firstWord, 3);
var strSubstr2 = str.substr(secondWord, 10);
var strsubstring1 = str.substring(firstWord, 5);
var strsubstring2 = str.substring(secondWord, 16);
var strslice1 = str.slice(firstWord, 5);
var strslice2 = str.slice(secondWord, 16);

document.write("substr: " + strSubstr1 + '<br/>');
document.write("substr: " + strSubstr2 + '<br/>');
document.write("substring: " + strsubstring1 + '<br/>');
document.write("substring: " + strsubstring2 + '<br/>');
document.write("slice: " + strslice1 + '<br/>');
document.write("slice: " + strslice2 + '<br/>');
document.write('<hr/>');

// 5
// Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.
document.write('Task-5' + '<br/>');
var str = 'я учу javascript!';
var pos = str.indexOf('учу');

document.write("pos: " + pos + '<br/>');
document.write('<hr/>');

// 6
// Дана переменная str, в которой хранится какой-либо текст.
// Реализуйте обрезание длинного текста по следующему принципу:
// если количество символов этого текста больше заданного в переменной n,
// то в переменную result запишем первые n символов строки str и добавим
// в конец троеточие '...'.
// В противном случае в переменную result запишем содержимое переменной str.
document.write('Task-6' + '<br/>');
var str = 'pokemon';
var n = 4;
var strLength = str.length;

if (strLength > n) {
  var resultSlice = str.slice(0, n);
  var result = resultSlice.replace(resultSlice, resultSlice + "...")
} else {
  result = str;
}
document.write("result: " + result + '<br/>');
document.write('<hr/>');

// Работа с replace
// 7
// Дана строка 'Я-учу-javascript!'.
// Замените все дефисы на '!' с помощью глобального поиска и замены.
document.write('Task-7' + '<br/>');

var str = 'Я-учу-javascript!';
var strChange = str.replace(/-/g, "!");

document.write("strChange: " + strChange + '<br/>');
document.write('<hr/>');

// Работа с split
// 8
// Дана строка 'я учу javascript!'. С помощью метода split
// запишите каждое слово этой строки в отдельный элемент массива.
document.write('Task-8' + '<br/>');

var str = 'я учу javascript!';
var strArr = str.split(' ');
document.write("strArr: " + strArr + '<br/>');
document.write('<hr/>');

// 9
// Дана строка 'я учу javascript!'. С помощью метода split
// запишите каждый символ этой строки в отдельный элемент массива.
document.write('Task-9' + '<br/>');
var str = 'я учу javascript!';

var strArr = str.split('');
document.write("strArr: " + strArr + '<br/>');
document.write('<hr/>');

// 10
// В переменной date лежит дата в формате '2025-12-31'.
// Преобразуйте эту дату в формат '31.12.2025'.
document.write('Task-10' + '<br/>');

var date = '2025-12-31';
var arrDate = date.split('-');
// var arrDateInv = arrDate.reverse();
// var resDate = arrDateInv.join('.');
var resDate = arrDate[2] + '.' + arrDate[1] + '.' + arrDate[0];
console.log(arrDate);
document.write("resDate: " + resDate + '<br/>');
document.write('<hr/>');

// Работа с join
// 11
// Дан массив ['я', 'учу', 'javascript', '!'].
// С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.
document.write('Task-11' + '<br/>');

var arr = ['я', 'учу', 'javascript', '!'];
var arrJoin = arr.join('+');
document.write("arrJoin: " + arrJoin + '<br/>');
document.write('<hr/>');


// Задачи
// 12
// Преобразуйте первую букву строки в верхний регистр.
document.write('Task-12' + '<br/>');
var str = 'i study JavaScript';
var letterUp = str.split('')[0].toUpperCase();

var strChange = str.replace(str[0], letterUp);
document.write("strChange: " + strChange + '<br/>');
document.write('<hr/>');

// 13
// Преобразуйте первую букву каждого слова строки в верхний регистр.

document.write('Task-13' + '<br/>');
var str = 'i study javaScript';
var arr = str.split(' ');
console.log(arr);
for ( var i = 0; i < arr.length; i++) {
  arr[i] = arr[i].slice(0,1).toUpperCase() + arr[i].slice(1);
}
arr = arr.join(' ');
// console.log('arr: ' + typeof(arr));
document.write("arr: " + arr + '<br/>');
document.write('<hr/>');

// 14
// Преобразуйте строку 'var_test_text' в 'varTestText'.
// Скрипт, конечно же, должен работать с любыми аналогичными строками.
var str = 'var_test_text';
var arr = str.split('_');
console.log(arr);
for ( var i = 0; i < arr.length; i++) {
  if (i == 0) {
    arr[i] = arr[i];
  } else {
  arr[i] = arr[i].slice(0,1).toUpperCase() + arr[i].slice(1);
  }
}
arr = arr.join('');
document.write("arr: " + arr + '<br/>');
document.write('<hr/>');