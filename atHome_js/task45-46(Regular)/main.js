// Задачи на регулярные выражения JavaScript. Часть 1

// Задачи для решения
// На '.', символы
// 1
// Дана строка 'ahb acb aeb aeeb adcb axeb'. Напишите регулярку, которая
// найдет строки ahb, acb, aeb по шаблону: буква 'a', любой символ, буква 'b'.
function task1() {
  var str = 'ahb acb aeb aeeb adcb axeb';
  var res = str.replace(/a.b/g, 'Hi');
  console.log(res);
}
task1();

// 2
// Дана строка 'aba aca aea abba adca abea'. Напишите регулярку, которая найдет строки
// abba adca abea по шаблону: буква 'a', 2 любых символа, буква 'a'.
function task2() {
  var str = 'aba aca aea abba adca abea';
  var res = str.replace(/a..a/g, 'Hi');
  console.log(res);
}
task2();

// 3
// Дана строка 'aba aca aea abba adca abea'.
// Напишите регулярку, которая найдет строки abba и abea, не захватив adca.
function task3() {
  var str = 'aba aca aea abba adca abea';
  var res = str.replace(/ab.a/g, 'Hi');
  console.log(res);
}
task3();

// На '+', '*', '?', ()
// 4
// Дана строка 'aa aba abba abbba abca abea'.
// Напишите регулярку, которая найдет строки aba, abba, abbba по шаблону:
// буква 'a', буква 'b' любое количество раз, буква 'a'.
function task4() {
  var str = 'aa aba abba abbba abca abea';
  var res = str.replace(/ab+a/g, 'Hi');
  console.log(res);
}
task4();

// 5
// Дана строка 'aa aba abba abbba abca abea'.
// Напишите регулярку, которая найдет строки aa, aba, abba, abbba по шаблону:
// буква 'a', буква 'b' любое количество раз (в том числе ниодного раза), буква 'a'.
function task5() {
  var str = 'aa aba abba abbba abca abea';
  var res = str.replace(/ab*a/g, 'Hi');
  console.log(res);
}
task5();

// 6
// Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки
// aa, aba по шаблону: буква 'a', буква 'b' один раз или ниодного, буква 'a'.
function task6() {
  var str = 'aa aba abba abbba abca abea';
  var res = str.replace(/ab?a/g, 'Hi');
  console.log(res);
}
task6();

// 7
// Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку,
// которая найдет строки aa, aba, abba, abbba, не захватив abca abea.
function task7() {
  var str = 'aa aba abba abbba abca abea';
  var res = str.replace(/ab*a/g, 'Hi');
  console.log(res);
}
task7();

// 8
// Дана строка 'ab abab abab abababab abea'. Напишите регулярку,
// которая найдет строки по шаблону: строка 'ab' повторяется 1 или более раз.
function task8() {
  var str = 'ab abab abab abababab abea';
  var res = str.replace(/(ab)+/g, 'Hi');
  console.log(res);
}
task8();

// На экранировку
// 9
// Дана строка 'a.a aba aea'.
// Напишите регулярку, которая найдет строку a.a, не захватив остальные
function task9() {
  var str = 'a.a aba aea';
  var res = str.replace(/a\.a/g, 'Hi');
  console.log(res);
}
task9();

// 10
// Дана строка '2+3 223 2223'.
// Напишите регулярку, которая найдет строку 2+3, не захватив остальные.
function task10() {
  var str = '2+3 223 2223';
  var res = str.replace(/2\+3/g, 'Hi');
  console.log(res);
}
task10();

// 11
// Дана строка '23 2+3 2++3 2+++3 345 567'. Напишите регулярку, которая найдет
// строки 2+3, 2++3, 2+++3, не захватив остальные (+ может быть любое количество).
function task11() {
  var str = '23 2+3 2++3 2+++3 345 567';
  var res = str.replace(/2\++3/g, 'Hi');
  console.log(res);
}
task11();

// 12
// Дана строка '23 2+3 2++3 2+++3 445 677'. Напишите регулярку,
// которая найдет строки 23, 2+3, 2++3, 2+++3, не захватив остальные.
function task12() {
  var str = '23 2+3 2++3 2+++3 445 677';
  var res = str.replace(/2\+*3/g, 'Hi');
  console.log(res);
}
task12();

// 13
// Дана строка '*+ *q+ *qq+ *qqq+ *qqq qqq+'.
// Напишите регулярку, которая найдет строки *q+, *qq+, *qqq+, не захватив остальные.
function task13() {
  var str = '*+ *q+ *qq+ *qqq+ *qqq qqq+';
  var res = str.replace(/\*q+\+/g, 'Hi');
  console.log(res);
}
task13();

// 14
// На жадность
// Дана строка 'aba accca azzza wwwwa'.
// Напишите регулярку, которая найдет все строки по краям которых стоят буквы 'a',
// и заменит каждую из них на '!'.
// Между буквами a может быть любой символ (кроме a)
function task14() {
  var str = 'aba accca azzza wwwwa';
  var res = str.replace(/a.+?a/g, 'Hi');
  console.log(res);
}
task14();
