// Продвинутая работа с DOM на JavaScript

// Работа с классами
// 1
// Дан элемент #elem. Добавьте ему класс www.
function task1() {
    var elem = document.querySelector('#elem1');
    elem.addEventListener('click', func1, false);
    function func1() {
        var that = this;
        that.classList.add('www');
        that.removeEventListener('click', func1, false);
    }
}

task1();

// 2
// Дан элемент #elem. Удалите у него класс www.
function task2() {
    var elem = document.querySelector('#elem2');
    elem.addEventListener('click', func2, false);
    function func2() {
        var that = this;
        that.classList.remove('www');
        that.removeEventListener('click', func2, false);
    }
}

task2();

// 3
// Дан элемент #elem. Проверьте наличие у него класса www.
function task3() {
    var elem = document.querySelector('#elem3');
    elem.addEventListener('click', func3, false);
    function func3() {
        var that = this;
        var check = that.classList.contains('www');
        if (check) {
            alert("Да!")
        }
        that.removeEventListener('click', func3, false);
    }
}

task3();

// 4
// Дан элемент #elem. Добавьте ему класс www, если его нет и удалите - если есть.
function task4() {
    var elem = document.querySelector('#elem4');
    elem.addEventListener('click', func4, false);
    function func4() {
        var that = this;
        that.classList.toggle('www');
    }
}

task4();

// 5
// Дан элемент #elem. Узнайте количество его классов
function task5() {
    var elem = document.querySelector('#elem5');
    elem.addEventListener('click', func5, false);
    function func5() {
        var that = this;
        var amount = that.classList.length;
        var p = document.createElement('p');
        p.innerHTML = 'Колличество классов: ' + amount;
        that.parentNode.insertBefore(p, that.nextSibling);
        that.removeEventListener('click', func5, false);
    }
}

task5();

// 6
// Дан элемент #elem. Выведите последовательно алертом его классы.
function task6() {
    var elem = document.querySelector('#elem6');
    elem.addEventListener('click', func6, false);
    function func6() {
        var that = this;
        var ul = document.createElement('ul');
        for (var i = 0; i < that.classList.length; i++) {
            var li = document.createElement('li');
            li.innerHTML = that.classList[i];
            ul.appendChild(li);
        }
        that.parentNode.insertBefore(ul, that.nextSibling);
        that.removeEventListener('click', func6, false);
    }
}

task6();

// Работа с CSS
// 7
// Дан элемент #elem. Сделайте его красного цвета, размером 30px,
// добавьте ему границу. Решите задачу с помощью свойства cssText.
function task7() {
    var elem = document.querySelector('#elem7');
    elem.addEventListener('click', func7, false);
    function func7() {
        var that = this;
        that.style.cssText = 'background-color: red; width: 100px; height: 100px; border: 1px solid green; color: #fff;';
        that.removeEventListener('click', func7, false);
    }
}

task7();

// Свойство tagName
// 8,9
// Дан элемент #elem. По клику на него выведите название его тега.
function task8() {
    var elem = document.querySelector('#elem8');
    elem.addEventListener('click', func8, false);
    function func8() {
        var that = this;
        alert(that.tagName.toLowerCase());
        that.removeEventListener('click', func8, false);
    }
}

task8();

// 10
// Даны элементы с классом www.
// Добавьте каждому элементу в конец название его тега в нижнем регистре.
function task10() {
    var elem = document.querySelectorAll('.ww10');
    for (var i = 0; i < elem.length; i++) {
        elem[i].addEventListener('click', func10, false);
    }
    function func10() {
        var that = this;
        that.innerHTML += ' ' + that.tagName.toLowerCase();
        that.removeEventListener('click', func10, false);
    }
}

task10();

// Вставка элементов через appendChild
// 11
// Дан ol. Вставьте ему в конец li с текстом 'пункт'.
function task11() {
    var elem = document.querySelector('.ol10');
    elem.addEventListener('click', func11, false);
    function func11() {
        var that = this;
        var li = document.createElement('li');
        li.innerHTML = "Пункт";
        that.appendChild(li);
        that.removeEventListener('click', func11, false);
    }
}

task11();

// 12
// Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так,
// чтобы каждый элемент стоял в своем li.
var arr = ['text1', 'text2', "text3", 'text4'];
function task12(arr) {
    var elem = document.querySelector('.ul12');
    for (var i = 0; i < arr.length; i++) {
        var li = document.createElement('li');
        li.innerHTML = arr[i];
        elem.appendChild(li);
    }
    console.log(elem);
    return elem;
}

