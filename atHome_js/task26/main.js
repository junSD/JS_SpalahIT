// Задачи на работу с метриками для window на JavaScript

// Задачи для решения
// 1
// Дана кнопка. По нажатию на эту кнопку выведите высоту окна браузера
function task1() {
    var button = document.querySelector('#but1');
    button.addEventListener('click', function (e) {
        var that = this;
        alert(document.documentElement.clientHeight);
    },false);

}
task1();

// 2
// Дана кнопка. По нажатию на эту кнопку прокрутите окно браузера до самого низа.
function task2() {
    var button = document.querySelector('#but2');
    button.addEventListener('click', function (e) {
        var that = this;
        var allHeight = document.documentElement.scrollHeight;
        document.documentElement.scrollTo(0, allHeight);
    },false);

}
task2();

// 3
// Дана кнопка. По нажатию на эту кнопку узнайте,
// есть ли у окна браузера вертикальная прокрутка.
function task3() {
    var button = document.querySelector('#but3');
    button.addEventListener('click', function (e) {
        var that = this;
        var allHeight = document.documentElement.scrollHeight;
        var clientWindow = document.documentElement.clientHeight;
        console.log(allHeight);
        console.log(clientWindow);
        if (allHeight == clientWindow) {
            alert("У окна браузера вертикальной прокрутки НЕТ");
        } else {
            alert("У окна браузера вертикальная прокрутка ЕСТЬ");
        }
    },false);

}
task3();
