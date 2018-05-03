// Задачи на циклы while, for в JavaScript

// Циклы while и for

// 1
// Выведите столбец чисел от 1 до 100
document.write('Task-1' + '<br/>');

var i = 1;
while (i <= 100) {
    document.write(i + '<br/>');
    i++;
}
document.write('<hr/>');

for (var i = 1; i <= 100; i++) {
    document.write(i + '<br/>');
}
document.write('<hr/>');

// 2
// Выведите столбец чисел от 11 до 33

document.write('Task-2' + '<br/>');

var i = 11;
while (i <= 33) {
    document.write(i + '<br/>');
    i++;
}
document.write('<hr/>');

for (var i = 1; i <= 33; i++) {
    document.write(i + '<br/>');
}
document.write('<hr/>');

// 3
// Выведите столбец четных чисел в промежутке от 0 до 100.
document.write('Task-3' + '<br/>');
var i = 0;
while (i <= 100) {
    if (i % 2 == 0) {
        document.write(i + '<br/>');
    }
    i++;
}
document.write('<hr/>');

for (var i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        document.write(i + '<br/>');
    }
}
document.write('<hr/>');

// 4
// С помощью цикла найдите сумму чисел от 1 до 100
document.write('Task-4' + '<br/>');

var summ = 0;
var i = 1;
while ( i <= 100) {
    summ += i;
    i++;
}
document.write(summ + '<br/>');
document.write('<hr/>');

res = 0;
for (var i = 1; i <= 100; i++) {
    res += i;
}
document.write(res + '<br/>');
document.write('<hr/>');

// Работа с for для массивов
// 5
// Дан массив с элементами [1, 2, 3, 4, 5].
// С помощью цикла for выведите все эти элементы на экран.
document.write('Task-5' + '<br/>');
var arr = [1, 2, 3, 4, 5];
for (i = 0; i < arr.length; i++) {
    document.write(arr[i] + '<br/>');
}
document.write('<hr/>');

// 6
// Дан массив с элементами [1, 2, 3, 4, 5]. С помощью
// цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.
document.write('Task-6' + '<br/>');

var result = 0;
var arr = [1, 2, 3, 4, 5];

for (i = 0; i < arr.length; i++) {
    result += i;
}
document.write(result + '<br/>');
document.write('<hr/>');

// Работа с for-in
// 7
// Дан объект obj.
// С помощью цикла for-in выведите на экран ключи и элементы этого объекта.
document.write('Task-7' + '<br/>');
var obj = {green: 'зеленый', red: 'красный', blue: 'голубой'};

for (x in obj) {
    document.write('Keys: ' + x + '<br/>');
    document.write('Values: ' + obj[x] + '<br/>');
}
document.write('<hr/>');

// 8
// Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'.
// С помощью цикла for-in выведите на экран строки такого формата:
// 'Коля - зарплата 200 долларов.'
document.write('Task-8' + '<br/>');
var obj = {
    'Коля' : "200",
    'Вася' : "300",
    'Петя' : "400"
};
for (key in obj) {
    document.write(key + " - зарплата " + obj[key] + " долларов" + '<br/>');
}
document.write('<hr/>');

// Задачи
// 9
// Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if
// выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.
document.write('Task-9' + '<br/>');

var arr = [2,5,9,15,0,4];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 3 && arr[i] < 10 ) {
        document.write(arr[i] + '<br/>');
    }
}
document.write('<hr/>');

// 10
// Дан массив с числами. Числа могут быть положительными и отрицательными.
// Найдите сумму положительных элементов массива.
document.write('Task-10' + '<br/>');
var arr = [2, -10, 15, 18, -3, -6, 3, 10];
var result = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        result += arr[i];
    }
}
document.write(result + '<br/>');
document.write('<hr/>');

// 11
// Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10.
// С помощью цикла for и оператора if проверьте есть ли в массиве
// элемент со значением, равным 4. Если есть
// - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.
document.write('Task-11' + '<br/>');

var arr = [1, 2, 5, 9, 4, 13, 4, 10];
for (i = 0; i < arr.length; i++) {
    if (arr[i] == 4) {
       document.write('Есть' + '<br/>');
       break;
    }
}
document.write('<hr/>');

// 12
// Дан массив числами, например: [10, 20, 30, 50, 235, 3000].
// Выведите на экран только те числа из массива,
// которые начинаются на цифру 1, 2 или 5
document.write('Task-12' + '<br/>');

var arr = ['10', '20', '30', '50', '235', '3000'];
for (i = 0; i < arr.length; i++) {
    if (arr[i][0] == '1' || arr[i][0] == '2' || arr[i][0] == '5') {
        document.write(arr[i] + '<br/>');
    }
}
document.write('<hr/>');

// 13
// Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9.
// С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'
document.write('Task-13' + '<br/>');
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var str = '-';
for (var i = 0; i < arr.length; i++) {
    str += arr[i] + '-';
}
document.write(str + '<br/>');
document.write('<hr/>');

// 14
// Составьте массив дней недели.
// С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.
document.write('Task-14' + '<br/>');
var arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

for (var i = 0; i < arr.length; i++) {
    if ( i <= 4) {
        document.write(arr[i] + '<br/>');
    } else {
        document.write('<b>' + arr[i] + '</b>' + '<br/>');
    }
}
document.write('<hr/>');

// 15
// Составьте массив дней недели. С помощью цикла for выведите все дни недели,
// а текущий день выведите курсивом. Текущий день должен храниться в переменной day.
document.write('Task-14' + '<br/>');
var arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
var day = 0;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] == arr[day]) {
        document.write('<i>' + arr[i] + '</i>' + '<br/>');
    } else {
        document.write(arr[i] + '<br/>');
    }
};
document.write('<hr/>');

// 16
// Дано число n=1000. Делите его на 2 столько раз,
// пока результат деления не станет меньше 50.
// Какое число получится? Посчитайте количество итераций, необходимых
// для этого (итерация - это проход цикла), и запишите его в переменную num.
document.write('Task-14' + '<br/>');
var n = 1000;
var i = 0;
while (n > 50) {
    n = n / 2;
    console.log(n);
    ++i;
}
document.write(i + '<br/>');
document.write(n + '<br/>');