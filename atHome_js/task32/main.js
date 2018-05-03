// Продвинутая работа с функциями JavaScript

// На работу с функциями
// 1
// Если переменная a больше нуля - то в ggg запишем функцию,
// которая выводит один !, иначе запишем функцию, которая выводит два !.
function task1() {
    var a = 4,
        ggg;
    if (a > 0) {
        ggg = function() {
            console.log('!');
        };
    } else {
        ggg = function(){
            console.log('!!');
        };
    }
    ggg();
}
task1();

// 2
// Функция ggg принимает 2 параметра: число и анонимную функцию,
// которая возводит число в квадрат. Возведите число в 4-тую степень с помощью ggg.
function task2() {
    var ggg = function(num, func) {
        func(num);
    };
    ggg(2, function() {
        return console.log(Math.pow(arguments[0], 4));
    });
}
task2();

// var ggg = function(n, f) {return f(n);},
// funcNew = function(a){return Math.pow(a, 2);},
// num = 3;
// alert(ggg( (ggg(num, funcNew)), funcNew));

// 3
// Функция ggg принимает 2 параметра: анонимную функцию,
// которая возвращает 3 и анонимную функцию,
// которая возвращает 4. Верните результатом функции ggg сумму 3 и 4
function task3() {
    var ggg = function(x, y) {
        return console.log(x() + y());
    };
    function func1() {
        return 3;
    }
    function func2() {
        return 4;
    }
    ggg(func1, func2);
}
task3();

// 4
// Дана функция ggg. Она требует первым параметром число, вторым функцию,
// которая возводит в квадрат, а третьим параметром функцию, которая возводит в куб.
// Эти функции есть как Function Declaration - kvadrat, kub.
// Пусть функция ggg вернет сумму квадрата и куба числа.
function task4() {
    var ggg = function(num, f1, f2) {
        return f1(num) + f2(num);
    };
    function kvadrat(num) {
        return Math.pow(num, 2);
    }
    function kub(num) {
        return Math.pow(num, 3);
    }

    var num = 2;
    console.log(ggg(num, kvadrat, kub));
}
task4();

// 5
// Сделайте функцию each, которая первым параметром принимает массив, а вторым - функцию,
// которая применится к каждому элементу массива.
// Функция each должна вернуть измененный массив.
function task5() {
    var each = function(arr, f) {
        var result = [];
        for (var i = 0; i < arr.length; i++) {
            result[i] = f(arr[i]);
        }
        return result;
    };
    function func(el) {
        return Math.pow(el, 2);
    }
    var arr = [1,2,3,4,5];
    console.log(each(arr, func));
}
task5();

// 6
// Сделайте функцию each, которая первым параметром принимает массив,
// а вторым - массив функций,
// которые по очереди применятся к каждому элементу массива:
// к первому элементу массива - первая функция, ко второму - вторая и так далее
// пока функции в массиве не закончатся,
// после этого возьмется первая функция, вторая и так далее по кругу.
function task6() {
    var each = function(arr, arrFunc) {
        var newArr = [];
        for (var i = 0; i < arr.length; i++){
            var current = arrFunc[i % arrFunc.length](arr[i]);
            newArr.push(current);
        }
    return newArr;
    };
    var f1 = function(a){return a + 3;},
    f2 = function(a){return a + 2;},
    f3 = function(a){return a + 1;},
    funcAll = [f1, f2, f3],
    startArray = [0,1,2, 3, 4, 5, 6, 7, 8, 9,10, 11];
    console.log(each(startArray, funcAll));
}

task6();

// На замыкания
// 7
// Сделайте функцию, которая считает и выводит количество своих вызовов.
function task7() {
    var button = document.querySelector('#but1');
    var counter = getCount();
    function getCount() {
        var count = 1;
        return function() {
            return console.log(count++);
        };
    }
    button.addEventListener('click', counter);
    // console.log(counter());
}
task7();

// 8
// Даны кнопки. Привяжите к каждой кнопке событие по клику,
// которое будет считать количество нажатий по кнопке и выводить его в текст кнопки.
// Количество нажатий для каждой кнопки должно хранится в замыкании.
function task8() {
    var buttons = document.querySelectorAll('#but8');
    var getCount = function() {
        var count = 1;
        return function() {
            this.value = count;
            return count++;
        };
    };
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', getCount());
    }
}
task8();

// 9
// Дан массив цветов. Даны абзацы. По первому нажатию на абзац он
// должен покраситься в первый цвет из массива,
// по второму нажатию - во второй и так далее. Все абзацы работают независимо.
function task9() {
    var texts = document.querySelectorAll('.text9');

    var getColor = function() {
        var colors = ['red', 'green', 'yellow', 'blue'];
        var i = 0;
        return function() {
            var that = this;
            if (i == colors.length) {
                i = 0;
            }
            that.style.backgroundColor = colors[i];
            return i++;
        };
    };
    for (var i = 0; i < texts.length; i++) {
        texts[i].addEventListener('click', getColor());
    }
}
task9();

