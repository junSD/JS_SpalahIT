// Задачи на работу с метриками на JavaScript

// На величину границы
// 1
// Дан элемент #elem с границами.
// По нажатию на кнопку выведите толщину его верхней границы.
function task1() {
    var elem = document.querySelector('#elem1'),
        button = document.querySelector('#but1');
    button.addEventListener('click', function (e) {
        var that = this;
        alert('borderTop ' + elem.tagName.toLowerCase() + ': ' + elem.clientTop + ' px;');
    },false);

}

task1();

// 2
// Дан элемент #elem с границами.
// По нажатию на кнопку выведите толщину его левой границы.
function task2() {
    var elem = document.querySelector('#elem2'),
        button = document.querySelector('#but2');
    button.addEventListener('click', function (e) {
        var that = this;
        alert('borderLeft ' + elem.tagName.toLowerCase() + ': ' + elem.clientLeft + ' px;');
    },false);
}

task2();

// На полный размер элемента
// 3
// Дан элемент #elem с границами.
// По нажатию на кнопку выведите его полную ширину с учетом границы и padding.
function task3() {
    var elem = document.querySelector('#elem3'),
        button = document.querySelector('#but3');
    button.addEventListener('click', function (e) {
        var that = this;
        alert('FullWidth ' + elem.tagName.toLowerCase() + ': ' + elem.offsetWidth + ' px;');
    },false);
}

task3();

// 4
// Дан элемент #elem с границами.
// По нажатию на кнопку выведите его полную высоту с учетом границы и padding.
function task4() {
    var elem = document.querySelector('#elem4'),
        button = document.querySelector('#but4');
    button.addEventListener('click', function (e) {
        var that = this;
        alert('FullHeight ' + elem.tagName.toLowerCase() + ': ' + elem.offsetHeight + ' px;');
    },false);
}

task4();

// На размер элемента без границ, но с padding
// 5
// Дан элемент #elem с границами.
// По нажатию на кнопку выведите его полную ширину без учета границы, но с padding.
function task5() {
    var elem = document.querySelector('#elem5'),
        button = document.querySelector('#but5');
    button.addEventListener('click', function (e) {
        var that = this;
        alert('FullWidth without border ' + elem.tagName.toLowerCase() + ': ' + elem.clientWidth + ' px;');
    },false);
}

task5();

// 6
// Дан элемент #elem с границами.
// По нажатию на кнопку выведите его полную высоту без учета границы, но с padding.
function task6() {
    var elem = document.querySelector('#elem6'),
        button = document.querySelector('#but6');
    button.addEventListener('click', function (e) {
        var that = this;
        alert('FullHeight without border ' + elem.tagName.toLowerCase() + ': ' + elem.clientHeight + ' px;');
    }, false);
}

task6();

// Работа с getComputedStyle
// 7
// Дан элемент #elem. Получите его ширину и высоту, без учета границы и padding.
function task7() {
    var elem = document.querySelector('#elem7'),
        button = document.querySelector('#but7');
    button.addEventListener('click', function (e) {
        var that = this;
        var elemStyle = getComputedStyle(elem);
        alert('Width ' + elem.tagName.toLowerCase() + ': ' + elemStyle.width);
        alert('Height ' + elem.tagName.toLowerCase() + ': ' + elemStyle.height);
    }, false);
}

task7();

// Прокрутка элемента
// 8
// Дан элемент #elem с вертикальной полосой прокрутки.
// По нажатию на кнопку выведите на сколько элемент прокручен сверху.
function task8() {
    var elem = document.querySelector('#elem8'),
        button = document.querySelector('#but8');
    button.addEventListener('click', function (e) {
        var that = this;
        alert("Элемент прокручен на " + elem.scrollTop);
    }, false);
}

task8();

// 9
// Дан элемент #elem с горизонтальной полосой прокрутки.
// По нажатию на кнопку выведите на сколько элемент прокручен слева.
// function task9() {
//     var elem = document.querySelector('#elem9'),
//         button = document.querySelector('#but9');
//     button.addEventListener('click', function (e) {
//         var that = this;
//         alert("Элемент прокручен на " + elem.scrollLeft);
//     }, false);
// }

// task9();

// 10
// Дан элемент #elem с вертикальной полосой прокрутки.
// По нажатию на кнопку прокрутите его до позиции 100px сверху.
function task10() {
    var elem = document.querySelector('#elem10'),
        button = document.querySelector('#but10');
    button.addEventListener('click', function (e) {
        var that = this;
        elem.scrollTop = 100;
    }, false);
}

task10();

