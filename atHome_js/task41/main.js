// Практика на отработку библиотеки jQuery

// Задачи для решения
// 1
// Все абзацы <p>, внутри которых есть <b>, оберните в тег <div>
function task1() {
  console.log($);
  $('p:has(b)').wrap('<div>');
}
// task1();

// 2
// Найдите все абзацы <p> с классом .www, поставьте им в начало текст '!',
// затем добавьте к этим абзацам
// еще и заголовки h1-h6 и покрасьте эти абзацы и заголовки в красный цвет.
function task2() {
  $('p.www').prepend('!').add(':header').css('color', 'red');
}
// task2();

// 3
// Найдите все абзацы <p>, и замените их на тег <div> с таким же содержимым.
// function task3(){
//   $('p.task3').each(function(){
//     $(this).replaceWith('<div>' + $(this).html() + '</div>');
//   });
// }
// task3();
function task3(){
  $('p.task3').replaceWith(function() {
    return $('<div/>').html($(this).html());
  });
}
// task3();

// 4
// Найдите все чекбоксы на странице и заблокируйте четные из найденных.
function task4(){
  $('input[type = "checkbox"]#el4').each(function(index){
    if ((index + 1) % 2 == 0) {
      $(this).prop('disabled', true);
    }
  });
}
// task4();

// 5
// Поставьте всем незаблокированным чекбоксам статус "отмечен".
function task5(){
  $('input[type = "checkbox"]#el5:not([disabled])').prop('checked', 'true');
}
// task5();

// 6
// Дан элемент #test. Поставьте его непосредственному соседу сверху текст '!',
// а соседу снизу - текст '?'. Решите задачу одной цепочкой.
function task6(){
  $('#test6').prev().html('!').end().next().html('?');
}
// task6();

// 7
// Дан элемент #test.
// Поставьте его непосредственным соседям сверху и снизу текст элемента #test
function task7(){
  $('#test7').prev().html($('#test7').html()).end().next().html($('#test7').html());
}
// task7();

// 8
// Дан элемент #test. Найдите среди его соседей
// сверху ближайший абзац и поставьте ему текст элемента #test
function task8(){
  var $elem = $('#test8'),
      $text = $elem.html();
  $elem.prevAll('p').first().html($text);
}
// task8();

// 9
// Найдите второй <li> на странице, добавьте ему класс .www,
// оберните его внутри тегом <i>, вставьте после него <li> с текстом 'привет'.
function task9(){
  $('li').eq(1).addClass('www').wrapInner('<i>').after('<li>привет</li>');
}
// task9();

// 10
// Найдите десятый <li> на странице, найдите его родителя, получите непосредственного
// соседа родителя сверху, оберните его в <div class="www">.
function task10(){
  $('li:eq(9)').parent().prev().wrap('<div class="www"></div>');
}
// task10();

// 11
// Каждому абзацу <p>, кроме абзацев с классом .www, добавьте
// в конец его порядковый номер
function task11(){
  $('p.test11:not(p.test11.www)').each(function(index){
    $(this).append(index);
  });
}
// task11();

// 12
// Найдите все абзацы <p> и поставьте перед каждым абзацем его копию.
// Копию покрасьте в красный цвет, а исходный абзац в зеленый.
function task12(){
  $('p.test12').each(function(){
    $(this).
    before($(this).clone().
    css('color', 'red')).
    css('color','green');
  });
}
// task12();

// 13
// Найдите абзацы <p>, которые стоят непосредственно под <h2>
// и переместите каждый абзац так, чтобы он стал непосредственно над <h2>.
function task13(){
  $('h2 + p').each(function() {
  var $elem = $(this);
  $elem.insertBefore($elem.prev());
});
}
// task13();

// 14
// Найдите все пустые абзацы <p> (без текста)
// и вставьте в них текст непосредственного соседа сверху.
function task14(){
  $('p:empty').each(function() {
  var $elem = $(this);
  var text = $elem.prev().html();
  $elem.html(text);
});
}
task14();

// 15
// Родителю тега <b>, если это элемент с классом .www или абзац <p>,
// поставьте красный цвет и размер текста в 30px.
function task15(){
  $('b').parent('.www, p').css({color: 'red', fontSize: '30px'});
}

// 16
// Всем пустым абзацам <p> поставьте текст ближайшего к ним сверху тега <h2>
function task16(){
  $('p:empty').each(function(){
    var $elem = $(this);
    var text = $elem.prevAll('h2').first().html();
    $elem.html(text);
  });
}

// 18
// Дан элемент #test. Поставьте ему в начало текст непосредственного соседа сверху,
// а в конец - текст непосредственного соседа снизу.
function task18(){
  var $elem = $('#test18'),
      textPrev = $elem.prev().html(),
      textNext = $elem.next().html();
  $elem.prepend(textPrev).append(textNext);
}
// task18();

