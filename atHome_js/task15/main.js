// Правильное использование пользовательских функций

// 1
// Сделайте функцию isNumberInRange,
// которая параметром принимает число и проверяет, что оно больше нуля и меньше 10.
// Если это так - пусть функция возвращает true, если не так - false.
document.write('Task-1' + '<br/>');

function isNumberInRange(num) {
    return num > 0 && num < 10;
}

document.write('isNumberInRange: ' + isNumberInRange(9) + '<hr/>');
document.write('<hr/>');

// 2
// Дан массив с числами. Запишите в новый массив только те числа,
// которые больше нуля и меньше 10-ти.
// Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.
document.write('Task-2' + '<br/>');

var arr = [11,2,3,41,5,63,7];

function getArrInRange(arr) {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        if (isNumberInRange(arr[i])) {
            res.push(arr[i]);
        }
    }
    return res;
}
document.write('getArrInRange: ' + getArrInRange(arr) + '<hr/>');
document.write('<hr/>');

// 3
// Сделайте функцию getDigitsSum (digit - это цифра),
// которая параметром принимает целое число и возвращает сумму его цифр.
document.write('Task-3' + '<br/>');

function getDigitsSum(num) {
    var arr = getArr(num);
    var summ = 0;
    for (var i = 0; i < arr.length; i++) {
        summ += Number(arr[i]);
    }
    return summ;
}

function getArr(num) {
    return String(num).split('');
}

document.write('getDigitsSum: ' + getDigitsSum(123) + '<hr/>');
document.write('<hr/>');

// 4
// Найдите все года от 1 до 2018, сумма цифр которых равна 13.
// Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.

document.write('Task-4' + '<br/>');

function getYearSumm13(start, end) {
    var res = [];
    // var k = 0;
    for ( var i = start; i <= end; i++) {
        if (getDigitsSum(i) == 13) {
            res.push(i);
        }
    }
    return res;
}
document.write('getYearSumm13: ' + getYearSumm13(1, 2018) + '<hr/>');
document.write('<hr/>');

// 5
// Сделайте функцию isEven()
// (even - это четный), которая параметром принимает целое число и проверяет:
// четное оно или нет.
// Если четное - пусть функция возвращает true, если нечетное - false.
document.write('Task-5' + '<br/>');

function isEven(num) {
    return num % 2 == 0;
}
document.write('isEven: ' + isEven(2018) + '<hr/>');
document.write('<hr/>');

// 6
// Дан массив с целыми числами. Создайте из него новый массив,
// где останутся лежать только четные из этих чисел.
// Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
document.write('Task-6' + '<br/>');

var arr = [1,2,5,8,11,4,23,15];

function getEven(arr) {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        if (isEven(arr[i])) {
            res.push(arr[i]);
        }
    }
    return res;
}
document.write('getEven: ' + getEven(arr) + '<hr/>');
document.write('<hr/>');

// 7
// Сделайте функцию getDivisors, которая параметром принимает
// число и возвращает массив его делителей (чисел, на которое делится данное число).
document.write('Task-7' + '<br/>');

function getDivisors(num) {
    var res = [];
    for (var i = 1; i <= num; i++) {
        if (num % i == 0) {
            res.push(i);
        }
    }
    return res;
}
document.write('getDivisors: ' + getDivisors(45) + '<hr/>');
document.write('<hr/>');