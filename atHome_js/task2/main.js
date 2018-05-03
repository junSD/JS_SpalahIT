 // Работа с переменными

 // 1
 // Создайте переменную num и присвойте ей
 // значение 3. Выведите значение
 // этой переменной на экран с помощью метода alert
var num = 3;
document.write("Task1" + "<br/>");
document.write(num + "<br/>");
document.write("<hr/>");

// 2
// Создайте переменные a=10 и b=2.
// Выведите на экран их сумму, разность,
// произведение и частное (результат деления).
var a,
    b;
a = 10;
b = 2;
var sum = a + b;
var diff = a - b;
var comp = a * b;
var div = a / b;
document.write("Task2" + "<br/>");
document.write("Summ:" + " a +" + " b = " + sum + "<br/>");
document.write("Diff:" + " a +" + " b = " + diff + "<br/>");
document.write("Comp:" + " a +" + " b = " + comp + "<br/>");
document.write("Div:" + " a +" + " b = " + div + "<br/>");
document.write("<hr/>");

// 3
// Создайте переменные c=15 и d=2.
// Просуммируйте их, а результат присвойте переменной result.
// Выведите на экран значение переменной result.
var c = 15;
var d = 2;
var result = c + d;
document.write("Task3" + "<br/>");
document.write("Result: " + result + "<br/>");
document.write("<hr/>");

// 4
// Создайте переменные a=10, b=2 и c=5.
// Выведите на экран их сумму
var a = 10;
var b = 2;
var c = 5;
var summ = a + b + c;
document.write("Task4" + "<br/>");
document.write("summ: " + summ + "<br/>");
document.write("<hr/>");

// 5
// Создайте переменные a=17 и b=10.
// Отнимите от a переменную b и результат присвойте переменной c.
// Затем создайте переменную d, присвойте ей значение 7.
// Сложите переменные c и d, а результат запишите в переменную result.
// Выведите на экран значение переменной result.
var a = 17;
var b = 10;
var c = a - b;
var d = 7;
var result = c + d;
document.write("Task5" + "<br/>");
document.write("result: " + result + "<br/>");
document.write("<hr/>");

// Работа со строками
// 6
// Создайте переменную str и присвойте ей значение 'Привет, Мир!'.
// Выведите значение этой переменной на экран
var str = 'Привет, Мир!';
document.write("Task6" + "<br/>");
document.write("str: " + str + "<br/>");
document.write("<hr/>");

// 7
// Создайте переменные str1='Привет, ' и str2='Мир!'.
// С помощью этих
// переменных и операции сложения строк выведите
// на экран фразу 'Привет, Мир!'.
var str1 = 'Привет';
var str2 = 'Мир!';
var concat = str1 + ", " + str2;
document.write("Task7" + "<br/>");
document.write("concat: " + concat + "<br/>");
document.write("<hr/>");

// 8
// Создайте переменную name и присвойте ей ваше имя.
// Выведите на экран фразу 'Привет, %Имя%!'.
var name = 'Sergey';
document.write("Task8" + "<br/>");
document.write("Привет, " + name + "<br/>");
document.write("<hr/>");

// 9
// Создайте переменную age и присвойте ей ваш возраст.
// Выведите на экран 'Мне %Возраст% лет!'.
var age = 32;
document.write("Task9" + "<br/>");
document.write("Мне " + age + " лет." + "<br/>");
document.write("<hr/>");

// Функция prompt
// 10
// Спросите имя пользователя с помощью метода prompt.
// Выведите с помощью alert сообщение 'Ваше имя %имя%'
var name = prompt("Enter your name", "");
document.write("Task10" + "<br/>");
document.write("Your name:  " + name + "<br/>");
document.write("<hr/>");

// 11
// Спросите у пользователя число.
// Выведите с помощью alert квадрат этого числа
var number = +prompt("Enter number:", "");
document.write("Task11" + "<br/>");
document.write("Square of a number:  " + number*number + "<br/>");
document.write("<hr/>");

// Обращение к символам строки
// 12
// Создайте переменную str и присвойте ей значение 'abcde'.
// Обращаясь к отдельным символам этой строки выведите
// на экран символ 'a', символ 'c', символ 'e'.
var str = "abcde";
document.write("Task12" + "<br/>");
document.write("A: " + str[0] + "<br/>");
document.write("C: " + str[2] + "<br/>");
document.write("E: " + str[4] + "<br/>");
document.write("<hr/>");

// 13
// Создайте переменную num и присвойте ей значение '12345'.
// Найдите произведение (умножение) цифр этого числа.
var num = "12345";
// var res = num[0]*num[1]*num[2]*num[3]*num[4];
function res(num) {
    res = 1;
    for (var i = 0; i < num.length; i++) {
        res *= num[i];
        console.log(res);
    }
    console.log(res);
    return res;
}
document.write("Task13" + "<br/>");
document.write("res: " + res(num) + "<br/>");
document.write("<hr/>");

// Практика
// 14
// Напишите скрипт,
// который считает количество секунд в часе, в сутках, в месяце.
var sec = 60 * 60;
var day = sec * 24;
var month = day * 30;
document.write("Task14" + "<br/>");
document.write("Sec: " + sec + "<br/>");
document.write("Day: " + day + "<br/>");
document.write("Month: " + month + "<br/>");
document.write("<hr/>");

// 15
// Создайте три переменные - час, минута, секунда.
// С их помощью выведите текущее время в формате 'час:минута:секунда'.
var hour,
    minute,
    second,
    date;
date = new Date();
hour = date.getHours();
minute = date.getMinutes();
second = date.getSeconds();
document.write("Task15" + "<br/>");
document.write("Current time: " + hour + " : " + minute + " : " + second + "<br/>");
document.write("<hr/>");

// 16
// Создайте переменную, присвойте ей число.
// Возведите это число в квадрат. Выведите его на экран.
var m = 15;
var sqr = m * m;
document.write("Task15" + "<br/>");
document.write("sqr: " + sqr + "<br/>");
document.write("<hr/>");

// Работа с присваиванием и декрементами
// 17
// Переделайте этот код так, чтобы в нем использовались операции +=, -=, *=, /=.
// Количество строк кода при этом не должно измениться.
var num = 47;
num += 7;
num -= 18;
num *= 10;
num /= 15;
document.write("Task17" + "<br/>");
document.write("num: " + num + "<br/>");
document.write("<hr/>");

// 18
// Переделайте этот код так, чтобы в нем использовались операции ++ и --.
// Количество строк кода при этом не должно измениться.
var num = 10;
num ++;
num ++;
num --;
document.write("Task18" + "<br/>");
document.write("num: " + num + "<br/>");
document.write("<hr/>");