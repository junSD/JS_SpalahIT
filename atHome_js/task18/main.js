// Задачи на отработку циклов и функций JavaScript

// 1
// Выведите с помощью цикла столбец чисел от 1 до 100.
document.write('Task-1' + '<br/>');

function getListofNumberUp() {
    var str = "";
    for (var i = 1; i <= 100; i++) {
        str += i + '<br/>';
    }
    return str;
}
document.write(getListofNumberUp());
document.write('<hr/>');

// 2
// Выведите с помощью цикла столбец чисел от 100 до 1.
document.write('Task-2' + '<br/>');

function getListofNumberDown() {
    var str = "";
    for (var i = 100; i >= 1; i--) {
        str += i + '<br/>';
    }
    return str;
}
document.write(getListofNumberDown());
document.write('<hr/>');

// 3
// Выведите с помощью цикла столбец четных чисел от 1 до 100.
document.write('Task-3' + '<br/>');

function getListofNumberUpEven() {
    var str = "";
    for (var i = 1; i <= 100; i++) {
        if (i % 2 == 0) {
            str += i + '<br/>';
        }
    }
    return str;
}
document.write(getListofNumberUpEven());
document.write('<hr/>');

// 4
// Заполните массив 10-ю иксами с помощью цикла.
document.write('Task-4' + '<br/>');

function FillAraytoX() {
    var arr = [];
    for (var i = 0; i <= 10; i++) {
        arr[i] = 'x';
    }
    return arr;
}
document.write('arr: ' + FillAraytoX() + '<br/>');
document.write('<hr/>');

// 5
// Заполните массив числами от 1 до 10 с помощью цикла.
document.write('Task-5' + '<br/>');

function FillAraytoNumber() {
    var arr = [];
    for (var i = 1; i <= 10; i++) {
        arr[i-1] = i;
    }
    return arr;
}
document.write('arr: ' + FillAraytoNumber() + '<br/>');
document.write('<hr/>');

// 6
// Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла.
// Дроби округляйте до двух знаков в дробной части.
document.write('Task-6' + '<br/>');
var num = 10;
function getArrayD(num) {
    var arr = [];
    for (var i = 1; i <= num; i++) {
        arr[i-1] = Math.random().toFixed(2);
    }
    return arr;
}
document.write('arr: ' + getArrayD(num) + '<br/>');
document.write('<hr/>');

// 7
// Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.
document.write('Task-7' + '<br/>');
var num = 10;
function getArrayC(num) {
    var arr = [];
    for (var i = 1; i <= num; i++) {
        arr.push(Math.round(Math.random()*10));
    }
    return arr;
}
document.write('arr: ' + getArrayC(num) + '<br/>');
document.write('<hr/>');

// 8
// Дан массив с числами. С помощью цикла выведите только те элементы массива,
// которые больше нуля и меньше 10-ти.
document.write('Task-8' + '<br/>');

function isinterval (num) {
    return num > 0 && num < 10;
}

function getElements(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (isinterval(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
var arr = [1,11,5,8,10,25,43];
document.write('arr: ' + getElements(arr) + '<br/>');
document.write('<hr/>');

// 9
// Дан массив с числами. С помощью цикла проверьте,
// что в нем есть элемент со значением 5.
// Как только будет найден первый такой элемент - выведите 'Есть'
// и оборвите цикл. Если такого элемента нет - ничего не выводите.
document.write('Task-9' + '<br/>');

function checkElement(value, arr) {
    for (var i = 0; i < arr.length; i++) {
        if ( arr[i] == value) {
            document.write('Есть' + '<br/>');
            break;
        }
    }
    return false;
}
var arr = ['1', '2', '5'];
checkElement('5', arr);
document.write('<hr/>');

// 10
// Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.
document.write('Task-10' + '<br/>');

function getSummElementsInArray(arr) {
    var summ = 0;
    for (var i = 0; i < arr.length; i++) {
        summ += arr[i];
    }
    return summ;
}
var arr = [1,11,45,67,87,98,12,43];
document.write('Summ: ' + getSummElementsInArray(arr) + '<br/>');
document.write('<hr/>');

// 11
// Дан массив с числами.
// С помощью цикла найдите сумму квадратов элементов этого массива.
document.write('Task-11' + '<br/>');

function getSummЫquareElementsInArray(arr) {
    var summ = 0;
    for (var i = 0; i < arr.length; i++) {
        summ += Math.pow(arr[i],2);
    }
    return summ;
}
var arr = [1,2,3,4,5,6];
document.write('Summ: ' + getSummЫquareElementsInArray(arr) + '<br/>');
document.write('<hr/>');

// 12
// Дан массив с числами. Найдите
// среднее арифметическое его элементов (сумма элементов, делить на количество).
document.write('Task-12' + '<br/>');

function getAverage(arr) {
    var summ = 0,
        average;
    for (var i = 0; i < arr.length; i++) {
        summ += arr[i];
    }
    average = summ / arr.length;
    return average;
}
var arr = [1,4,7,11,15];
document.write('Summ: ' + getAverage(arr) + '<br/>');
document.write('<hr/>');