// Задачи на конструкции if-else, switch-case в JavaScrip

// Работа с if-else

// 1
// Если переменная a равна нулю, то выведите 'Верно',
// иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
var a = 1;
var a = 0;
var a = -3;
document.write('Task-1' + '<br/>');
if (a == 0) {
    document.write('Верно' + '<br/>');
} else {
    document.write('Неверно' + '<br/>');
}
document.write('<hr/>');

// 2
// Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'.
// Проверьте работу скрипта при a, равном 1, 0, -3.
var a = 1;
var a = 0;
var a = -3;
document.write('Task-2' + '<br/>');
if (a > 0) {
    document.write('Верно' + '<br/>');
} else {
    document.write('Неверно' + '<br/>');
}
document.write('<hr/>');

// 3
// Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'.
// Проверьте работу скрипта при a, равном 1, 0, -3.
var a = 1;
var a = 0;
var a = -3;
document.write('Task-3' + '<br/>');
if (a < 0) {
    document.write('Верно' + '<br/>');
} else {
    document.write('Неверно' + '<br/>');
}
document.write('<hr/>');

// 4
// Если переменная a больше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'.
// Проверьте работу скрипта при a, равном 1, 0, -3.
var a = 1;
var a = 0;
var a = -3;
document.write('Task-4' + '<br/>');
if (a >= 0) {
    document.write('Верно' + '<br/>');
} else {
    document.write('Неверно' + '<br/>');
}
document.write('<hr/>');

// 5
// Если переменная a меньше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'.
// Проверьте работу скрипта при a, равном 1, 0, -3.
var a = 1;
var a = 0;
var a = -3;
document.write('Task-5' + '<br/>');
if (a <= 0) {
    document.write('Верно' + '<br/>');
} else {
    document.write('Неверно' + '<br/>');
}
document.write('<hr/>');

// 6
// Если переменная a не равна нулю, то выведите 'Верно', иначе выведите 'Неверно'.
// Проверьте работу скрипта при a, равном 1, 0, -3.
var a = 1;
var a = 0;
var a = -3;
document.write('Task-6' + '<br/>');
if (a != 0) {
    document.write('Верно' + '<br/>');
} else {
    document.write('Неверно' + '<br/>');
}
document.write('<hr/>');

// 7
// Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'.
// Проверьте работу скрипта при a, равном 'test', 'тест', 3.
var a = 'test';
var a = 'тест';
var a = 3;
document.write('Task-7' + '<br/>');
if (a === 'test') {
    document.write('Верно' + '<br/>');
} else {
    document.write('Неверно' + '<br/>');
}
document.write('<hr/>');

// 8
// Если переменная a равна '1' и по значению и по типу, то выведите 'Верно',
// иначе выведите 'Неверно'.
// Проверьте работу скрипта при a, равном '1', 1, 3.

var a = '1';
var a = 1;
var a = 3;
document.write('Task-8' + '<br/>');
if (a === '1') {
    document.write('Верно' + '<br/>');
} else {
    document.write('Неверно' + '<br/>');
}
document.write('<hr/>');

// Работа с логическими переменными
// 9
// Если переменная test равна true, то выведите 'Верно',
// иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false.
// Напишите два варианта скрипта - с короткой записью и с длинной.
var test = true;
var test = false;
document.write('Task-9' + '<br/>');
// 9.1
if (test == true) {
    document.write('Верно' + '<br/>');
} else {
    document.write('Неверно' + '<br/>');
}
// 9.2
if (test) {
        document.write('Верно' + '<br/>');
} else {
    document.write('Неверно' + '<br/>');
}
document.write('<hr/>');

// 10
// Если переменная test не равна true, то выведите 'Верно',
// иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false.
// Напишите два варианта скрипта - с короткой записью и с длинной.
var test = true;
var test = false;
document.write('Task-10' + '<br/>');
// 9.1
if (test != true) {
    document.write('Верно' + '<br/>');
} else {
    document.write('Неверно' + '<br/>');
}
// 9.2
if (!test) {
        document.write('Верно' + '<br/>');
} else {
    document.write('Неверно' + '<br/>');
}
document.write('<hr/>');

// Работа с && (и) и || (или)
// 11
// Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно',
// иначе выведите 'Неверно'.
// Проверьте работу скрипта при a, равном 5, 0, -3, 2.
var a = 5;
var a = 0;
var a = -3;
var a = 2;
document.write('Task-11' + '<br/>');
if (a >= 0 && a < 5) {
    document.write('Верно' + '<br/>');
}  else {
    document.write('Неверно' + '<br/>');
}
document.write('<hr/>');