// 17
// Даны инпуты с числами. Сделайте так, чтобы в инпутах стали квадраты этих чисел
function task17(){
  $('input#inp17').each(function(index, el) {
    var $elem = $(this),
        value = $elem.val();
        $elem.val(value * value);
  });
}
// task17();

// 19
// Дан элемент #test. Найдите его второго соседа сверху и его второго соседа снизу.
// Сделайте так, чтобы найденные элементы обменялись
// текстом (сосед сверху возьмет текст соседа снизу и наоборот).
function task19(){
  var $elem = $('#test19'),
      textPrevTwo = $elem.prevAll().eq(1).html(),
      textNextTwo = $elem.nextAll().eq(1).html();
   $elem.nextAll().eq(1).html(textPrevTwo);
   $elem.prevAll().eq(1).html(textNextTwo);
}
task19();

// 20
// Дан элемент <div>. Выберите из него всех непосредственных потомков,
// которые не являются заголовками и покрасьте их в красный цвет.
function task20(){
  $('div').children().not(':header').css('color', 'red');
}

// 21
// Найдите все абзацы <p>, покрасьте их в красный цвет. Затем выберите среди
// найденных абзацев абзацы с классом .www и поставьте им текст '!'.
function task21() {
  $('p').css('color', 'red').filter('p.www').html('!');
}

// 22
// Найдите все абзацы <p> с классом .www, покрасьте их в красный цвет.
// Затем выберите среди найденных абзацев первый и поставьте ему текст '!',
// затем выберите последний и ему поставьте текст '?'. Решите задачу одной цепочкой.
function task22(){
  ('p.www').css('color', 'red').first().html('!').end().last().html('?');
}

// 23
// Найдите все абзацы <p>, поставьте каждому из них в конец тот же текст,
// который стоит внутри него (то есть текст в абзаце станет написан два раза).
function task23(){
  $('p').append(function (index, text) {
    var $elem = $(this);
    text = $elem.html();
    return text;
});

  $('p').each(function() {
  var $elem = $(this);
  var text = $elem.html();
  $elem.append(text);
});

}

// 24
// Найдите все абзацы <p>,
// поставьте каждому из них в конец его порядковый номер в наборе.
function task24(){
  $('p').each(function(index){
    $(this).append(index);
  });

  $('p').each(function() {
  var $elem = $(this);
  var index = $elem.index();
  $elem.append(index);
});

  $('p').append(function (index) {
  return index;
});

}

// 25
// Даны абзацы с числами. Поставьте каждому из них в конец число,
// которое в нем хранится, умноженное на его порядковый номер в наборе.
function task25(){
  $('p').each(function(index){
    var $elem = $(this),
        value = $elem.html();
    $elem.append(value * index);
  });
}

// 26
// По нажатию на абзац <p> удалите его непосредственных соседей сверху и с низу.
function task26(){
  $('p').click(function(event) {
    var $elem = $(this);
    $elem.prev().remove().end().next().remove();
  });
}

// 27
// По нажатию на абзац <p> удалите всех его соседей сверху до первого заголовка h1-h6
// (то есть элементы, стоящие выше этого заголовка и сам заголовок удалять не надо).
function task27(){
  $('p').on('click', function(){
    $(this).prevUntil(':header:first').remove();
  });
}

// 28
// По нажатию на абзац <p> удалите его ближайшего нижнего соседа с классом .www.
function task28(){
  $('p').on('click', function(){
    $(this).nextAll('.www').first().remove();
  });
}

// 29
// По нажатию на абзац <p> удалите его пятого соседа снизу.
function task29(){
  $('p').on('click', function(){
    $(this).nextAll().eq(4).remove();
  });
}

// 30
// По нажатию на абзац <p> удалите его пятого соседа снизу, если это не <h2>.
function task30(){
  $('p').on('click', function(){
    $(this).nextAll(':not(h2)').eq(4).remove();
  });
  $('p').on('click', function(){
    $(this).nextAll().eq(4).not('h2').remove();
  });
}

// 31
// По нажатию на абзац <p> удалите его пятого соседа снизу,
// если этот сосед не имеет внутри себя тега <b>.
function task31(){
  $('p').on('click', function(){
    $(this).nextAll(':not:has(b)').eq(4).remove();
  });
  $('p').on('click', function(){
    $(this).nextAll().eq(4).not(':has(b)').remove();
  });
}

// 32
// По нажатию на абзац <p> удалите его пятого соседа снизу,
// если этот сосед не стоит непосредственно после <h2>
function task32(){
  $('p').on('click', function(){
    $(this).nextAll().eq(3).not('h2').next().remove();
  });
}

