// Задачи на регулярные выражения JavaScript. Часть 2

// Задачи для решения
// На {}
// 1
// Дана строка 'aa aba abba abbba abbbba abbbbba'.
// Напишите регулярку, которая найдет строки abba, abbba, abbbba и только их.
function task1() {
  var str = 'aa aba abba abbba abbbba abbbbba';
  var res = str.replace(/ab{2,4}a/g, 'Hi');
  console.log(res);
}
task1();

// 2
// Дана строка 'aa aba abba abbba abbbba abbbbba'. Напишите регулярку, которая найдет
// строки вида aba, в которых 'b' встречается менее 3-х раз (включительно).
function task2() {
  var str = 'aa aba abba abbba abbbba abbbbba';
  var res = str.replace(/ab{0,3}a/g, 'Hi');
  console.log(res);
}
task2();

// 3
// Дана строка 'aa aba abba abbba abbbba abbbbba'. Напишите регулярку, которая
// найдет строки вида aba, в которых 'b' встречается более 4-х раз (включительно).
function task3() {
  var str = 'aa aba abba abbba abbbba abbbbba';
  var res = str.replace(/ab{4,}a/g, 'Hi');
  console.log(res);
}
task3();

// На \s, \S, \w, \W, \d, \D
// 4
// Дана строка 'a1a a2a a3a a4a a5a aba aca'. Напишите регулярку, которая найдет строки,
// в которых по краям стоят буквы 'a', а между ними одна цифра
function task4() {
  var str = 'a1a a2a a3a a4a a5a aba aca';
  var res = str.replace(/a\da/g, 'Hi');
  console.log(res);
}
task4();

// 5
// Дана строка 'a1a a22a a333a a4444a a55555a aba aca'. Напишите регулярку,
// которая найдет
// строки, в которых по краям стоят буквы 'a', а между ними любое количество цифр.
function task5() {
  var str = 'a1a a22a a333a a4444a a55555a aba aca';
  var res = str.replace(/a\d+a/g, 'Hi');
  console.log(res);
}
task5();

// 6
// Дана строка 'aa a1a a22a a333a a4444a a55555a aba aca'.
// Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a',
// а между ними любое количество цифр (в том числе и ноль цифр, то есть строка 'aa').
function task6() {
  var str = 'aa a1a a22a a333a a4444a a55555a aba aca';
  var res = str.replace(/a\d*a/g, 'Hi');
  console.log(res);
}
task6();

// 7
// Дана строка 'avb a1b a2b a3b a4b a5b abb acb'. Напишите регулярку, которая найдет
// строки следующего вида: по краям стоят буквы 'a' и 'b', а между ними - не число.
function task7() {
  var str = 'avb a1b a2b a3b a4b a5b abb acb';
  var res = str.replace(/a\Db/g, 'Hi');
  console.log(res);
}
task7();

// 8
// Дана строка 'ave a#b a2b a$b a4b a5b a-b acb'.
// Напишите регулярку, которая найдет строки следующего вида:
// по краям стоят буквы 'a' и 'b', а между ними - не буква и не цифра.
function task8() {
  var str = 'ave a#b a2b a$b a4b a5b a-b acb';
  var res = str.replace(/a\Wb/g, 'Hi');
  console.log(res);
}
task8();

// 9
// Дана строка 'ave a#a a2a a$a a4a a5a a-a aca'.
// Напишите регулярку, которая заменит все пробелы на '!'.
function task9() {
  var str = 'ave a#a a2a a$a a4a a5a a-a aca';
  var res = str.replace(/\s/g, '!');
  console.log(res);
}
task9();

// На [], '^' - не, [a-zA-Z], кириллицу
// 10
// Дана строка 'aba aea aca aza axa'.
// Напишите регулярку, которая найдет строки aba, aea, axa, не затронув остальных.
function task10() {
  var str = 'aba aea aca aza axa';
  var res = str.replace(/a[b,e,x]a/g, 'Hi');
  console.log(res);
}
task10();

// 11
// Дана строка 'aba aea aca aza axa a.a a+a a*a'. Напишите регулярку,
// которая найдет строки aba, a.a, a+a, a*a, не затронув остальных.
function task11() {
  var str = 'aba aea aca aza axa a.a a+a a*a';
  var res = str.replace(/a[b.+*]a/g, 'Hi');
  console.log(res);
}
task11();

// 12
// Напишите регулярку, которая найдет строки следующего вида:
// по краям стоят буквы 'a', а между ними - цифра от 3-х до 7-ми.
function task12() {
  var str = 'a3a a4a aca aza axa a.a a9a a8a';
  var res = str.replace(/a[3-7]a/g, 'Hi');
  console.log(res);
}
task12();

// 13
// Напишите регулярку, которая найдет строки следующего вида:
// по краям стоят буквы 'a', а между ними - буква от a до g.
function task13() {
  var str = 'a3a a4a aca aza axa a.a afa a8a';
  var res = str.replace(/a[a-g]a/g, 'Hi');
  console.log(res);
}
task13();

// 14
// Напишите регулярку, которая найдет строки следующего вида:
// по краям стоят буквы 'a', а между ними - буква от a до f и от j до z.
function task14() {
  var str = 'aha a4a aca aza axa a.a afa a8a';
  var res = str.replace(/a[a-fj-z]a/g, 'Hi');
  console.log(res);
}
task14();

