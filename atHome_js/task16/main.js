// Практика на работу с пользовательскими функциями

// 1
// Дана строка. Сделайте заглавным первый символ каждого слова этой строки.
// Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку,
// делать первый символ
// этой строки заглавным и возвращать обратно строку с заглавной первой буквой.
document.write('Task-1' + '<br/>');

var str = "i must study javascript";

function getUcFirst(str) {
    str = str.split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].substr(0,1).toUpperCase() + str[i].substr(1);
    }
    return str.join(' ');
}

document.write('getUcFirst: ' + getUcFirst(str) + '<hr/>');
document.write('<hr/>');

// 2
// Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.
document.write('Task-2' + '<br/>');

var str = 'var_text_hello';
function ucfirst(str) {
    return str[0].toUpperCase() + str.substr(1);
}

function getTransformText(str) {
    var arr = str.split('_');
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (i == 0) {
            result.push(arr[i]);
        } else {
            result.push(ucfirst(arr[i]));
        }
    }
    var newstr = result.join("");
    return newstr;
}
document.write('getTransformText: ' + getTransformText(str) + '<hr/>');
document.write('<hr/>');

// 3
// Сделайте функцию inArray, которая определяет,
// есть в массиве элемент с заданным текстом или нет.
// Функция первым параметром должна принимать текст элемента, а вторым - массив,
// в котором делается поиск.
// Функция должна возвращать true или false.
document.write('Task-3' + '<br/>');

function inArray (text, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == text) {
            return true;
        }
    }
    return false;
}
var arr = ['fff', 'ff', 'dd', "lll"];
document.write('inArray: ' + inArray('ff', arr) + '<hr/>');
document.write('<hr/>');

// 4
// Дана строка, например, '123456'. Сделайте из нее '214365'.
document.write('Task-4' + '<br/>');

function getReverse(num) {
    num = String(num).split('');
    var res = [];
    for (var i = num.length; i >= 0; i-- ) {
        res.push(num[i]);
    }
    return res.join('');
}
function getStrReverse(str) {
    var res = [];
    for (var i = 0; i < str.length; i += 2) {
        res.push(getReverse(str.substring(i, i + 2)));

    }
    return res.join('');
}
document.write('getStrReverse: ' + getStrReverse('123456') + '<hr/>');
document.write('getReverse: ' + getReverse(13) + '<hr/>');