task12(arr);

// Привязывание событий при вставке
// 13
// Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так,
// чтобы каждый элемент стоял в своем li. Сделайте так,
// чтобы к вставляемым li было привязано
// следующее событие: по нажатию на li она должна вывести на экран свой текст.
var arr = ['text1', 'text2', "text3", 'text4'];
function  task13() {
    var ul = document.querySelector('.ul13');
    for (var i = 0; i < arr.length; i++) {
        var li = document.createElement('li');
        li.innerHTML = arr[i];
        li.addEventListener('click', func13, false);
        ul.appendChild(li);
    }
    function func13() {
        var that = this;
        alert(that.innerHTML);
        that.removeEventListener('click', func13, false);
    }
}
task13(arr);

// Вставка элементов через insertBefore
// 14
// Дан элемент ul, а в нем li #elem.
// Вставьте перед элементом #elem новую li с текстом '!!!'.
function task14() {
    var ul = document.querySelector('.ul14');
    var li = document.createElement('li');
    li.innerHTML = '!!!';
    console.log(ul.firstElementChild);
    ul.insertBefore(li,ul.firstElementChild);
}
task14();

// Вставка элементов через insertAdjacentHTML
// 15
// Дан элемент #elem. Вставьте перед ним span с текстом '!!!'.
function task15() {
    var elem = document.querySelector('.elem15');
    elem.insertAdjacentHTML('beforeBegin', '<span>!!!</span>');
}
task15();

// 16
// Дан элемент #elem. Вставьте после него span с текстом '!!!'.
function task16() {
    var elem = document.querySelector('.elem16');
    elem.insertAdjacentHTML('afterEnd', '<span>!!!</span>');
}
task16();

// 17
// Дан элемент #elem. Вставьте ему в начало span с текстом '!!!'.
function task17() {
    var elem = document.querySelector('.elem17');
    elem.insertAdjacentHTML('afterBegin', '<span>!!!</span>');
}
task17();

// 18
// Дан элемент #elem. Вставьте ему в конец span с текстом '!!!'.
function task18() {
    var elem = document.querySelector('.elem18');
    elem.insertAdjacentHTML('beforeEnd', '<span>!!!</span>');
}
task18();

// Потомки
// 19
// Дан элемент #elem.
// Найдите первого потомка этого элемента и сделайте его текст красного цвета.
function task19() {
    var elem = document.querySelector('.elem19');
    elem.firstElementChild.style.color = 'red';
}
task19();

// 20
// Дан элемент #elem.
// Найдите последнего потомка этого элемента и сделайте его текст красного цвета.
function task20() {
    var elem = document.querySelector('.elem20');
    elem.lastElementChild.style.color = 'red';
}
task20();

// 21
// Дан элемент #elem.
// Найдите всех потомков этого элемента и добавьте им в конец текст '!'.
function task21() {
    var elem = document.querySelector('.elem21');
    for (var i = 0; i < elem.children.length; i++) {
        elem.children[i].innerHTML += ' !';
    }

}
task21();

// Соседи
// 22
// Дан элемент #elem. Найдите его соседа сверху и добавьте ему в конец текст '!'.
function task22() {
    var elem = document.querySelector('.elem22');
    elem.previousElementSibling.innerHTML += ' !';
}
task22();

// 23
// Дан элемент #elem. Найдите его соседа снизу и добавьте ему в конец текст '!'.
function task23() {
    var elem = document.querySelector('.elem23');
    elem.nextElementSibling.innerHTML += ' !';
}
task23();

// 24
// Дан элемент #elem. Найдите его соседа снизу его соседа снизу
// (следующий элемент за соседним) и добавьте ему в конец текст '!'.
function task24() {
    var elem = document.querySelector('.elem24');
    elem.nextElementSibling.nextElementSibling.innerHTML += ' !';
}
task24();

// Родители
// 25
// Дан элемент #elem. Найдите его родителя и покрасьте его в красный цвет.
function task25() {
    var elem = document.querySelector('.elem25');
    elem.parentElement.style.border = '1px solid red';
}
task25();

