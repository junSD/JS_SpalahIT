// Задачи на математические функции JavaScript

// Работа с %

// 1
// Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.
document.write('Task-1' + '<br/>');

var a = 10;
var b = 3;

var res = a % b;
document.write(res + '<br/>');
document.write('<hr/>');

// 2
// Даны переменные a и b. Проверьте,
// что a делится без остатка на b. Если это так
// - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком'
// и остаток от деления.
document.write('Task-2' + '<br/>');
var a, b;
a = 8;
b = 5;
if ( a % b == 0) {
    document.write('Делиться' + '<br/>');
    var resD = a / b;
    document.write('Результат деления: ' + resD + '<br/>');
} else {
   document.write('Делится с остатком' + '<br/>');
   var resO = a % b;
   document.write('Остаток от деления: ' + resO + '<br/>');
}
document.write('<hr/>');

// Работа со степенью и корнем
// 3
// Возведите 2 в 10 степень. Результат запишите в переменную st.
document.write('Task-3' + '<br/>');
var a = 2;
var st = Math.pow(a, 10);
document.write(st + '<br/>');
document.write('<hr/>');

// 4
// Найдите квадратный корень из 245
document.write('Task-4' + '<br/>');
var a = 245;
var sqr = Math.sqrt(a);
document.write(sqr + '<br/>');
document.write('<hr/>');

// 5
// Дан массив с элементами 4, 2, 5, 19, 13, 0, 10.
// Найдите квадратный корень из суммы кубов его элементов.
// Для решения воспользуйтесь циклом for.
document.write('Task-5' + '<br/>');
var arr = [4, 2, 5, 19, 13, 0, 10];
var res = 0;
for (var i = 0; i < arr.length; i++) {
    res += Math.pow(arr[i], 3);
    console.log(res);
}
var sqr = Math.sqrt(res);
document.write(sqr + '<br/>');
document.write('<hr/>');

// Работа с функциями округления
// 6
// Найдите квадратный корень из 379.
// Результат округлите до целых, до десятых, до сотых.
document.write('Task-6' + '<br/>');
var a = 379;
var aSqrt = Math.sqrt(a);
var aRound = Math.round(Math.sqrt(a));
var aCeil = Math.ceil(Math.sqrt(a));
var afloor = Math.floor(Math.sqrt(a));
var aFixed = (Math.sqrt(a)).toFixed(2);
var aPrecision = (Math.sqrt(a)).toPrecision(5);
document.write('aSqrt: ' + aSqrt + '<br/>');
document.write('aRound: ' + aRound + '<br/>');
document.write('aCeil: ' + aCeil + '<br/>');
document.write('afloor: ' + afloor + '<br/>');
document.write('aFixed: ' + aFixed + '<br/>');
document.write('aPrecision: ' + aPrecision + '<br/>');
document.write('<hr/>');

// 7
// Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны,
// запишите результаты округления в объект с ключами 'floor' и 'ceil'.
document.write('Task-7' + '<br/>');
var a = 587;
var aSqrt = Math.sqrt(a);
var aFloor = Math.floor(aSqrt);
var aCeil = Math.ceil(aSqrt);
var obj = {
    'floor': aFloor,
    'ceil': aCeil
};
document.write("obj['floor']: "  + obj['floor'] + '<br/>');
document.write("obj['ceil']: "+ obj['ceil'] + '<br/>');
document.write('<hr/>');

// Нахождение максимального и минимального числа
// 8
// Даны числа 4, -2, 5, 19, -130, 0, 10.
// Найдите минимальное и максимальное число.
document.write('Task-8' + '<br/>');
var min = Math.min(4, -2, 5, 19, -130, 0, 10);
var max = Math.max(4, -2, 5, 19, -130, 0, 10);

var arr = [4, -2, 5, 19, -130, 0, 10];
var minArr = Math.min.apply(null, arr);
var maxArr = Math.max.apply(null, arr);

document.write("min: "  + min + '<br/>');
document.write("max: "  + max + '<br/>');
document.write("minArr: "  + minArr + '<br/>');
document.write("maxArr: "  + maxArr + '<br/>');
document.write('<hr/>');

// Работа с рандомом
// 9
// Выведите на экран случайное целое число от 1 до 100.
document.write('Task-9' + '<br/>');
var a = Math.floor(Math.random()*(100 + 1 - 1)) + 1;

document.write("a: "  + a + '<br/>');
document.write('<hr/>');

// 10
// Заполните массив 10-ю случайными целыми числами.
// (Подсказка: нужно воспользоваться циклами for или while).
document.write('Task-10' + '<br/>');
var arr = [];
for (var i = 0; i < 10; i++) {
    arr[i] = Math.floor(Math.random()*(100 - 1 + 1)) + 1;
}
document.write("arr: "  + arr + '<br/>');
document.write('<hr/>');

// Работа с модулем
// 11
// Даны переменные a и b. Найдите модуль разности a и b.
// Проверьте работу скрипта самостоятельно для различных a и b.
document.write('Task-11' + '<br/>');
var a = -10;
var b = 20;
var abs = Math.abs(a - b);
document.write("abs: "  + abs + '<br/>');
document.write('<hr/>');

// 12
// Даны переменные a и b. Отнимите от a переменную b и результат
// присвойте переменной c. Сделайте так, чтобы в любом случае
// в переменную c записалось положительное значение.
// Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.
document.write('Task-12' + '<br/>');
var a = 10,
    b = 15;
var c = Math.abs(a - b);
document.write("c: "  + c + '<br/>');
document.write('<hr/>');

// Задачи
// 13
// Дан массив arr. Найдите среднее арифметическое его элементов.
// Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
document.write('Task-13' + '<br/>');
var arr = [12, 15, 20, 25, 59, 79];
var summ = 0;
for (var i = 0; i < arr.length; i++) {
    summ += arr[i];
}
var middle = summ / arr.length;
document.write("middle: "  + middle + '<br/>');
document.write('<hr/>');


// 14
// Напишите скрипт, который будет находить факториал числа.
// Факториал (обозначается !) - это произведение (умножение)
// всех целых чисел, меньше данного, и его самого. Например, 4! = 1*2*3*4.
document.write('Task-14' + '<br/>');

var n = 4;
var res = 1;
for (var i = 1; i <= n; i++) {
    res = res * i;
}
document.write("res: "  + res + '<br/>');
document.write('<hr/>');