// 10
// Даны кнопки. Каждая кнопка по нажатию на нее выводить следующее число Фибоначчи.
// Кнопки работают независимо. Решить через замыкания
function func10() {
    var buttons = document.querySelectorAll('#but10');
    var getCount = function() {
        var a = 0,
            b = 1,
            temp;
        return function() {
            var that = this;
            that.value = a;
            temp = a;
            a = b;
            b = temp + a;
        };
    };
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', getCount());
    }
}
func10();

// 11
// Даны инпуты. Сделайте так, чтобы каждый инпут хранил историю своих изменений.
// Каждый инпут свою. Изменением считается событие onchange.
// История должна хранится в замыкании.
// Над каждым инпутом должны быть стрелочки назад и вперед,
// с помощью которых можно передвигаться по истории.
function task11() {
    var texts = document.querySelectorAll('#text11'),
        buttonLeft = document.querySelectorAll('#butleft'),
        buttonRight = document.querySelectorAll('#butright');
    function getMem() {
        var obj = {},
        i = 0;
        var history = [];
        function count(){
            var that = this;
            var parent = that.parentNode;
            console.log('parent: ' + parent.tagName);
            history[i] = that.value;
            var attr = that.getAttribute('name');
            obj[attr] = [];
            if (history.length != 0) {
                for (var j = 0; j < history.length; j++) {
                    obj[attr][j] = history[j];
                }
            }
            i++;
            console.log('history: ' + history);
            console.log('i: ' + i);
            console.log('obj: ' + obj[attr]);
            console.log('that: ' + that.tagName + that.getAttribute('name'));
        }
        // count.get = function() {
        //     return obj[attr];
        // };
        count.getI = function() {
            return i;
        };
        return count;
    }
    for (var i = 0; i < texts.length; i++) {
        texts[i].addEventListener('change', getMem());
    }
    for (var j = 0; j < buttonLeft.length; j++) {
        buttonLeft[j].addEventListener('click', func1);
    }
    function func1(e) {
        // console.log(getMem().get());
        console.log(getMem().getI());
        // var obj = getMem().get();
        // console.log(obj);
        var that = this;
        var inputs = that.parentNode.getElementsByTagName('input');
        // for (var key in obj) {
        //     if (obj[key] == )
        // }
        // var arr = counter.get();
        // var n;
        // var that = e.taget.parentNode.
        // if (arr.length != 0 && arr.length >= 2) {
        //     for (var i = 0; arr.length; i++) {
        //          if (that.value == arr[arr.length - 1]) {
        //             that.value = arr[arr.length - 1];
        //                     } else {
        //             n = i;
        //             that.value = arr[n + 1];
        //             }
        //     }
        // }
    }
}
task11();
            // for (var j = 0; j < buttonLeft.length; j++) {
            //     buttonLeft[j].addEventListener('click', function(that){
            //         var n = 1;
            //         if (arr.length != 0 && arr.length >= 2) {
            //             n++;
            //             that.value = arr[arr.length - n];
            //         } else {
            //             that.value = arr[arr.length - 1];
            //         }
            //     });
            // }
            // for (var k = 0; k < buttonRight.length; k++) {
            //     buttonRight[k].addEventListener('click', function(that){
            //         var n;
            //         if (arr.length != 0 && arr.length >= 2) {
            //             for (var i = 0; arr.length; i++) {
            //                 if (that.value == arr[arr.length - 1]) {
            //                     that.value = arr[arr.length - 1];
            //                 } else {
            //                     n = i;
            //                     that.value = arr[n + 1];
            //                 }
            //             }
            //         }
            //     });
            // }

// 12
// Сделайте функцию, каждый вызов который будет генерировать случайные
// числа от 1 до 100, но так, чтобы они не повторялись,
// пока не будут перебраны все числа из этого промежутка.
// Решите задачу через замыкания - в замыкании
// должен хранится массив чисел, которые уже были сгенерированы функцией.
function task12() {
    var button = document.querySelector('#but12'),
        text = document.querySelector('#text12');
    function getNumber() {
        var arr = [];
        function random1() {
            var number = Math.floor(Math.random()*100 + 1);
            console.log(arr.length);
                for (var i = 0; i < arr.length; i++) {
                    if ( arr[i] == number) {
                        return;
                    }
                }
            this.value = number;
            text.innerHTML += number + ', ';
            arr.push(number);
        }
        return random1;
    }
    button.addEventListener('click', getNumber(), false);
}
task12();