// 15
// Напишите регулярку, которая найдет строки следующего вида:
// по краям стоят буквы 'a', а между ними - буква от a до f и от A до Z.
function task15() {
  var str = 'aha aka aca aza axa a.a aTa a8a';
  var res = str.replace(/a[a-fA-Z]a/g, 'Hi');
  console.log(res);
}
task15();

// 16
// Дана строка 'aba aea aca aza axa a-a a#a'.
// Напишите регулярку, которая найдет строки следующего вида:
// по краям стоят буквы 'a', а между ними - не 'e' и не 'x'
function task16() {
  var str = 'aba aea aca aza axa a-a a#a';
  var res = str.replace(/a[^ex\s]a/g, 'Hi');
  console.log(res);
}
task16();

// 17
// Дана строка 'wйw wяw wёw wqw'.
// Напишите регулярку, которая найдет строки следующего вида:
// по краям стоят буквы 'w', а между ними - буква кириллицы.
function task17() {
  var str = 'wйw wяw wёw wqw';
  var res = str.replace(/w[а-яА-ЯЁё]w/g, 'Hi');
  console.log(res);
}
task17();

// На [a-zA-Z] и квантификаторы
// 18
// Дана строка 'aAXa aeffa aGha aza ax23a a3sSa'.
// Напишите регулярку, которая найдет строки следующего вида:
// по краям стоят буквы 'a',
// а между ними - маленькие латинские буквы, не затронув остальных.
function task18() {
  var str = 'aAXa aeffa aGha aza ax23a a3sSa';
  var res = str.replace(/a[a-z]+a/g, 'Hi');
  console.log(res);
}
task18();

// 19
// Дана строка 'aAXa aeffa aGha aza ax23a a3sSa'.
// Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a',
// а между ними - маленькие и большие латинские буквы, не затронув остальных.
function task19() {
  var str = 'aAXa aeffa aGha aza ax23a a3sSa';
  var res = str.replace(/a[a-zA-Z]+a/g, 'Hi');
  console.log(res);
}
task19();

// 20
// Дана строка 'aAXa aeffa aGha aza ax23a a3sSa'.
// Напишите регулярку, которая найдет строки следующего вида:
// по краям стоят буквы 'a',
// а между ними - маленькие латинские буквы и цифры, не затронув остальных.
function task20() {
  var str = 'aAXa aeffa aGha aza ax23a a3sSa';
  var res = str.replace(/a[a-z0-9]+a/g, 'Hi');
  console.log(res);
}
task20();

// 21
// Дана строка 'ааа ббб ёёё ззз ййй ААА БББ ЁЁЁ ЗЗЗ ЙЙЙ'.
// Напишите регулярку, которая
// найдет все слова по шаблону: любая кириллическая буква любое количество раз.
function task21() {
  var str = 'ааа ббб ёёё ззз ййй ААА БББ ЁЁЁ ЗЗЗ ЙЙЙ';
  var res = str.replace(/[а-яА-ЯЁё]+/g, 'Hi');
  console.log(res);
}
task21();

// На '^', '$'
// 22
// Дана строка 'aaa aaa aaa'.
// Напишите регулярку, которая заменит первое 'aaa' на '!'.
function task22() {
  var str = 'aaa aaa aaa';
  var res = str.replace(/^aaa/g, 'Hi');
  console.log(res);
}
task22();

// 23
// Дана строка 'aaa aaa aaa'.
// Напишите регулярку, которая заменит последнее 'aaa' на '!'.
function task23() {
  var str = 'aaa aaa aaa';
  var res = str.replace(/aaa$/g, 'Hi');
  console.log(res);
}
task23();

// На '|'
// 24
// Дана строка 'aeeea aeea aea axa axxa axxxa'.
// Напишите регулярку, которая найдет строки следующего вида:
// по краям стоят буквы 'a', а между ними - или буква 'e' любое количество раз или
// по краям стоят буквы 'a', а между ними - буква 'x' любое количество раз.
function task24() {
  var str = 'aeeea aeea aea axa axxa axxxa';
  var res = str.replace(/a(e|x)+a/g, 'Hi');
  console.log(res);
}
task24();

// 25
// Дана строка 'aeeea aeea aea axa axxa axxxa'.
// Напишите регулярку, которая найдет строки следующего вида:
// по краям стоят буквы 'a',
// а между ними - или буква 'e' два раза или буква 'x' любое количество раз.
function task25() {
  var str = 'aeeea aeea aea axa axxa axxxa';
  var res = str.replace(/a(e{2}|x+)a/g, 'Hi');
  console.log(res);
}
task25();

// На обратный слеш \
// 26
// Дана строка 'a\a abc'. Напишите регулярку, которая заменит строку 'a\a' на '!'.
function task26() {
  var str = 'a\\a abc a\\2a';
  var res = str.replace(/a\\\a/g, 'Hi');
  console.log(res);
}
task26();

// 27
// Дана строка 'a\a a\\a a\\\a'.
// Напишите регулярку, которая заменит строку 'a\\\a' на '!'.
function task27() {
  var str = 'a\\a a\\\\a a\\\\\\a';
  var res = str.replace(/a\\\\\\a/g, 'Hi');
  console.log(res);
}
task27();

// На экранировку посложнее
// 28
// Дана строка 'bbb /aaa\ bbb /ccc\'. Напишите регулярку,
// которая найдет содержимое всех конструкций /...\ и заменит их на '!'.
function task28() {
  var str = 'bbb /aaa\\ bbb /ccc\\ / /aaa /ccc';
  var res = str.replace(/\/[ac]+\\/g, 'Hi');
  console.log(res);
}
task28();