// 11
// Дан элемент #elem с вертикальной полосой прокрутки.
// По нажатию на кнопку прокрутите его на 100px вниз от текущего положения.
function task11() {
    var elem = document.querySelector('#elem11'),
        button = document.querySelector('#but11');
    button.addEventListener('click', function (e) {
        var that = this;
        elem.scrollTop += 100;
    }, false);
}

task11();

// Прокрутка элемента
// 12
// Дан элемент #elem с вертикальной полосой прокрутки.
// По нажатию на кнопку выведите реальную высоту элемента с учетом прокрутки.
function task12() {
    var elem = document.querySelector('#elem12'),
        button = document.querySelector('#but12');
    button.addEventListener('click', function (e) {
        var that = this;
        var elemStyle = getComputedStyle(elem);
        console.log(elemStyle.paddingTop);
        console.log(elemStyle.paddingBottom);
        console.log(elem.scrollHeight);
        var elemHeight = elem.scrollHeight;
        console.log(elemHeight);
        alert(elemHeight + 'px');
    }, false);
}

task12();

// 13
// Дан элемент #elem с горизонтальной полосой прокрутки.
// По нажатию на кнопку выведите реальную ширину элемента с учетом прокрутки.
function task13() {
    var elem = document.querySelector('#elem13'),
        button = document.querySelector('#but13');
    button.addEventListener('click', function (e) {
        var that = this;
        var elemWidth = elem.scrollWidth;
        alert(elemWidth + 'px');
    }, false);
}

task13();

// 14
// Дан элемент #elem с вертикальной полосой прокрутки.
// По нажатию на кнопку прокрутите его до позиции 100px от нижнего края элемента.
function task14() {
    var elem = document.querySelector('#elem14'),
        button = document.querySelector('#but14');
    button.addEventListener('click', function (e) {
        var that = this;
        elem.scrollTop = elem.scrollHeight - 200;
    }, false);
}

task14();

// Прокрутка страницы
// 15
// Дана страница с вертикальной полосой прокрутки.
// По нажатию на кнопку узнайте на сколько страница прокручена по вертикали.
alert(pageXOffset);
// 16
// Дана страница с горизонтальной полосой прокрутки.
// По нажатию на кнопку узнайте на сколько страница прокручена по горизонтали.
alert(pageXOffset);

// Прокрутка страницы
// 17
// Дана страница с горизонтальной и вертикальной полосами прокрутки.
// По нажатию на кнопку прокрутите ее в точку 300px слева, 500px сверху.
function task17() {
    var button = document.querySelector('#button17');
    button.addEventListener('click', function (e) {
    window.scrollTo(300, 500);
    }, false);
}

task17();
// 18
// Дана страница с вертикальной полосой прокрутки.
// По нажатию на кнопку прокрутите на 300px вниз от текущего положения.
function task18() {
    var button = document.querySelector('#button18');
    button.addEventListener('click', function (e) {
    window.scrollBy(0, 300);
    }, false);
}

task18();

// Практика
// 19
// По нажатию на кнопку прокрутите страницу до самого низа.
function task19() {
    var button = document.querySelector('#button19');
    button.addEventListener('click', function (e) {
    console.log(document.documentElement.scrollHeight);
    window.scrollTo(0, document.documentElement.scrollHeight);
    }, false);
}

task19();

// 20
// По нажатию на кнопку прокрутите страницу на 400px от текущего положения.
function task20() {
    var button = document.querySelector('#button20');
    button.addEventListener('click', function (e) {
    window.scrollBy(0, 400);
    }, false);
}

task20();

// 21
// По нажатию на кнопку проверьте, прокручена ли страница до самого низа.
// Если это так - прокрутите ее в положение 100px от верхнего края.
function task21() {
    var button = document.querySelector('#button21');
    console.log('ScrollTop: ' + document.documentElement.scrollTop);
    console.log('clientHeight: ' + document.documentElement.clientHeight);
    console.log('scrollHeight: ' + document.documentElement.scrollHeight)
    button.addEventListener('click', function (e) {
    var allHeight = document.documentElement.scrollHeight;
    if (allHeight - document.documentElement.scrollTop == document.documentElement.clientHeight) {
        window.scrollBy(0, -document.documentElement.scrollTop);
    }
    }, false);
}

task21();

// 22
// Дан элемент #elem. По клику на него увеличьте его ширину и высоту в 2 раза.
function task22() {
    var elem = document.querySelector('.elem22');
    elem.addEventListener('click', function (e) {
        var that = this,
            elemHeight = that.offsetHeight,
            elemWidth = that.offsetWidth;
        that.style.height = elemHeight * 2 + 'px';
        that.style.width = elemWidth * 2 + 'px';
    }, false);
}

task22();