// Задачи на работу с таймерами в JavaScript

// Задачи для решения
// 1
//  Создайте отсчет от 0 до бесконечности:

function goUp() {
    window.timerId = window.setInterval(timer, 1000);
}
function timer() {
    var elem = document.querySelector('#text1');
    elem.value = parseInt(elem.value) + 1;
}
function stop() {
    window.clearInterval(window.timerId);
    console.log('stop');
}

// 2
// Создайте отсчет с кнопкой остановки:
function goUp2() {
    window.timerId = window.setInterval(timer2, 1000);
    var elem = document.querySelector('#input21');
    elem.disabled = false;
}
function timer2() {
    var elem = document.querySelector('#text2');
    elem.value = parseInt(elem.value) + 1;
}
function stop2() {
    var elem = document.querySelector('#input21');
    elem.disabled = true;
    window.clearInterval(window.timerId);
    console.log('stop');
}

// 3
// Создайте тикающие часики:
function getTime() {
    var elem = document.querySelector('.watch3'),
        date = new Date();
    elem.innerHTML = date.getHours() + ':' + date.getMinutes() + ":" + date.getSeconds();
}
function goTime() {
    window.setInterval(getTime, 1000);
}

// 4
// Создайте таймер обратного отсчета:

function goDown() {
    var elem = document.querySelector('.timer4'),
        stop = document.querySelector('.timer4stop'),
        input = document.querySelector('#input4');
    input.disabled = true;
    if (elem.innerHTML > 0 ) {
        elem.innerHTML = parseInt(elem.innerHTML) - 1;
    } else {
        stop4();
        stop.innerHTML = 'Отчет окончен!';
    }
    console.log(elem.innerHTML);
}
function start4() {
    window.timerId4 = window.setInterval(goDown, 600);
}
function stop4() {
    window.clearInterval(window.timerId4);
}

// 5
// Создайте простой слайдер:

function changeImg() {
    var elem = document.querySelector('.img5');
    if (window.num == undefined || window.num == 3) {
        window.num = 1;
    } else {
        window.num += 1;
    }
    // console.log(elem);
    // console.log(window.number);
    elem.src = 'img/'+'img'+window.num+'.png';
}
function changeTimer() {
    window.timerId5 = window.setInterval(changeImg, 1000);
}

// 6
// Создайте карусель:
function changeTimer6() {
    window.timerId6 = window.setInterval(changeImg6, 1000);
    document.querySelector('#input6').disabled = true;
    document.querySelector('#input61').disabled = false;
}
function changeTimer6Stop() {
    window.clearInterval(window.timerId6);
    document.querySelector('#input6').disabled = false;
    document.querySelector('#input61').disabled = true;
}
function changeImg6() {
    var images = document.querySelectorAll('.img6');
    // console.log(images);
    var tmp = images[0].src;
    images[0].src = images[1].src;
    images[1].src = images[2].src;
    images[2].src = tmp;
}

// 8
// Создайте отсчет до полуночи:
function getTimetoNight() {
    var date = new Date(),
        dateN = new Date(date.getFullYear(),date.getMonth(), date.getDate(), 23, 59, 59),
        hour = document.querySelector('td#hour'),
        minute = document.querySelector('td#minute'),
        seconds = document.querySelector('td#sec');
    hour.innerHTML = dateN.getHours() - date.getHours();
    minute.innerHTML = getNum(dateN.getMinutes() - date.getMinutes());
    seconds.innerHTML = getNum(dateN.getSeconds() - date.getSeconds());
    console.log(hour.innerHTML);
    window.setTimeout(getTimetoNight, 1000);
}
function getNum(num) {
    if (num <= 9) {
        return '0' + num;
    } else {
        return num;
    }
}
