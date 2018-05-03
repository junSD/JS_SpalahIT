// Задачи на эффекты и анимацию jQuery

// Задача на slideUp, slideDown
// 1
function task1() {
  console.log($);
  $('#show1').on('click', function(){
    $('ul.menu1').slideUp(1000);
  });
  $('#hide1').on('click', function(){
    $('ul.menu1').slideDown(1000);
  });
}
task1();

// Задача на slideToggle
// 2
function task2() {
  $('#toggle2').on('click', function(){
    $('ul.menu2').slideToggle(1000);
  });
}
task2();

// 3
// Задача на fadeIn, fadeOut
function task3() {
  $('#show3').on('click', function(){
    $('ul.menu3').fadeIn(2000);
  });
  $('#hide3').on('click', function(){
    $('ul.menu3').fadeOut(2000);
  });
  $('#moreb3').on('click', function(){
    $('ul.menu3').fadeTo(2000, 0.3);
  });
  $('#lessb3').on('click', function(){
    $('ul.menu3').fadeTo(2000, 1);
  });
}
task3();

// Задача на fadeToggle
// 4
function task4() {
  $('#toggle4').on('click', function(){
    $('ul.menu4').fadeToggle(1000);
  });
}
task4();

// 5
// Задача на show, hide
function task5() {
  console.log($);
  $('#show5').on('click', function(){
    $('ul.menu5').show(1000);
  });
  $('#hide5').on('click', function(){
    $('ul.menu5').hide(1000);
  });
}
task5();

// 6,7
// Задача на animate
function task6() {
  $('.elem6').on('click', function(){
    $(this).animate({width: '+=100px'}, 1500);
  });
}
task6();

// 8
function task8() {
  $('.elem8').on('click', function(){
    $(this).animate({width: '+=100px', height: '+=100px'}, 1500);
  });
}
task8();

// 9
function task9() {
  $('.elem9').on('click', function(){
    $(this).animate({marginLeft: '+=100px'}, 1500);
  });
}
task9();