// 26
// Дан элемент #elem. Найдите родителя его родителя и покрасьте его в красный цвет.
function task26() {
    var elem = document.querySelector('.elem26');
    elem.parentElement.parentElement.style.border = '1px solid red';
}
task26();

// Удаление и клонирование
// 27
// Дан элемент #parent, внутри него дан элемент #child. Дана кнопка.
// По нажатию на эту кнопку удалите элемент #child.
function task27() {
    var elemDiv = document.querySelector('#parent27'),
        elemspan = document.querySelector('#child'),
        button = document.querySelector('#button27');
    button.addEventListener('click', function(e) {
        e.preventDefault();
        elemDiv.removeChild(elemspan);
        this.disabled = true;
    }, false);
}
task27();

// 28
// Дан ol. По нажатию на кнопку получите его последнего потомка и удалите его.
function task28() {
    var elemOl = document.querySelector('.elem28'),
        childrenEl = elemOl.children,
        button = document.querySelector('#button28');
        console.log(childrenEl.length);
    button.addEventListener('click', function(e) {
        elemOl.removeChild(elemOl.lastElementChild);
        console.log('childrenEl.length: ' + childrenEl.length);
        if (!childrenEl.length) {
            this.disabled = true;
        }
    }, false);
}
task28();

// 29
// Дан элемент. Сделайте так, чтобы по нажатию по нему этот элемент удалялся.
// 30
// Дан ol, а внутри него li.
// Сделайте так, чтобы по нажатию на любую li эта li удалялась.
function task29() {
    var liArr = document.querySelectorAll('.elem29 li');
    for (var i = 0; i < liArr.length; i++) {
        console.log(liArr[i]);
        liArr[i].addEventListener('click', function (e) {
            var that = this;
            that.parentElement.removeChild(that);
        }, false);
    }
}
task29();

// Клонирование
// 31
// Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут.
function task31() {
    var inputText = document.querySelector('#inp31'),
        button = document.querySelector('#but31'),
        clone;
    button.addEventListener('click', function (e) {
        var that = this;
        clone = inputText.cloneNode(true);
        clone.value = 'text1';
        console.log(clone);
        inputText.parentElement.appendChild(clone);
    }, false);
}
task31();

// Практика
// 32
// Дан массив. Создайте ul через createElement,
// затем вставьте каждый элемент этого массива в отдельную li внутри этой ul,
// затем вставьте эту ul в конец body.
arr = ['Point 1', 'Point 2', 'Point 3', 'Point 4', 'Point 5', 'Point 6']
function task32(arr) {
    var ul = document.createElement('ul'),
        div = document.createElement('div'),
        par = document.querySelector('#p32');
    for (var i = 0; i < arr.length; i++) {
        var li = document.createElement('li');
        li.innerHTML = arr[i];
        ul.appendChild(li);
    }
    par.parentElement.insertBefore(div.appendChild(ul), par.nextSibling);
}
task32(arr);

// 33
// Дан инпут. Рядом с ним находится кнопочка "+".
// По нажатию на эту кнопку под нашим инпутом должен появится еще один пустой инпут.
function task33() {
    var inputText = document.querySelector('#text33'),
        button = document.querySelector('#but33');
    button.addEventListener('click', function (e) {
        var that = this;
        var clone = inputText.cloneNode(true);
        inputText.parentNode.appendChild(clone);
    }, false);
}
task33();

// 34
// Дан инпут. В него вводится число. По потери фокуса сделайте так,
// чтобы каждая цифра вставилась в новый инпут. Инпутов для
// цифр изначально не существует, они должны создаться в процессе работы скрипта.
function task34() {
    var inpText = document.querySelector('#text34'),
        tdRight = document.querySelector('.td34');
    inpText.addEventListener('blur', function (e) {
        var that = this;
        var arrValue = that.value.split('');
        for (var i = 0; i < arrValue.length; i++) {
            var newInp = document.createElement('input');
            newInp.setAttribute('type', 'text');
            newInp.style.marginBottom = '5px';
            newInp.value = arrValue[i];
            tdRight.appendChild(newInp);
        }
    }, false);
}
task34();

// 35
// Дана кнопка.
// Сделайте так, чтобы по нажатию на эту кнопку, скрывался родитель этой кнопки.
function task35() {
    var button = document.querySelector('.but35');
    button.addEventListener('click', function (e) {
        var that = this;
        that.parentNode.style.display = 'none';
    }, false);
}
task35();