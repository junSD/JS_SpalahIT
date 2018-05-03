// Приемы работы с логическими значениями

// 1
// Сделайте функцию, которая параметрами принимает 2 числа.
// Если эти числа равны - пусть функция вернет true, а если не равны - false.
document.write('Task-1' + '<br/>');

function getNum(a,b) {
    return a == b;
}
var a = 4,
    b = 5;
document.write('getNum: ' + getNum(a,b) + '<hr/>');
document.write('<hr/>');

// 2
// Сделайте функцию, которая параметрами принимает 2 числа.
// Если их сумма больше 10 - пусть функция вернет true, а если нет - false.
document.write('Task-2' + '<br/>');

function getNum(a,b) {
    return a + b > 10;
}
var a = 4,
    b = 5;
document.write('getNum: ' + getNum(a,b) + '<hr/>');
document.write('<hr/>');

// 3
// Сделайте функцию, которая параметром принимает число и проверяет
// - отрицательное оно или нет.
// Если отрицательное - пусть функция вернет true, а если нет - false.
document.write('Task-3' + '<br/>');

function getNum(a) {
    return a < 0;
}

var a = -4;
document.write('getNum: ' + getNum(a) + '<hr/>');
document.write('<hr/>');