// Продвинутая работа с событиями в JavaScript

// На elem.onclick
// 1
// Даны картинки. Привяжите к каждой картинке событие,
// чтобы по клику на картинку алертом выводился ее src.
function task1() {
    var images = document.querySelectorAll('.img1');
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = func1;
    }
    function func1() {
        alert(this.getAttribute('src'));
        console.log(this.getAttribute('src'));
    }
}

task1();

// На addEventListener, removeEventListener
// 2
// Даны ссылки. Привяжите всем ссылкам событие
// - по наведению на ссылку в атрибут title запишется ее текст.
function task2() {
    var anchors = document.querySelectorAll('.link2');
    for (var i = 0; i < anchors.length; i++) {
        anchors[i].addEventListener('mouseover', function (e) {
            e.preventDefault();
            var that = this;
            that.setAttribute('title', that.innerHTML);
        }, false);
    }
}

task2();

// 3
// Привяжите всем ссылкам событие
// - по наведению на ссылку в конец ее текста дописывается
// ее href в круглых скобках.
function task3() {
    var anchors = document.querySelectorAll('.link3');
    for (var i = 0; i < anchors.length; i++) {
        anchors[i].addEventListener('mouseover', function(e) {
            e.preventDefault();
            var that = this;
            that.innerHTML += " " + '(' + that.getAttribute('href') + ')';
        }, false);
    }
}
task3();

// 4
// Дополните предыдущую задачу: после первого наведению на ссылку
// следует отвязать от нее событие, которое добавляет href в конец текста.

function task4() {
    var anchors = document.querySelectorAll('.link4');
    for (var i = 0; i < anchors.length; i++) {
        anchors[i].addEventListener('mouseover', func4, false);
    }
    function func4(e) {
        e.preventDefault();
        var that = this;
        that.innerHTML += " " + '(' + that.getAttribute('href') + ')';
        that.removeEventListener('mouseover', func4, false);
    }
}
task4();

// 5
// Привяжите всем инпутам следующее событие
// - по потери фокуса каждый инпут выводит свое value в абзац с id="test".
function func5() {
    var inputs = document.querySelectorAll('.inp5'),
        par = document.getElementById('test');
    console.log(inputs);
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('blur', func5, false);
    }
    function func5() {
        var that = this;
        par.innerHTML += that.value + '<br/>';
    }
}
func5();

// 6
// Для всех инпутов сделайте так, чтобы они выводили свой value
// алертом при нажатии на любой из них, но только по первому нажатию.
// Повторное нажатие на инпут не должно вызывать реакции.
function func6() {
    var inputs = document.querySelectorAll('.inp6');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('click', func5, false);
    }
    function func5() {
        var that = this;
        alert(that.value);
        that.removeEventListener('click', func5, false);
    }
}
func6();

// 7
// Даны абзацы с числами.
// По нажатию на абзац в нем должен появится квадрат числа, которое он содержит
function task7() {
    var par = document.querySelectorAll('.tx7');
    for (var i = 0; i < par.length; i++) {
        par[i].addEventListener('click', func7, false);
    }
    function func7() {
        var that = this;
        that.innerHTML = Math.pow(parseInt(that.innerHTML), 2);
        that.removeEventListener('click', func7, false);
    }
}
task7();

// 8
// Даны инпуты. Сделайте так, чтобы все инпуты по потери фокуса проверяли
// свое содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в атрибуте data-length.
// Если вбито правильное количество,
// то граница инпута становится зеленой, если неправильное - красной.
function task8() {
    var inps = document.querySelectorAll('.inp8');
    for (var i = 0; i < inps.length; i++) {
        inps[i].addEventListener('blur', func8, false);
    }
    function func8() {
        var that = this;
        if (that.dataset.length == that.value.length) {
            that.style.borderRight = '2px solid #00ff00';
        } else {
            that.style.borderRight = '2px solid #ff0000';
        }
    }
}
task8();

// 9
// Даны дивы. По первому нажатию на каждый див он красится красным фоном,
// по второму красится обратно и так далее каждый клик происходит чередование фона.
// Сделайте так, чтобы было две функции: одна красит в красный цвет,
// другая в зеленый и они сменяли друг друга через removeEventListener.
function task8() {
    var divs = document.querySelectorAll('.dv1');
    for (var i = 0; i < divs.length; i++) {
        divs[i].addEventListener('click', func1, false);
    }
    function func1() {
        var that = this;
        that.style.backgroundColor = 'red';
        that.removeEventListener('click', func1, false);
        that.addEventListener('click', func2, false);
    }
    function func2() {
            var that = this;
            that.style.backgroundColor = 'green';
            that.removeEventListener('click', func2, false);
            that.addEventListener('click', func1, false);
        }
}
task8();