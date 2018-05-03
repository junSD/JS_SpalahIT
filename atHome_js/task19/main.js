// Задачи на основы работы с DOM в JavaScript

// События через атрибуты
// 1, 2, 3, 4
function buttonClick1() {
    alert('Привет!')
}

// Метод getElementById и работа с атрибутами
// 5
function buttonClick5() {
    var elem = document.getElementById('text5');
    alert(elem.value);
}

// 6
function buttonClick6() {
    var elem = document.getElementById('text6');
    elem.value = 'Ой, я поменял свой текст';
}

// 7
function buttonClick7() {
    var elem = document.getElementById('img7');
    elem.src = 'img/38.jpg';
}

// Работа с this
// 8
function buttonClick8(elem) {
    alert(elem.value);
}

// 9
function buttonClick9(elem) {
   elem.value = "Я поменял текст!"
}

// 10
function buttonClick10(elem) {
    elem.value = "Я поменял текст!"
}
function buttonClick101(elem) {
    elem.value = "Я поменял текст еще раз!"
}

// 11
function buttonClick11(elem) {
    elem.value = "Ку-ку!"
}

// 12

function buttonClick12(elem) {
    elem.disabled = true;
    elem.value = "На меня уже не нажать!"
}

// 13
function buttonClick13(elem) {
    elem.src = 'img/38.jpg';
}
function buttonClick131(elem) {
    elem.src = 'img/1218.jpg';
}

// Работа с CSS
// 14
function buttonClick14() {
    var elem = document.getElementById('text14');
    elem.style.color = "red";
    elem.style.width = '400px';
}

// 15
function buttonClick15() {
    var elem = document.getElementById('text15');
    elem.style.display = "none";
}
function buttonClick151() {
    var elem = document.getElementById('text15');
    elem.style.display = "inline-block";
}

// 16
function buttonClick16() {
    var elem = document.getElementById('text16');
    elem.style.width = "300px"
    elem.style.padding = "15px 10px";
    elem.style.color = "red";
    elem.style.boxShadow = "0 2px 2px 0 #000";
    elem.style.backgroundColor = "#fff";
    elem.style.borderRadius = '30px';
    elem.value = "Меняю текст и CSS"
}

// 17
function buttonClick17(elem) {
    elem.value = "Меня нельзя нажать";
    elem.disabled = true;
    var inp171 = document.getElementById('input171');
    inp171.style.display = "inline-block";
}

function buttonClick171(elem) {
    elem.style.display = 'none';
    var el1 = document.getElementById('input17');
    el1.value = 'На меня снова можно нажимать';
    el1.disabled = false;
}

// 18
function buttonClick18(elem) {
    elem.value = Number(elem.value) + 1;
}

// 19
function buttonClick19() {
    var elem = document.getElementById('text19');
    elem.style.cssFloat = 'right';
    elem.value = "Плавает справо";
}

// 20
function buttonClick20() {
    var elem = document.getElementById('text20');
    elem.className = 'www vvv rrr';
    elem.value = "Добавились классы: www vvv rrr";
}

// Закрепление пройденного
// 21
function buttonClick21() {
    var elem1 = document.getElementById('text21');
    var elem2 = document.getElementById('text211');
    var temp = elem1.value;
    elem1.value = elem2.value;
    elem2.value = temp;
}

// 22
// По нажатию на кнопку в нижнем инпуте появится квадрат числа из верхнего инпута.
function buttonClick22() {
    var elem1 = document.getElementById('text22');
    var elem2 = document.getElementById('text221');
    elem2.value = Math.pow(parseInt(elem1.value),2);
}

// 23
// По нажатию на кнопку в нижнем инпуте появится квадрат
// числа из верхнего инпута. Если введено не число - должна показаться ошибка.
function buttonClick23() {
    var elem1 = document.getElementById('text23');
    var elem2 = document.getElementById('text231');
    if (!isNaN(elem1.value)) {
        elem2.value = Math.pow(parseInt(elem1.value),2);
    } else {
        alert('Введено не число');
    }
}

// 24
// Обратите внимание на курсор в различных состояниях.
function buttonClick24() {
    var elem = document.getElementById('input24');
    elem.disabled = true;
    elem.style.cursor = 'wait';
}

// 25
function buttonClick25(elem) {
    var pos = elem.value.indexOf('+');
    console.log(pos);
    var value = elem.value.substr(pos, 1);
    console.log(value);
    var text = document.getElementById('text25');
    text.value += value;
}