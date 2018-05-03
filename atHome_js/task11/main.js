// Задачи на приемы работы с флагами на JavaScript

// На флаги
// 1
// Дан массив с числами. Проверьте, что в этом массиве есть число 5.
// Если есть - выведите 'да', а если нет - выведите 'нет'.
document.write('Task-1' + '<br/>');
var arr = [1,2,3,4,5,6,7,8];
var flag = false;
for ( var i = 0; i < arr.length; i++) {
    if ( arr[i] == 5) {
        flag = true;
        break;
    }
}
if (flag) document.write('number 5: Yes ' + '<br/>');
if (!flag) document.write('number 5: No ' + '<br/>');
document.write('<hr/>');

// 2
// Дано число, например 31. Проверьте,
// что это число не делится ни на одно другое число кроме себя самого и единицы.
// То есть в нашем случае нужно проверить,
// что число 31 не делится на все числа от 2 до 30.
// Если число не делится - выведите 'false', а если делится - выведите 'true'.
document.write('Task-2' + '<br/>');
function getNum(num) {
    for(var i = 2; i <= num - 1; i++) {
    if (num % i == 0) {
        return true;
    } else {
        return false;
    }
}
}
var num = 31;
var res = getNum(num);
document.write('res: '+ res + '<br/>');
document.write('<hr/>');

// 3
// Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд.
// Если есть - выведите 'да', а если нет - выведите 'нет'.
document.write('Task-3' + '<br/>');
var arr = [1,2,3,3,5,6,8,8,9,10];
function getArr(arr) {
    var flag = false,
        k = 0,
        s = [];
    for ( var i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i+1]) {
            flag = true;
            k += 1;
            s.push(arr[i], arr[i+1]);
            console.log(s);
            console.log(k);
        }
    }
    var concurrences = {
        'amount' : k,
        'numbers' : s.join("")
    };
    console.log(concurrences);
    return concurrences['numbers'];
}
console.log('getArr(arr): ' + getArr(arr));
document.write('res: '+ getArr(arr) + '<br/>');
document.write('<hr/>');

// res: [object Object]