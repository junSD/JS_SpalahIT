// Задачи на приемы работы с циклами на JavaScript

// На цикл в цикле
// 1
// Выведите на экран таблицу умножения (как в школьной тетради).
document.write('Task-1' + '<br/>');

function getGrid() {

    for (var i = 1; i <= 9; i++) {
        var str = "";
        for ( var j = 1; j <= 9; j++) {
            str += i + "x" + j + "=" + i*j + " ";
        }
        document.write(str + '<br/>');
    }
    return true;
}

document.write('getGrid: ' + getGrid() + '<hr/>');
document.write('<hr/>');

// 2
// С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.

var str = "";
for (var i = 1; i <= 9;  i++) {
    str += i;
}
document.write('str: ' + str + '<hr/>');
document.write('<hr/>');

// 3
// С помощью цикла for сформируйте строку '987654321' и запишите ее в переменную str.

var str = "";
for ( var i = 9; i >= 1; i--) {
    str += i;
}
document.write('str: ' + str + '<hr/>');
document.write('<hr/>');

// 4
// С помощью цикла for сформируйте
// строку '-1-2-3-4-5-6-7-8-9-' и запишите ее в переменную str.
var str1 = "-";
for (var i = 1; i <= 9; i++) {
    str1 += i + "-";
}
document.write('str1: ' + str1 + '<hr/>');
document.write('<hr/>');

// 5
// Нарисуйте пирамиду, как показано на рисунке,
// только у вашей пирамиды должно быть 20 рядов, а не 5

for (var i = 1; i <= 20; i++) {
    var str = "";
    for (var j = 1; j <= i; j++) {
        str += 'x';
    }
    document.write('str: ' + str + '<br/>');
}
document.write('<hr/>');

// 6
// С помощью двух вложенных циклов нарисуйте следующую пирамидку:
for (var i = 1; i <= 9; i++) {
    var str = "";
    for (var j = 1; j <= i; j++) {
        str += i;
    }
    document.write('str: ' + str + '<br/>');
}
document.write('<hr/>');

// 7
// Нарисуйте пирамиду, как показано на рисунке, воспользовавшись циклом for:
for (var i = 1; i <= 20; i++) {
    var str = "";
    for (var j = 1; j <= i; j++) {
        str += 'xx';
    }
    document.write('str: ' + str + '<br/>');
}
document.write('<hr/>');