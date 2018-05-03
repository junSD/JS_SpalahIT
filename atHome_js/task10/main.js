// Задачи на основы работы с пользовательскими функциями в JavaScript

// Простые функции
// 1
// Сделайте функцию, которая возвращает квадрат числа.
// Число передается параметром.
document.write('Task-1' + '<br/>');
function getSqr(num) {
    return num * num;
}
var ms = getSqr(12);

document.write('ms: ' + ms + '<br/>');
document.write('<hr/>');

// 2
// Сделайте функцию, которая возвращает сумму двух чисел.
document.write('Task-2' + '<br/>');
function getSum(a,b) {
    return a + b;
}
var summ = getSum(12,8);
document.write('summ: ' + summ + '<br/>');
document.write('<hr/>');

// 3
// Сделайте функцию, которая отнимает от первого числа
// второе и делит на третье.
document.write('Task-3' + '<br/>');

function getDiff(a,b,c) {
    return (a - b) / c;
}

var diff = getDiff(10,2,4);
document.write('diff: ' + diff + '<br/>');
document.write('<hr/>');

// 4
// Сделайте функцию, которая принимает параметром число от 1 до 7,
// а возвращает день недели на русском языке.
document.write('Task-4' + '<br/>');
function getDay(num) {
    var days = {
        '1' : 'пн',
        '2' : 'вт',
        '3' : 'ср',
        '4' : 'чт',
        '5' : 'пт',
        '6' : 'сб',
        '7' : 'вс',
    }
    return days[num];
}
var currentDay = getDay(3);
document.write('currentDay: ' + currentDay + '<br/>');
document.write('<hr/>');