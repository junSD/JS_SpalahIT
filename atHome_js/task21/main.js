// Работа с датами в JavaScript

// Задачи для решения
// Работа с new Date
// 1
//  Выведите на экран текущий день.

function currentDate() {
    var elem = document.querySelector('.zz1'),
        date = new Date(),
        currentDate = date.getDate();
        console.log(currentDate);
    elem.innerHTML = elem.innerHTML + currentDate;
}

// 2
// Выведите на экран текущий месяц
function currentMonth() {
    var elem = document.querySelector('.zz2'),
        date = new Date(),
        currentMonth = date.getMonth() + 1;
        console.log(currentMonth);
    elem.innerHTML = elem.innerHTML + currentMonth;
}

// 3
// Выведите на экран текущий год.
function currentYear() {
    var elem = document.querySelector('.zz3'),
        date = new Date(),
        currentYear = date.getFullYear();
        console.log(currentYear);
    elem.innerHTML = elem.innerHTML + currentYear;
}

// 4
// Выведите на экран текущую дату-время в формате '12:59:59 31.12.2014'.
// Для решения этой задачи напишите функцию,
// которая будет добавлять 0 перед днями и месяцами,
// которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014).

function getCurrentTime() {
    var elem = document.querySelector('.zz4'),
        date = new Date(),
        day = date.getDate(),
        month = date.getMonth() + 1,
        year = date.getFullYear(),
        hours = date.getHours(),
        minute = date.getMinutes(),
        second = date.getSeconds();
    if (day <= 9 ) {
        day = '0' + day;
    }
    if (month <= 9) {
        month = '0' + month ;
    }
    elem.innerHTML = hours+":"+minute+":"+second+" "+day+'.'+month+'.'+year;
}

// Работа с getDay
// 5
// Выведите на экран номер текущего дня недели.
function getCurrentDay() {
    var elem = document.querySelector('.zz5'),
        date = new Date();
    elem.innerHTML = date.getDay();
}

// 6
// Выведите на экран текущий день недели (словом, по-русски).
// Создайте для этого вспомогательную функцию showDay,
// которая параметром принимает число, а возвращает день недели по-русски.
function showDay(day) {
    var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    return days[day];
}
function getCurrentDayRus() {
    var elem = document.querySelector('.zz6'),
        date = new Date(),
        day = date.getDay();
        console.log(day);
        alert(showDay(day));
    elem.innerHTML = elem.innerHTML + showDay(day);
}

// 7
// Узнайте, какой день был 7-го января 2015 года
function getDayFromTo() {
    var elem = document.querySelector('.zz7'),
        date = new Date(2015, 1, 7),
        day = date.getDay();
        console.log(day);
        alert(showDay(day));
    elem.innerHTML = elem.innerHTML + showDay(day);
}

// Работа с getTime
// 8
// Выведите на экран количество минут
// с 1-го января 1970 года до настоящего момента времени
function getMinFromTo() {
    var elem = document.querySelector('.zz8'),
        date = new Date(),
        minute = date.getTime() / 1000 / 60 ;
        console.log(minute);
    elem.innerHTML = elem.innerHTML + minute;
}

// Работа с Date.parse
// 9
// Выведите на экран количество часов,
// прошедшее между 1 марта 1988 года и текущим моментом с помощью Date.parse;

function getMinFromTo2() {
    var elem = document.querySelector('.zz9'),
        hoursNow = parseFloat(Date.parse('2018-04-02T15:45:45')/(1000*60*60)),
        hoursOld = parseFloat(Date.parse('1988-03-01T15:45:45')/(1000*60*60)),
        resHours = hoursNow - hoursOld;
    elem.innerHTML = elem.innerHTML + resHours;
}

// Разность между датами
// 10
// Выведите на экран количество секунд с начала дня до настоящего момента времени.

function getMinFromTo3() {
    var elem = document.querySelector('.zz10'),
        dateNow = new Date(),
        dateEarly = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 0, 0, 0),
        currentSec = dateNow.getTime(),
        dayStart = dateEarly.getTime(),
        resSec = currentSec - dayStart;
    elem.innerHTML = elem.innerHTML + Math.floor(resSec/(1000*60*60));
}

// Задачи
// 11
// Выведите на экран количество секунд, которое осталось до конца дня

function getSecDay() {
    var elem = document.querySelector('.zz11'),
        dateNow = new Date(),
        datelater = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59),
        currentSec = dateNow.getTime(),
        dayEnd = datelater.getTime(),
        resSec = dayEnd - currentSec;
    elem.innerHTML = elem.innerHTML + Math.floor(resSec/(1000*60*60));
}

// 12
// Создайте инпут, в который пользователь вводит дату своего рождения в формате
// '2014-12-31' (с конкретным годом). По потери фокуса выведите под инпутом
// сколько дней осталось до его дня рождения. Воспользуйтесь методом Date.parse.

function getAmountOfDays(text) {
    var res = document.querySelector('.days');
    var date = new Date();
    var arr = text.value.split('-');
    var willBe = Math.floor(Date.parse(text.value)/(1000*60*60*24));
    var year;
    var amountDay;
    arr[0] = date.getFullYear();
    var str = arr.join('-');
    console.log(str);
    console.log(date);
    var now = Math.floor(Date.parse(date)/(1000*60*60*24));
    console.log(now);
    var dayInput = Math.floor(Date.parse(str)/(1000*60*60*24));
    console.log(dayInput);
    if (now - dayInput > 0) {
        amountDay = 365 - (now - dayInput);
        year = Math.floor((dayInput - willBe)/365 + 1);
    } else {
        amountDay = dayInput - now;
        year = Math.floor((dayInput - willBe)/365);
    }
    res.innerHTML = amountDay + ' дней до Дня Рождения!' + ' Вам будет ' + year;
}