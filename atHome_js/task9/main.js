// Практика на комбинации стандартных функций JavaScript

// Отработка стандартных функций JavaScript
// 1
// Дана строка.
// Сделайте заглавным первый символ этой строки не используя цикл.
// Найдите два решения.
document.write('Task-1' + '<br/>');

// var.1
var str = 'show me the money';
var str = str.split(" ");
console.log(str);
var l = str[0][0].toUpperCase();
console.log(l);
var newStr = "";
str[0] = str[0].slice(0,1).toUpperCase() + str[0].slice(1);
str[1] = str[1].slice(0,1).toUpperCase() + str[1].slice(1);
str[2] = str[2].slice(0,1).toUpperCase() + str[2].slice(1);
str[3] = str[3].slice(0,1).toUpperCase() + str[3].slice(1);
newStr = str.join(' ');
console.log(newStr);

document.write('newStr: ' + newStr + '<br/>');
document.write('<hr/>');

// var.2
var str = 'show';
var str = str.slice(0,1).toUpperCase() + str.slice(1,4);
console.log(str);

document.write('str: ' + str + '<br/>');
document.write('<hr/>');

// 2
// Дана строка, например, '123456'.
// Переверните эту строку (сделайте из нее '654321') не используя цикл.
document.write('Task-2' + '<br/>');
var str = '123456';
str = str.split("").reverse().join("");
console.log(str);
document.write('<hr/>');

// 3
// Дано число, например, 3751.
// Отсортируйте цифры в нем (сделайте из него 1357) не используя цикл.
document.write('Task-3' + '<br/>');

var num = 3751;
num = num.toString();
console.log(typeof(num));
console.log(num);

num = num.split("");
var firstN = num.shift();
var lastN = num.pop();
console.log(num);

num = num.reverse();
num.unshift(firstN);
num.unshift(lastN);

var str = +num.join("");
console.log(typeof(str));
document.write('<hr/>');

// 4
// Проверьте, что строка начинается на http://.
document.write('Task-4' + '<br/>');
var str =  'http://ps.work.ru';
if (str.slice(0,7   ) == 'http://') {
    document.write('Yes' + '<br/>');
} else {
    document.write('No' + '<br/>');
}
document.write('<hr/>');

// 5
// Проверьте, что строка заканчивается на .html
document.write('Task-5' + '<br/>');
 var str = 'what.html';

 if (str.substr(-5) == '.html') {
    document.write('Yes' + '<br/>');
} else {
    document.write('No' + '<br/>');
}
document.write('<hr/>');
