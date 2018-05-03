// Задачи на регулярные выражения JavaScript. Часть 4

// Задачи для решения
// На позитивный и негативный просмотр
// 1
// С помощью позитивного и негативного просмотра
// найдите все строки по шаблону 3 буквы a, затем
// буква b и поменяйте 3 буквы a на знак '!'. То есть из 'aaab' нужно сделать '!b'.
function task1() {
  var str = 'aaab';
  var res = str.replace(/aaa(?=b)/g, '!');
  console.log(res);
}
task1();

// 2
// С помощью позитивного и негативного просмотра найдите
// все строки по шаблону 3 буквы a, затем любая буква,
// но не b и поменяйте 3 буквы a на знак '!'.
// То есть из, к примеру, 'aaaw' нужно сделать '!w', а 'aaab' не поменяется.
function task2() {
  var str = 'aaab aaax aaa5';
  var res = str.replace(/aaa(?!b)/g, '!');
  console.log(res);
}
task2();

// На replace
// 3
// Дана строка с целыми числами. С помощью регулярки преобразуйте
// строку так, чтобы вместо этих чисел стояли их квадраты.
function task3() {
  var str = '3 4 5 6 7 8';
  var res = str.replace(/\d+/g, function (match) {
    return match * match;
  });
  console.log(res);
}
task3();

// 4
// Дана строка с целыми числами. Найдите числа,
// стоящие в кавычках и увеличьте их в два раза.
// Пример: из строки 2aaa'3'bbb'4' сделаем строку 2aaa'6'bbb'8'.
function task4() {
  var str = 'dwdwd"3"wdwdw"4"wdwd';
  var res = str.replace(/"(\d+)"/g, function (match, match1) {
    console.log(match1);
    return match1 * 2;
  });
  console.log(res);
}
task4();

// 5
// Дана строка в которой есть вставки {{текст}}.
// Найдите все такие вставки и поменяйте
// в них порядок букв на обратный (то есть из 'текст' нужно сделать 'тскет').
function task5() {
  var str = '{{текст}} wdwdwqd qwdwqd {{текст}}';
  var res = str.replace(/\{\{([а-я]+)\}\}/g, function (match, match1) {
    // console.log(match1);
    var newStr = match1.split('').reverse().join('');
    return newStr;
  });
  console.log(res);
}
task5();

// 6
// Дана строка '23 + 35 ='. Числа могут быть любыми.
// Выведите на экран результат операции в виде '23 + 35 = 58'.
function task6(){
  var str = '23 + 35 = ';
  var reg = /(\d+)\s(\+)\s(\d+)\s=/g;
  var res = str.replace(reg, function(string, elem1, elem2, elem3) {
    console.log(elem1);
    console.log(elem2);
    console.log(elem3);
    console.log(string);
    var sum = Number(elem1) + Number(elem3);
    console.log(sum);
    return string + " " + sum;
  });
  console.log(res);
}
task6();

// 7
// Определите, что год находится в интервале от 1900 до 2100
// с помощью одного только регулярного выражения.
function task7(){
  var year = '1900 1928 2012 2098 2100';
  var regexp = /[1-2][019][0-9][0-9]/g;
  var res = regexp.test(year);
  console.log(res);
}
task7();

// 8
// С помощью test определите, что переданная строка является
// корректным временем вида '12:59', '23:41', '00:12', '00:00', '09:15'.
// Время '24.00', '25.00', '12.60', '12.93', '41.93' является некорректным.
function task8(){
  var str = '12:59';
  var reg = /[01][0-9]|2[0-3]\:[0-5][0-9]/;
  var res = reg.test(str);
  console.log(res);
}
task8();

// 9
 // С помощью test определите, что переданная строка
 // является корректным временем вида '9.59 am', '12.30 pm'.
 function task9(){
  var str = '19.59 am';
  var reg = /[01][0-9]|2[0-3]\.[0-5][0-9]\s[ap]m/;
  var res = reg.test(str);
  console.log(res);
}
task9();

// 10
// Удалите одной регуляркой все слова из предложения,
// содержащие две одинаковые следующие друг за другом буквы.
function task10(){
  // var str = 'retyy iyuur portuy';
  // var reg = /\b[a-z]+[a-z][a-z]+\b/g;
  var res = "aaaa zzqzqaq hsdds".replace(/\W*\w*(\w)\1\w*\W*/g, " ");
  console.log(res);
}
task10();

// 11
// Удалите одной регуляркой все повторяющиеся слова из строки,
// например для 'dsf xxx xxx sd' должно вернуть 'dsf xxx sd'.
function task11(){
  var str = 'dsf xxx xxx sd';
  var reg = /\b(\w+)\s+\1/g;
  var res = str.replace(reg, "$1");
  console.log(res);
}
task11();

// 12
// Решите предыдущую задачу с учетом того, что слово может повторяться много раз.
// Например 'dsf xxx xxx xxx xxx xxx sd' должно вернуть 'dsf xxx sd'.
function task12(){
  var str = 'dsf xxx xxx xxx xxx xxx sd xxx xxx xxx xxx';
  var reg = /\b(\w+)\b(?:\s+\1\b)+/g;
  var res = str.replace(reg, function(match, match1, index) {
    console.log(match1);
    console.log(index);
    return match1;
  });
  console.log(res);
}
task12();