// 33
// Дан элемент #test. Поменяйте этот элемент местами
// с его непосредственным соседом снизу.
function task33(){
  $('#test').insertAfter($('#test').next());
}

// 34
// Дан элемент #test. После его непосредственного
// соседа снизу вставьте копию нашего элемента.
function task34(){
  $('#test').clone().insertAfter($('#test').next());
}

// 35
// Дан элемент #test. Поменяйте этот элемент
// местами с его ближайшим соседом снизу с классом .www.
function task35(){
  $('#test').insertAfter($('#test').nextAll().first());
}

// 36
// Найдите все абзацы <p>, которые внутри одного родителя
// лежат между одним и другим <h2>
function task36(){
  $('p').each(function(index){
    var $elem = $(this);
    if($elem.prev().is('h2') && $elem.next().is('h2')) {
      $elem.css('color', 'red');
    }
  });
}

// 37
// Оберните каждый абзац <p> снаружи и внутри в <div>.
function task37(){
  $('p').wrap('<div>').wrapInner('<div>');
}

// 38
// Найдите все абзацы <p>, у которых непосредственный
// родитель не <div> и оберните каждый из них в <div class="www">
function task38(){
  $('p').parent().not('div').children('p').wrap('<div class="www">');

  $(':not(div) > p').wrap('<div class="www">');
}

// 39
// Найдите все абзацы <p>. Удалите их родителя (сделайте ему unwrap),
// если этот родитель не <div> с классом .www. Затем для те абзацы,
// у которых был удален родитель, оберните в <div> с классом .zzz
function task39(){
  $('p').unwrap(':not(div.www)').wrap('<div class="zzz">');

  $(':not(div.www) > p').unwrap().wrap('<div class="zzz">');
}

// 40
 // Найдите всех родителей элемента #test и
 // создайте массив из CSS классов этих родителей.
 function task40(){
  var arr = [];
  $('#test').parents().each(function(index, el) {
    var attr = $el.attr('class');
    if( attr ) {
      arr.push(attr);
    }
  });
 }
 // arr = arr.concat(attr.split(' '));

 // 41
// Найдите все абзацы <p>, у которых есть атрибут class,
// и каждый из них оберните в <div> с теми же классами,
// как у найденного абзаца, а классы каждого абзаца удалите вместе с атрибутом class.
function task41(){
  $('p[class]').each(function(index, el) {
    $(el).wrap(function(){
      return $('<div>').addClass($(el).attr('class'));
    }).removeAttr('class');
  });

//   $('p[class]').each(function(index, el) {
//   var classes = $(el).attr('class');
//   var $div = $('<div>').addClass(classes);
//   $(el).removeAttr('class').wrap($div);
// });

  // console.log($('p[class]'));
}
task41();

// 42
// Найдите все абзацы <p> из #test, поставьте им в конец текст '!',
// затем исключите из найденных
// абзацы с классом .www и оставшимся поставьте красный цвет.
function task42(){
  $('#test p').append('!').not('p.www').css('color', 'red');

  $('#test').children('p').append('!').not('.www').css('color', 'red');
}

// 43
// Найдите все <li> на странице, затем перед предпоследним
// из найденных вставьте еще один <li> с текстом 'пункт'.
function task43(){
  $('li').last().prev().before('<li>пункт</li>');
}

// 44
// Найдите все <li> на странице, затем выберите среди найденных второй,
// третий и четвертый с конца и поставьте им текст '!'.
function task44(){
  $('li').slice(-4, -1).html('!');
}

// 45
// Найдите <ol> с #test и переставьте все <li> в нем в обратном порядке.
function task45(){
  var $elem = $('ol#test');
  $elem.html($elem.children().get().reverse());
  console.log($elem.children().get());
  console.log($elem.html());
}
task45();

// 46
// Дан элемент #text. Найдите всех его соседей сверху и всех
// его соседей снизу и поменяйте их местами
// (то есть все, что стоит до элемента, должно стать после него и наоборот).
function task46(){
  var $elem = $('#test'),
      $allUp = $elem.prevAll(),
      $allDown = $elem.nextAll();
  $elem.before($allDown).after($allUp);
}

// 47
// Получите все <li> с классом .www, сделайте им красный цвет,
// затем найдите среди найденных те <li>,
// у которых есть класс .bbb и удалите их. Решите все одной цепочкой.
function task47(){
  $('li.www').css('color', 'red').find('li.bbb').remove();
}

// 48
// Получите все <li> на странице.
// Четные из полученных сделайте пустыми, а нечетные удалите
function task48(){
  $('li:even').empty().not().remove();
}
// task48();