// 12
// Если переменная a равна нулю или равна двум, то прибавьте к ней 7,
// иначе поделите ее на 10. Выведите новое значение переменной на экран.
// Проверьте работу скрипта при a, равном 5, 0, -3, 2.
var a = 5;
var a = 0;
var a = -3;
var a = 2;
document.write('Task-12' + '<br/>');
if (a == 0 || a == 2) {
    a += 7;
    document.write('a = ' + a + '<br/>');
}  else {
    a /= 10;
    document.write('a = ' + a + '<br/>');
}
document.write('<hr/>');

// 13
// Если переменная a равна или меньше 1, а переменная b больше или равна 3,
// то выведите сумму этих переменных, иначе выведите их разность (результат вычитания).
// Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.
var a = 1;
var b = 3;
var a = 0;
var b = 6;
var a = 3;
var b = 5;
document.write('Task-13' + '<br/>');
if (a <= 1 && b >= 3) {
    var s = a + b;
    document.write('s = ' + s + '<br/>');
}  else {
    var d = a - b;
    document.write('d = ' + d + '<br/>');
}
document.write('<hr/>');

// 14
// Если переменная a больше 2-х и меньше 11-ти,
// или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно',
// в противном случае выведите 'Неверно'.

document.write('Task-14' + '<br/>');
if ((a > 2 && a < 11) || (b >= 6 && b < 14) ) {
    document.write('Верно' + '<br/>');
}  else {
    document.write('Неверно' + '<br/>');
}
document.write('<hr/>');

// На switch-case
// 15
// Переменная num может принимать 4 значения: 1, 2, 3 или 4.
// Если она имеет значение '1', то в переменную result запишем 'зима',
// если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.
var num;
num = 2;
document.write('Task-15' + '<br/>');
switch (num) {
    case 1:
        var result = 'зима';
        break;
    case 2:
        var result = 'весна';
        break;
    case 3:
        var result = 'лето';
        break;
    case 4:
        var result = 'осень';
        break;
}
document.write('result: ' + result + '<br/>');
document.write('<hr/>');

// Задачи
// 16
// В переменной day лежит какое-то число из интервала от 1 до 31.
// Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
var day = 9;
document.write('Task-16' + '<br/>');
if (day >= 1 && day <= 10) {
    document.write('первая декада' + '<br/>');
}
if (day >= 11 && day <= 20) {
    document.write('вторая декада' + '<br/>');
}
if (day >= 21 && day <= 31) {
    document.write('третья декада' + '<br/>');
}
document.write('<hr/>');

// 17
// В переменной month лежит какое-то число из интервала от 1 до 12.
// Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
document.write('Task-17' + '<br/>');
var month = 3;
if (month == 12 || month <= 2) {
    document.write('зима' + '<br/>');
}
if (month >= 3 && month <= 5) {
    document.write('весна' + '<br/>');
}
if (month >= 6 && month <= 8) {
    document.write('лето' + '<br/>');
}
if (month >= 9 && month <= 11) {
    document.write('осень' + '<br/>');
}
document.write('<hr/>');

// 18
// Дана строка, состоящая из символов, например, 'abcde'.
// Проверьте, что первым символом этой строки является буква 'a'.
// Если это так - выведите 'да', в противном случае выведите 'нет'.
document.write('Task-18' + '<br/>');
var str = 'abcde';
if (str[0] == "a") {
    document.write('Да' + '<br/>');
} else {
    document.write('Нет' + '<br/>');
}
document.write('<hr/>');

// 19
// Дана строка с цифрами, например, '12345'.
// Проверьте, что первым символом этой строки является цифра 1, 2 или 3.
// Если это так - выведите 'да', в противном случае выведите 'нет'.

document.write('Task-19' + '<br/>');
var str = '12345';
if (str[0] == 1 || str[0] == 2 || str[0] == 3) {
    document.write('Да' + '<br/>');
} else {
    document.write('Нет' + '<br/>');
}
document.write('<hr/>');

// 20
// Дана строка из 3-х цифр. Найдите сумму этих цифр.
// То есть сложите как числа первый символ строки, второй и третий.

document.write('Task-20' + '<br/>');
var str = '123';
var summ = +str[0] + +str[1] + +str[2];
document.write('summ: ' + summ + '<br/>');
document.write('<hr/>');

// 21
// Дана строка из 6-ти цифр.
// Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр.
// Если это так - выведите 'да', в противном случае выведите 'нет'.
document.write('Task-21' + '<br/>');
var str = '123456';
var summ1,
    summ2;
summ1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
summ2 = Number(str[3]) + Number(str[4]) + Number(str[5]);

if (summ1 == summ2) {
    document.write('Да' + '<br/>');
} else {
    document.write('Нет' + '<br/>');
}
document.write('<hr/>');