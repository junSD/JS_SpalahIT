// Задачи на функции работы с массивами в JavaScript

// Работа с concat
// 1
// Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
document.write('Task-1' + '<br/>');

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr = arr1.concat(arr2);

document.write('arr: ' + arr + '<br/>');
document.write('<hr/>');

// Работа с reverse
// 2
// Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
document.write('Task-2' + '<br/>');

var arr1 = [1, 2, 3];
var arr = arr1.reverse();

document.write('arr: ' + arr + '<br/>');
document.write('<hr/>');

// Работа с push, unshift
// 3
// Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
document.write('Task-3' + '<br/>');

var arr1 = [1, 2, 3];
arr1.push(4,5,6);
document.write('arrPush: ' + arr1 + '<br/>');
document.write('<hr/>');

// 4
// Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
document.write('Task-4' + '<br/>');

var arr2 = [1, 2, 3];
arr2.unshift(4,5,6);
document.write('arrPush: ' + arr2 + '<br/>');
document.write('<hr/>');

// Работа с shift, pop
// 5
// Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент
document.write('Task-5' + '<br/>');

var arr = ['js', 'css', 'jq'];
var arrFirst = arr.shift();

document.write('arrFirst: ' + arrFirst + '<br/>');
document.write('<hr/>');

// 6
// Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
document.write('Task-6' + '<br/>');

var arr = ['js', 'css', 'jq'];
var arrLast = arr.pop();

document.write('arrLast: ' + arrLast + '<br/>');
document.write('<hr/>');

// Работа с slice
// 7
// Дан массив [1, 2, 3, 4, 5].
// С помощью метода slice запишите в новый элементы [1, 2, 3].
document.write('Task-7' + '<br/>');
var arr = [1, 2, 3, 4, 5];
var arrSlice = arr.slice(0, 3);

document.write('arrSlice: ' + arrSlice + '<br/>');
document.write('<hr/>');

// 8
// Дан массив [1, 2, 3, 4, 5].
// С помощью метода slice запишите в новый элементы [4, 5].
document.write('Task-8' + '<br/>');
var arr = [1, 2, 3, 4, 5];
var arrSlice = arr.slice(3, 5);

document.write('arrSlice: ' + arrSlice + '<br/>');
document.write('<hr/>');

// Работа с splice
// 9
// Дан массив [1, 2, 3, 4, 5].
// С помощью метода splice преобразуйте массив в [1, 4, 5].
document.write('Task-9' + '<br/>');
var arr = [1, 2, 3, 4, 5];
var arrSplice = arr.splice(1, 2);

document.write('arr: ' + arr + '<br/>');
document.write('<hr/>');

// 10
// Дан массив [1, 2, 3, 4, 5].
// С помощью метода splice запишите в новый массив элементы [2, 3, 4].
document.write('Task-10' + '<br/>');
var arr = [1, 2, 3, 4, 5];
var arrSplice = arr.splice(1, 3);

document.write('arrSplice: ' + arrSplice + '<br/>');
document.write('<hr/>');

// 11
// Дан массив [1, 2, 3, 4, 5].
// С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
document.write('Task-11' + '<br/>');
var arr = [1, 2, 3, 4, 5];
arr.splice(3, 0, 'a', 'b', 'c');

document.write('arr: ' + arr + '<br/>');
document.write('<hr/>');

// 12
// Дан массив [1, 2, 3, 4, 5].
// С помощью метода splice сделайте из него
// массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
document.write('Task-12' + '<br/>');
var arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, 'a', 'b');
arr.splice(6,0,'c');
arr.splice(8,0,'e');

document.write('arr: ' + arr + '<br/>');
document.write('<hr/>');

// Работа с sort
// 13
// Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
document.write('Task-13' + '<br/>');

var arr = [3, 4, 1, 2, 7, 10];
function sortAtr(a,b) {
    if (a < b) {
        return -1;
    }
    if ( a > b) {
        return 1;
    }
    if (a == b) {
        return 0;
    }
}
arr.sort(sortAtr);
document.write('arr: ' + arr + '<br/>');
document.write('<hr/>');

// Работа с Object.keys
// 14
// Дан объект {js:'test', jq: 'hello', css: 'world'}.
// Получите массив его ключей.
document.write('Task-14' + '<br/>');

var obj = {js:'test', jq: 'hello', css: 'world'};
var objKey = Object.keys(obj);
document.write('objKey: ' + objKey + '<br/>');
document.write('<hr/>');