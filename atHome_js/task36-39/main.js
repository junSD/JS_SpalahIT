// Задачи на работу с событиями jQuery

// События через отдельные методы
// 1
// Даны абзацы. Сделайте так,
// чтобы по клику на каждый абзац на экран выводилось его содержимое.
function task1() {
  console.log($);
  $('.task1').on('click', function func(event) {
    alert($(this).html());
  });
}
task1();

// 2
// Привяжите всем ссылкам событие - по наведению на ссылку
// в конец ее текста дописывается ее href в круглых скобках.
function task2() {
  $('.link2').on('mouseover', function func(event){
    $(this).append('( ' + $(this).attr('href') + ' )');
  });
}
task2();

// 3
// Дополнить предыдущую задачу: после первого наведению на ссылку
// следует отвязать от нее событие, которое добавляет href в конец текста.
function task3() {
  $('.link3').on('mouseover', function func(event){
    $(this).append('( ' + $(this).attr('href') + ' )');
    $(this).off('mouseover', func);
  });
}
task3();

// 4
// Привяжите всем инпутам событие
// - по потери фокуса каждый инпут выводит свое value в абзац с id="test".
function task4(){
  var paragraph = $('p.test4');
  $('.text4').on('blur', function func(event) {
      paragraph.html($(this).val());
  });
}
task4();

// 5
// Для всех инпутов сделайте так, чтобы они выводили
// свой value алертом при нажатии на любой из них, но только по первому нажатию.
// Повторное нажатие на инпут не должно вызывать реакции.
function task5() {
  $('.text5').on('click', function func(e){
    alert($(this).val());
    $(this).off('click', func);
  });
}
task5();

// 6
// Даны абзацы с числами.
// По нажатию на абзац в нем должен появится квадрат числа, которое он содержит.
function task6(){
  $('p.task6').on('click', function func(){
    var value = $(this).html();
    $(this).html(Math.pow(value, 2));
  });
}
task6();

// 7
// Даны абзацы с числами. По клику на абзац в нем должен появится квадрат числа,
// которое он содержит, но только по первому клику. По двойному
// клику на абзац число в абзаце должно удвоится, но тоже только первый раз.
function task7(){
  $('p.task7').on('click', function func(){
    var value = $(this).html();
    $(this).html(Math.pow(value, 2));
    $(this).off('click', func);
  });
  $('p.task7').on('dblclick', function func(){
    var value = $(this).html();
    $(this).html(value * 2);
    $(this).off('dblclick', func);
  });
}
task7();

// Задачи на on и off
// 8
// Привяжите всем ссылкам событие
// - по наведению на ссылку в конец ее текста дописывается ее href в круглых скобках.

// 9
// Дополнить предыдущую задачу: после первого наведению на ссылку следует отвязать от нее событие,
// которое добавляет href в конец текста.

// Задачи на one
// 10
// Даны абзацы. Сделайте так, чтобы по первому клику на абзац
// ему в конец добавлялся '!', но только по первому клику.
function task10(){
  $('p.task10').one('click', function func(){
    $(this).append('!');
  });
}
task10();

// Задачи на делегирование через on
// 11
// Дан ul, в нем несколько li. Под ul сделайте кнопку,
// по нажатию на которую в конец ul будет добавляться новый li с текстом 'пункт'.
// Сделайте так, чтобы при клике на каждый li, ему в конец добавлялся '!'.
// Это должно работать и для вновь добавленных li.
// Задачу решите с помощью делегирования (то есть событие должно быть навешано на ul).
function task11(){
  $('ul.menu10').on('click', 'li', function func(e) {
    $(this).append('!');
  });
  $('#inp10').on('click', function func(e) {
    $('ul.menu10').append('<li>point</li>');
  });
}
task11();

// 12
// Дана таблица с юзерами с двумя колонками: имя и фамилия.
// Под таблицей сделайте форму, с помощью которой можно будет добавить
// нового юзера в таблицу. Сделайте так,
// чтобы при клике на любую ячейку появлялся prompt,
// с помощью которого можно изменить текст ячейки. Задачу
// решите с помощью делегирования (то есть событие должно быть навешано на table).
function task12(){
  var $userName = $('input#name'),
      $userSurname = $('input#surname'),
      $table = $('.table12');
  $('#inp12').on('click', function addUser() {
      var $tdName = $('<td />').html($userName.val());
      var $tdSurname = $('<td />').html($userSurname.val());
      var $tr = $('<tr />').append($tdName, $tdSurname);
      $table.append($tr);
      console.log($tdName);
  });
  $table.on('click', 'td', function func(e){
    var value = prompt('Введите скорректированные данные:', $(this).html());
    if (value) {
      $(this).html(value);
    }
  });
}
task12();