// Продвинутая работа с пользовательскими функциями

// 1
// Дан массив с числами.
// Выведите последовательно его элементы используя рекурсию и не используя цикл.
document.write('Task-1' + '<br/>');
var arr = [1,2,3,4,5,6];
function getElements(arr) {
    var el = arr.shift();
    document.write("El: " + el + '<br/>');
    if (arr.length != 0) {
        getElements(arr);
    }
}
getElements(arr);

document.write('<hr/>');

// 2
// Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять
// сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).

var num = 12385645454545454;
var g = [];
function getSumm(num) {
    var summ = 0;
    num = num || 1234;
    var arr = String(num).split("");
    console.log('num: ' + num);
    for (var i = 0; i < arr.length; i++) {
        summ += Number(arr[i]);
        console.log('summ: ' + summ);
    }
    g.push(summ);
    console.log('summ1: ' + summ);
    console.log('g: ' + g);
    if (summ > 9) {
        getSumm(summ);
    }
    return g;
}
document.write('summ: ' + getSumm(num) + '<hr/>');