// 49
// Найдите все теги <div> и удвойте им высоту.
function task49(){
  $('div').each(function(){
    var $elem = $(this);
    var height = $elem.height();
    $elem.height(height*2);
    // console.log($(this).height());
  });

  $('div').height(function (index, height) {
  return height*2;
});
}
// task49();

// 50
// Найдите сумму высот всех <div> на странице
function task50(){
  var sum = 0;
  $('div').each(function(index, el){
    var height = $(el).height();
    sum += height;
    console.log('index: '+index+';height: '+height+ 'el.text: ' +$(el).html());
  });
  console.log(sum);
}
task50();

// 51
// Для элемента #test найдите ближайшего родителя с классом .www,
// в конец этого родителя добавьте абзац с текстом '!'.
function task51(){
  $('#test').parentsUntil('.www').append('<p>!</p>');
}

// 52
// По нажатию на элемент #test найдите его ближайшего родителя с классом .www,
// внутри этого родителя найдите все абзацы и покрасьте их в красный цвет.
function task52(){
  $('#test').on('click', function(e){
    var $elem = $(this),
        $parent = $elem.parentsUntil('.www');
        $parent.find('p').css('color', 'red');
  });
}

// 53
// Покрасьте первые 10 <li> на странице в красный цвет.
function task53(){
  $('li').slice(0,10).css('color', 'red');
}

// 54
// Покрасьте с 5-той по 10-ю <li> на странице в красный цвет.
function task54(){
  $('li').slice(4,10).css('color', 'red');
}

// 55
 // Найдите последние 10 <li> на странице, покрасьте их в красный цвет.
 // Затем из найденных найдите четные <li> и оберните их внутри в тег <b>.
function task55(){
  $('li').slice(-10).css('color', 'red').filter(':even').wrapInner('<b>');
}

// 56
// На странице даны чекбоксы. Подсчитайте, сколько из них отмечены.
function task56(){
  var i = 0;
  $(':checkbox').each(function(index, el) {
    if ($(el).prop('checked')) {
      i++;
    }
  });
  console.log(i);

  console.log( $(':checkbox:checked').length );
}
// task56();

// 57
// Дано 5 чекбоксов. Сделайте так, чтобы после того,
// как пользователь отметил два из них, все чекбоксы заблокировались.
function task57(){
  $('input[type=checkbox]#el57').on('click', function(e){
    var $elem = $(this);
     if ($('input[type=checkbox]#el57:checked').length == 2) {
    $elem.attr('disabled', true);
  }
  });
}
task57();

// 58
// Сделайте так, чтобы все отмеченные
// чекбоксы сменили свое состояние на неотмеченное и наоборот.
function task58(){
  $(':checkbox').each(function(){
    var $elem = $(this);
    $elem.prop('checked', !$elem.prop('checked'));
  });

  $(':checkbox').each(function (index, elem) {
  elem.checked = !elem.checked;
});

}
task58();

// 59
// Дан инпуты. Переместите содержимое атрибута value
// в атрибут placeholder, а сам атрибут value удалите совсем.
function task59(){
  $('input#text57').each(function(){
    var $elem = $(this),
        value = $elem.val();
    $elem.attr('placeholder', value).removeAttr('value');
  });
}
task59();

// 60
// Дана ссылка. Если атрибут href начинается на http://,
// добавьте ссылке атрибут target="_blank".
function task60(){
  $("a[href^='http://']").attr('target', '_blank');
}

// 61
// Дан инпут, в который можно ввести число. Сделайте так,
// чтобы при вводе числа в этот инпут и потери фокуса на странице
// искался чекбокс с таким
// номером и становился отмеченным, а остальные чекбоксы становились неотмеченными.
function task61(){
  $('input#text61').on('input blur', function(e){
    var $elem = $(this),
        value = $elem.val();
    console.log(value);
    $(':checkbox').each(function(index, el) {
      if (index == value) {
        console.log(index + '!!!!!');
        $(el).prop('checked', true);
      } else {
        $(el).prop('checked', false);
        console.log(index);
      }

    });
  });
}
task61();

// 62
// Дан селект и радио кнопочки, количество радио равно количеству пунктов
// в селекте. Сделайте так, чтобы при выборе пункта в селекте автоматически
// становилась отмеченной соответствующая радио кнопочка (соответствие
// по номеру следования: первый пункт списка - первому радио и так далее).
function task62(){
  $('select#select62').on('change', function(){
    var $elem = $(this),
    value = $elem.val(),
    selectIndex = $elem.prop('selectedIndex');
    console.log(value);
    console.log($elem.prop('selectedIndex'));
    $(':radio').each(function(index, el) {
      if ((index + 1) == selectIndex) {
        console.log(index + '!!!!!');
        $(el).prop('checked', true);
      } else {
        $(el).prop('checked', false);
      }
    });

  });
}
task62();