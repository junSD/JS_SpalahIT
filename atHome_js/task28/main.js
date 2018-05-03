// Продвинутая работа с объектом Event на JavaScript

// 1
// Дан ul с несколькими li. По нажатию на любую li на экран должен
// вывестись ее текст.
// Решить не через делегирование, а обычным способом - задача разминочная.
function task1() {
    var liArr = document.querySelectorAll('ul.t1 li');
    for (var i = 0; i < liArr.length; i++) {
        liArr[i].addEventListener('click', function (e) {
            var that = this;
            alert(that.innerHTML);
        }, false);
    }

}
task1();

// 2
// Дан ul с несколькими li и кнопка.
// Сделайте так, чтобы по нажатию на кнопку в конец ul добавлялась
// новая li с текстом 'пункт'.
// Задачу решите с помощью методов createElement и appendChild.
function task2() {
    var ul = document.querySelector('ul.t2'),
        button = document.querySelector('#inp2');
    button.addEventListener('click', function (e) {
        e.preventDefault();
        var that = this;
        var li = document.createElement('li');
        li.innerHTML = 'пункт';
        ul.appendChild(li);
    }, false);
}
task2();

// 3
// Дан div 200 на 200 пикселей. Сделайте так,
// чтобы по клику на этот div на экран выводились координаты места нажатия.
// Задача на основы работы с объектом Event.
function task3() {
    var div = document.querySelector('.d3');
    div.addEventListener('mousemove', function (e) {
        // console.log(e);
        var that = this;
        var x = e.offsetX;
        var y = e.offsetY;
        that.innerHTML = 'X: ' + x + " Y: " + y;
    }, false);
}
task3();

// Простое делегирование
// 4
// Дан ul с несколькими li.
// По нажатию на любую li на экран должен вывестись ее текст.
// Дана кнопка. Сделайте так, чтобы по нажатию на эту кнопку в конец ul
// добавлялась новая li с текстом 'пункт'.
// Сделайте так, чтобы вновь добавленные li также реагировали на нажатие.
// Задачу решите с помощью делегирования.
function task4() {
    var ul = document.querySelector('ul.t4'),
        button = document.querySelector('#inp3');
    ul.addEventListener('click', function (e) {
        alert(e.target.innerHTML);
    }, false);
    button.addEventListener('click', function (e) {
        var li = document.createElement('li');
        li.innerHTML = 'пункт';
        ul.appendChild(li);
    }, false);
}
task4();

// Универсальное делегирование
// 5
// Добавить !!!
function task5() {
    var ul = document.querySelector('ul.t5'),
        button = document.querySelector('#inp5');
    ul.addEventListener('click', function (e) {
        var target = e.target;
        console.log('target: ' + target.tagName);
        var li = target.closest('li');
        console.log('li: ' + li.tagName);
        if (li) {
            li.innerHTML += '!!!';
        }
    }, false);
    button.addEventListener('click', function (e) {
        var li = document.createElement('li');
        li.innerHTML = 'пункт';
        ul.appendChild(li);
    }, false);
}
task5();

// Практика
// 6
// Дана таблица с колонками 'имя', 'фамилия', 'удалить'.
// Сделайте под ней 2 инпута и кнопку.
// Если ввести в эти инпуты имя и фамилию и нажать на кнопку
// - в таблицу должен добавиться новый ряд.
// В каждом ряду должна быть кнопочка 'удалить'
// (третий столбец), по нажатию на которую этот ряд удалится.

// Также сделайте так, чтобы можно было поредактировать любую ячейку
// с именем и фамилией - по клику на ячейку в ней должен появиться
// инпут с текстом этой ячейки, этот текст можно поменять,
// нажать Enter - и инпут исчезнет, а информация в ячейке обновится.
function task6() {
    var name = document.querySelector('#name6'),
        secondName = document.querySelector('#secname6'),
        buttonApply = document.querySelector('#inp6'),
        table = document.querySelector('.table5');
    buttonApply.addEventListener('click', addData, false);
    function addData(e) {
        var that = this;
        var inpDel = document.createElement('button');
        inpDel.innerHTML = 'Удалить';
        var tr = createTr(name, secondName, inpDel);
        table.appendChild(tr);
        inpDel.addEventListener('click', deleteData, false);
            function deleteData(e) {
                var that = this,
                    tr = that.closest('tr');
                tr.parentNode.removeChild(tr);
    }
    }
    function createTr(name, secname, input) {
        var tr = document.createElement('tr'),
            tdName = document.createElement('td'),
            tdSName = document.createElement('td'),
            tdInput = document.createElement('td');
            tdName.innerHTML = name.value;
            tdSName.innerHTML = secname.value;
            tdInput.setAttribute('class', 'deleteRow');
            tdInput.appendChild(input);
        tr.appendChild(tdName);
        tr.appendChild(tdSName);
        tr.appendChild(tdInput);
        return tr;
    }
    table.addEventListener('click', editCell, false);
    function editCell(e) {
        // e.stopPropagation();
        var target = e.target,
        input = document.createElement('input'),
        tdArr = document.querySelectorAll('td');
        console.log(target);
        // var td = target.closest('td');
        if (target.tagName == 'TD' && !target.classList.contains('deleteRow')) {
            input.value = target.innerHTML;
            target.innerHTML = "";
            target.appendChild(input);
        }
        // if (td) {
        //     input.value = td.innerHTML;
        //     td.innerHTML = "";
        //     td.appendChild(input);
        // }
        input.addEventListener('keypress', addChanges, false);
        function addChanges(e) {
            e.stopPropagation();
            var target = e.target;
            var parent = target.parentNode;
            if (e.keyCode == 13) {
                parent.innerHTML = target.value;
            }
        }
    }
}
task6();

// 7
// Дана таблица с юзерами с двумя колонками: имя и фамилия.
// Под таблицей сделайте форму, с помощью которой можно будет добавить нового
// юзера в таблицу. Сделайте так, чтобы при клике на любую ячейку появлялся prompt,
// с помощью которого можно изменить текст ячейки. Задачу
// решите с помощью делегирования (то есть событие должно быть навешано на table).
function task7() {
    var name = document.querySelector('#name7'),
        secondName = document.querySelector('#secname7'),
        buttonApply = document.querySelector('#inp7'),
        table = document.querySelector('.table7');
    // ADD new user
    buttonApply.addEventListener('click', addData, false);
    function addData(e) {
        var that = this;
        var inpDel = document.createElement('button');
        var tr = createTr(name, secondName, inpDel);
        inpDel.innerHTML = 'Удалить';
        table.appendChild(tr);
        inpDel.addEventListener('click', deleteData, false);
        // DELETE TR
            function deleteData(e) {
                var that = this,
                    tr = that.closest('tr');
                tr.parentNode.removeChild(tr);
    }
    }
    // create new TR
    function createTr(name, secname, input) {
        var tr = document.createElement('tr'),
            tdName = document.createElement('td'),
            tdSName = document.createElement('td'),
            tdInput = document.createElement('td');
            tdName.innerHTML = name.value;
            tdSName.innerHTML = secname.value;
            tdInput.setAttribute('class', 'deleteRow');
            tdInput.appendChild(input);
        tr.appendChild(tdName);
        tr.appendChild(tdSName);
        tr.appendChild(tdInput);
        return tr;
    }
    // CLICK in TABLE - EDIT
    table.addEventListener('click', editCell, false);
    function editCell(e) {
        var target = e.target;
        if (target.tagName == 'TD' && !target.classList.contains('deleteRow')) {
            var text = prompt('Enter new data: ', target.innerHTML);
            target.innerHTML = text;
        }
    }
}
task7();