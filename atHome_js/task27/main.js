// Задачи на основы работы с объектом Event на JavaScript

// На координаты
// 1
function task1() {
    var div = document.querySelector('#elem1');
    div.addEventListener('mousemove', function (e) {
        var that = this;
        var x = e.clientX;
        var y = e.clientY;
        div.innerHTML = 'X: ' + x + ' ; ' + 'Y: ' + y;
    },false);

}
task1();
// 2
function task2() {
    var div = document.querySelector('#elem21'),
        div2 = document.querySelector('.elem2');
    div.addEventListener('click', function (e) {
        console.log(e);
        var that = this;
        div2.style.top = e.layerY + 'px';
        div2.style.left = e.layerX + 'px';
        console.log('top: ' + div2.style.top);
        console.log('left: ' + div2.style.left);
    },false);
console.log(div2.offsetParent);
console.log(div2.offsetTop);
console.log(div2.offsetLeft);
}
task2();

// 3
function task3() {
    var div = document.querySelector('#elem31'),
        div2 = document.querySelector('.elem3');
    div.addEventListener('click', function (e) {
        var style = getComputedStyle(div2, '');
        div2.style.top = (e.layerY - parseInt(style.width) / 2) + 'px';
        div2.style.left = (e.layerX - parseInt(style.height) / 2) + 'px';
        console.log('top: ' + div2.style.top);
        console.log('left: ' + div2.style.left);
    },false);
}
task3();

// На клавиши
// 4
function task4() {
    var text = document.querySelector('#text4'),
        code = document.querySelector('#keycode');
    text.addEventListener('keyup', function (e) {
        e.preventDefault();
        code.innerHTML = e.keyCode;
    }, false);
}
task4();

// 5
function task5() {
    var text = document.querySelector('#text5'),
        code = document.querySelector('#keycode2');
    text.addEventListener('keyup', function (e) {
        e.preventDefault();
        code.innerHTML = String.fromCharCode(e.keyCode).toLowerCase();
    }, false);
}
task5();

// 6
// Дан элемент. Сделайте так, чтобы по клику на него он красился в красный цвет,
// но только если в момент клика нажата клавиша Ctrl.
function task6() {
    var elem = document.querySelector('.elem6');
    elem.addEventListener('click', function(e) {
        var that = this;
        if (e.ctrlKey) {
            that.style.color = 'red';
        }
    }, false);
}
task6();

// 7
// Дан элемент. Сделайте так, чтобы при клике на него и нажатой клавише Ctrl
// - в его текст записывалось '1',
// при нажатой клавише Alt - '2', а при нажатой клавише Shift - '3'.
function task7() {
    var elem = document.querySelector('.elem7');
    elem.addEventListener('click', function (e) {
        var that = this,
            flag = true;
        switch (flag) {
            case e.ctrlKey:
                that.innerHTML = '1';
                console.log("!!!");
                break;
            case e.altKey:
                that.innerHTML = '2';
                break;
            case e.shiftKey:
                that.innerHTML = '3';
                break;
        }
    }, false);
}
task7();

// Практика
// 8
// Дан инпут. В него вводится текст и нажимается клавиша Enter
// (ее код имеет номер 13). Сделайте так, чтобы по нажатию
// Enter введенный текст попадал в абзац под инпутом, а содержимое инпута очищалось.
function task8() {
    var input = document.querySelector('#text8'),
        text = document.querySelector('.text81');
    input.addEventListener('keydown', function (event) {
        var that = this;
        if (event.keyCode == 13) {
            text.innerHTML = input.value;
            input.value = "";
        }
    }, false);
}
task8();