// Работа с элементами страницы в JavaScript

// Задачи для решения
// Свойства innerHTML, outerHTML
// 1
// При нажатии на кнопку текст в абзаце поменяется.
function buttonClick1() {
    var element = document.querySelector('p.zz');
    element.innerHTML = 'Привет, а я <b> жирный </b>!';
}

// 2
// При нажатии на кнопку текст в абзаце поменяется.
function buttonClick2() {
    var element = document.querySelector('p.zzz');
    element.outerHTML = '<h3> Абзац превратился в h3 </h3>';
}

// 3
// При нажатии на кнопку абзац станет h3, но текст останется
function buttonClick3() {
    var element = document.querySelector('p.x3');
    element.outerHTML = '<h3>' + element.innerHTML + '</h3>';
}

// 4
function buttonClick4() {
    var element1 = document.querySelector('#text41'),
        element2 = document.querySelector('#text42'),
        result = document.querySelector('.res');

    result.innerHTML = parseInt(element1.value) + parseInt(element2.value);
}

// Метод getElementsByTagName
// 5
function buttonClick5() {
    var elements = document.getElementsByTagName('h6');
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = 'Текст поменялся!';
    }
}

// Метод getElementsByClassName
// 6
// Дан HTML код.
// Поменяйте содержимое элементов с классом www на их порядковый номер в коде.

function buttonClick6() {
    var elements = document.getElementsByClassName('www');
    for ( var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = i + 1;
    }
}

// Метод querySelectorAll
// 7
// Дан HTML код.
// Поменяйте содержимое абзацев с классом xxx на их порядковый номер в коде.

function buttonClick7() {
    var elements = document.querySelectorAll('p.xxx');
    for ( var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = i + 1;
    }
}

// Методы setAttribute, getAttribute, removeAttribute, hasAttribute
// 8

function buttonClick8() {
    var element = document.querySelector('.my--class');
    alert(element.getAttribute('class'));
}

// 9
function buttonClick9() {
    var elem = document.querySelector('.my--class9');
    alert(elem.getAttribute('class'));
}

function buttonClick91() {
    var elem = document.querySelector('.my--class9');
    elem.removeAttribute('class');
    alert('Класс удален');
}

// 10
function buttonClick10() {
    var elem = document.querySelector('.my--class10');
    alert(elem.getAttribute('class'));
}

function buttonClick101() {
    var elem = document.querySelector('.my--class10');
    elem.setAttribute('class', 'new-class');
    alert('Класс изменен');
}

// Задачи
// 11
function getNun(elem) {
    var res = document.querySelector('.copy');
    res.innerHTML = elem.value;
}

// 12
function buttonClick12() {
    var elements = document.querySelectorAll('a.link12');
    for ( var i = 0; i < elements.length; i++) {
        elements[i].innerHTML += elements[i].getAttribute('href');
    }
}

// Закрепление пройденного
// 13
// При нажатии на кнопку текст в абзаце поменяется.
function buttonClick13(that) {
    var elem = document.querySelector('.x13');
    elem.style.color = 'red';
    that.disabled = true;
    elem.innerHTML = 'Текст поменялся';
}

// 14
// Повторите страницу по данному по образцу
// (при нажатии на кнопку текст в каждом абзаце поменяется на порядковый номер абзаца):
function buttonClick14() {
    var elements = document.querySelectorAll('p.x14');
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = i + 1;
    }
}

// 15
// Повторите страницу по данному по образцу (при нажатии на кнопку текст
// в каждом абзаце поменяется - спереди добавится порядковый номер абзаца):

function buttonClick15() {
    var elements = document.querySelectorAll('p.x15');
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = i + 1 + ". " + elements[i].innerHTML;
    }
}