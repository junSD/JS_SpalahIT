// Задачи на приемы работы с массивами на JavaScript

// Заполнение массивов
// 1
// Заполните массив следующим образом: в первый элемент запишите 'x',
// во второй 'xx', в третий 'xxx' и так далее.
document.write('Task-1' + '<br/>');

function getArr(sign, amount) {
    var arr = [];
    for (var i = 1; i <= amount; i++) {
        str = '';
        for (var j = 1; j <= i; j++) {
            str += sign;
        }
        arr[i-1] = str;
    }
    return arr;
}

document.write('getArr: ' + getArr('x', 10) + '<hr/>');
document.write('<hr/>');

// 2
// Заполните массив следующим образом:
// в первый элемент запишите '1', во второй '22', в третий '333' и так далее.
document.write('Task-2' + '<br/>');

function getArrOfNumber(amount) {
    var arr = [];
    for (var i = 1; i <= amount; i++) {
        str = '';
        for (var j = 1; j <= i; j++) {
            str += i;
        }
        arr[i-1] = str;
    }
    return arr;
}

document.write('getArrOfNumber: ' + getArrOfNumber(10) + '<hr/>');
document.write('<hr/>');

// 3
// Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями.
// Первым параметром функция принимает значение, которым заполнять массив,
// а вторым - сколько элементов должно быть в массиве.
// Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x']
document.write('Task-3' + '<br/>');

function arrayFill(value, amount) {
    var arr = [];
    for (var i = 0; i <= amount; i++) {
        arr[i] = value;
    }
    return arr;
}
document.write('arrayFill: ' + arrayFill('x', 5) + '<hr/>');
document.write('<hr/>');

// 4
// Дан массив с числами. Узнайте сколько
// элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
document.write('Task-4' + '<br/>');

var arr = [1,2,3,4,5,6,7,8];

function getAmount(arr) {
    var k = 0;
    var summ = 0;
        for (var i = 0; i < arr.length; i++) {
        summ += parseInt(arr[i]);
        if (summ <= 10) {
            k++;
        } else {
            break;
        }
        console.log(summ);
        console.log(k);
        }
    return k;
}
document.write('k: ' + getAmount(arr) + '<hr/>');
document.write('<hr/>');

// Переворот массива
// 5
// Дан массив с числами.
// Не используя метода reverse переверните его элементы в обратном порядке.
document.write('Task-5' + '<br/>');

var arr = [1,2,3,4,5,6,7,8,9,10];
function getReverse(arr) {
    var result = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}
document.write('getReverse: ' + getReverse(arr) + '<hr/>');
document.write('<hr/>');

// Многомерные массивы
// 6
// Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]].
// Найдите сумму элементов этого массива.
// Массив, конечно же, может быть произвольным.
document.write('Task-6' + '<br/>');
var arr = [[1, 2, 3], [4, 5], [6]];

function getSumofArray1(arr) {
    var summ = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            summ += arr[i][j];
        }
    }
    return summ;
}

document.write('getSumofArray1: ' + getSumofArray1(arr) + '<hr/>');
document.write('<hr/>');

// 7
// Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]].
// Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
document.write('Task-7' + '<br/>');

var arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function getSumofArray2(arr) {
    var summ = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            for (var k = 0; k < arr[i][j].length; k++) {
               summ += arr[i][j][k];
            }
        }
    }
    return summ;
}
document.write('getSumofArray2: ' + getSumofArray2(arr) + '<hr/>');
document.write('<hr/>');