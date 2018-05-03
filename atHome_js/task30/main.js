// Практика JavaScript для новичков

// Урок №1
// 1
// Даны 3 инпута и кнопка. По нажатию на кнопку получите числа,
// стоящие в этих инпутах и запишите их сумму в четвертый инпут.
function task1() {
   var texts = document.querySelectorAll('.text1'),
       button = document.querySelector('#but1'),
       result = document.querySelector('#res1');
    button.addEventListener('click', function (e) {
        var sum = 0;
        for (var i = 0; i < texts.length; i++) {
            sum += parseInt(texts[i].value);
        }
        result.value = sum;
    }, false);
}
task1();

// 2
// Даны N инпутов с классом .num и кнопка. По нажатию на кнопку получите числа,
// стоящие в этих инпутах и запишите их сумму в абзац с id="result".
function task2() {
   var texts = document.querySelectorAll('.text2'),
       button = document.querySelector('#but2'),
       result = document.querySelector('.res2');
    button.addEventListener('click', function (e) {
        var sum = 0;
        for (var i = 0; i < texts.length; i++) {
            sum += parseInt(texts[i].value);
        }
        result.innerHTML = sum;
    }, false);
}
task2();

// 3
// Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.
function task3() {
    var text = document.querySelector('.text3'),
        result = document.querySelector('.text31');
    text.addEventListener('blur', function(e){
        if (!isNaN(text.value)) {
            var arr = text.value.split(''),
                sum = 0;
            for ( var i = 0; i < arr.length; i++) {
                sum += parseInt(arr[i]);
            }
            result.value = sum;
        } else {
            result.value = 'Введено не число';
        }
    }, false);
}
task3();

// 4
// Дан инпут. В него вводятся числа через запятую. По потери фокуса
// найдите среднее арифметическое этих чисел (сумма делить на количество).
function task4() {
    var text = document.querySelector('.text4'),
        result = document.querySelector('.text41');
    text.addEventListener('blur', function(e){
        var that = this;
        console.log(that.value);
        var arr = that.value.split(',');
        console.log(arr);
        var sum = 0;
        var average;
        for (var i = 0; i < arr.length; i++) {
            sum += parseInt(arr[i]);
            console.log(sum);
        }
        console.log(sum);
        average = sum / arr.length;
        result.value = average;
    }, false);
}
task4();

// 5
// Дан инпут. В него вводится ФИО через пробел.
// По потери фокуса запишите фамилию, имя и отчество в отдельные инпуты.
function task5() {
    var text = document.querySelector('.text5'),
        textOnes = document.querySelectorAll('.text51');
    text.addEventListener('blur', function(e){
        var that = this,
            arr = that.value.split(' ');
        for (var i = 0; i < arr.length; i++) {
            textOnes[i].value = arr[i];
        }
    }, false);
}
task5();

// 6
// Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы.
// Сделайте так, чтобы по потери фокуса инпутом, введенные фамилия,
// имя и отчество автоматически стали записанными с большой буквы (в том же инпуте).
function task6() {
    var text = document.querySelector('.text6');
    text.addEventListener('blur', function(e){
        var that = this,
            arr = that.value.split(' ');
            that.value = "";
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].substr(0,1).toUpperCase() + arr[i].substr(1);
            that.value += arr[i] + ' ';
        }
    }, false);
}
task6();

// 7
// Дан инпут. В него вводится текст.
// По потери фокуса узнайте количество слов в этом тексте.
function task7() {
    var text = document.querySelector('.text7');
    text.addEventListener('blur', function(e) {
        var that = this;
        var arr = that.value.split(' ');
        alert('Количество слов: ' + arr.length);
    }, false);
}
task7();

// 8
// Дан инпут. В него вводится текст.
// По потери фокуса узнайте количество символов в самом длинном слове в этом тексте.
function task8() {
    var text = document.querySelector('.text8');
    text.addEventListener('blur', function(e) {
        var that = this;
        var arr = that.value.split(' ');
        var max = 0,
            maxWord = '';
        for ( var i = 0; i < arr.length; i++) {
            if (arr[i].length > max) {
                max = arr[i].length;
                maxWord = arr[i];
            }
        }
        alert('Наибольшее количество букв: ' + max + ' в слове - ' + maxWord);
    }, false);
}
task8();

// 9
// Дан инпут. В него вводится дата в формате 31.12.2016.
// По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31.
function task9() {
    var text = document.querySelector('.text9');
    text.addEventListener('blur', function(e){
        var that = this;
        var arr = that.value.split('.');
        that.value = arr.reverse().join('-');
    }, false);
}
task9();

// 10
// Дан инпут. В него вводится год рождения пользователя.
// По нажатию на кнопку выведите в абзац ниже сколько пользователю лет.
function task10() {
    var text = document.querySelector('.text10'),
        button = document.querySelector('#inp10');
    button.addEventListener('click', function(e){
        var currentDate = new Date(),
            oldDate = new Date(text.value);
        console.log(currentDate);
        console.log(oldDate);
        var timeNow = Math.floor(Date.parse(currentDate)/(1000*60*60*24*365));
        var timeOld = Math.floor(Date.parse(oldDate)/(1000*60*60*24*365));
        console.log(timeNow);
        console.log(timeOld);
        alert('Возраст: ' + (timeNow - timeOld) + ' years old');
    }, false);
}
task10();

// 11
// Дан инпут. В него вводится дата в формате 31.12.2016.
// По потери фокуса узнайте день недели (словом), который приходится на эту дату.
function task11() {
    var text = document.querySelector('.text11');
    var days = ['Воскресенье','Понедельник','Вторник','Среда', 'Четверг','Пятница','Суббота'];
    text.addEventListener('blur', function(e){
        var str = this.value.split('.').reverse().join(',');
        var date = new Date(str),
            day = date.getDay();
        alert('День недели: ' + days[day]);
    }, false);
}
task11();

// 12
// Дан инпут. В него вводится слово. По нажатию на кнопку проверьте то,
// что это слово читается с начала и с конца одинаково (например, мадам).
function task12() {
    var text = document.querySelector('.text12'),
        button = document.querySelector('#inp12');
    button.addEventListener('click', function(e){
        var str1 = text.value.substr(0,2),
            str2 = text.value.substr(-2,2).split('').reverse().join('');
            console.log(str2);
            if (str1 === str2) {
                alert('Читаеться одинаково!');
            } else {
                alert('Читаеться не одинаково!');
            }
    }, false);
}
task12();

// 13
// Дан инпут. В него вводится число.
// Проверьте по вводу, что это число содержит внутри себя цифру 3
function task13() {
    var text = document.querySelector('.text13'),
        button = document.querySelector('#inp13');
    button.addEventListener('click', function(e){
        var arr = text.value.split('');
        var flag = false;
        for (var i = 0; i < arr.length; i++) {
            if (parseInt(arr[i]) == 3) {
                flag = true;
            }
        }
        if (flag) {
            alert('We have number 3!!!');
        } else {
            alert('We dont have number 3!!!');
        }
    }, false);
}
task13();

// 14
// Даны N абзацев и кнопка.
// По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер.
function task14() {
    var pars = document.querySelectorAll('.par14'),
        button = document.querySelector('#inp14');
    button.addEventListener('click', function(e){
        for (var i = 0; i < pars.length; i++) {
            pars[i].innerHTML += ' ' + (i + 1);
        }
    }, false);
}
task14();

// 15
// Даны N абзацев с числами.
// По нажатию на кнопку выведите эти числа в инпут через запятую в порядке возрастания.
function task15() {
    var pars = document.querySelectorAll('.par15'),
        button = document.querySelector('#inp15'),
        text = document.querySelector('#text15');
    button.addEventListener('click', function(e){
        var arr = [];
        for (var i = 0; i < pars.length; i++) {
            arr[i] = parseInt(pars[i].innerHTML);
        }
        var res = arr.sort(sortArr).join(',');
        text.value = res;
    }, false);
    function sortArr(a,b) {
        if (a > b) return 1;
        if (a < b) return -1;
        if (a == b) return 0;
    }
}
task15();

// 16
// Даны ссылки.
// По загрузке страницы добавьте в конец каждой ссылки ее href в круглых скобках
function task16() {
    var anchors = document.querySelectorAll('.anch16');
    window.addEventListener('load', function(e){
        for (var i = 0; i < anchors.length; i++) {
            anchors[i].innerHTML += ' (' + anchors[i].getAttribute('href') + ')';
        }
    }, false);
}
task16();

// 17
// Даны ссылки. По загрузке страницы, если ссылка начинается с http://,
// то добавьте ей в конец стрелку → (делается так: &rarr;).
function task17() {
    var anchors = document.querySelectorAll('.anch17');
    window.addEventListener('load', function(e){
        for (var i = 0; i < anchors.length; i++) {
            if (anchors[i].href.substr(0,7) == 'http://') {
               anchors[i].innerHTML += ' ' + '&rarr;';
            }
        }
    }, false);
}
task17();

// 18
// Даны N абзацев с числами.
// По нажатию на любой абзац запишите в него квадрат числа, которое в нем находится
function task18() {
    var pars = document.querySelectorAll('.par18');
    for (var i = 0; i < pars.length; i++) {
        pars[i].addEventListener('click', function(e){
        var that = this;
        that.innerHTML = Math.pow(parseInt(that.innerHTML), 2);
    }, false);
    }

}
task18();

// 19
// Даны картинки. По нажатию на любую картинку увеличьте ее в 2 раза.
function task19() {
    var imgs = document.querySelectorAll('.img19');
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].addEventListener('click', function(e){
            var that = this;
            that.height *= 2;
        }, false);
    }
}
task19();

// 20
// Даны картинки. По первому нажатию на любую картинку увеличьте ее в 2 раза.
// По второму нажатию - уменьшите обратно.
function task20() {
    var imgs = document.querySelectorAll('.img20');
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].addEventListener('click', funcUp, false);
    }
    function funcUp(e){
        var that = this;
        that.height = that.height * 2;
        that.removeEventListener('click', funcUp, false);
        that.addEventListener('click', funcNorm, false);
    }
    function funcNorm(e){
        var that = this;
        that.height = that.height / 2;
        that.removeEventListener('click', funcNorm, false);
        that.addEventListener('click', funcUp, false);
    }
}
task20();

// 21
// Даны N картинок размера 30px.
// По нажатию на картинку под ними эта картинка появляется размером в 50px.
function task21() {
    var imgs = document.querySelectorAll('.img21'),
        bigImg = document.querySelector('.img22');
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].addEventListener('click', function(e){
            var that = this;
            bigImg.src = that.src;
        }, false);
    }
}
task21();

// 22
// Дан инпут. Реализуйте кнопочки +1, -1, которые будут увеличивать
// или уменьшать на 1 значение инпута.
// Сделайте так, чтобы это значение не могло стать меньше нуля.
function task22() {
    var text = document.querySelector('.text22'),
        inpPlus = document.querySelector('.but22'),
        inpMinus = document.querySelector('.but221');
    inpPlus.addEventListener('click', function(e){
        var that = this;
        text.value = +text.value + 1;
    }, false);
    inpMinus.addEventListener('click', function(e){
        var that = this;
        text.value = +text.value - 1;
        if (+text.value < 0) {
            text.value = 0;
        }
    }, false);
}
task22();

// Урок №2
// 23
// Дан инпут. В него вводится число. По потери фокуса проверьте,
// что в нем лежит число от 1 до 100.
// Если это так - покрасьте инпут в зеленый цвет, а если не так - в красный.

function task23() {
    var text = document.querySelector('.text23');
    text.addEventListener('blur', function(e){
        if (+text.value >= 1 && +text.value <= 100) {
            this.style.backgroundColor = 'green';
        } else {
            this.style.backgroundColor = 'red';
        }
    }, false);
}
task23();

// 24
// Дан инпут. Выделите любой текст на странице.
// По окончанию выделения этот текст должен записаться в этот инпут.
function task24() {
    var text = document.querySelector('.text24');
    document.documentElement.addEventListener('mouseup', function(e){
        text.value = window.getSelection('');
    }, false);
}
task24();

// 25
// Даны абзацы с числами. По нажатию на кнопку найдите абзац,
// в котором хранится максимальное число, и сделайте его красного цвета.
function task25() {
    var pars = document.querySelectorAll('.par25'),
        button = document.querySelector('#but25');

    button.addEventListener('click', function(e){
        var max = parseInt(pars[0].innerHTML);
        for (var i = 1; i < pars.length; i++) {
            if (max < parseInt(pars[i].innerHTML)) {
                max = parseInt(pars[i].innerHTML);
            }
        }
        console.log(max);
        for (var j = 1; j < pars.length; j++) {
            if (pars[j].innerHTML == max) {
                pars[j].style.backgroundColor = 'red';
            }
        }
    }, false);

}
task25();

// MAX
var arr = [1,2,3,4,5,15,7];
function max(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
max(arr);

// 26
// Дан инпут. Даны абзацы.
// Пусть в этот инпут записывается суммарное количество нажатий по этим абзацам.
function task26() {
    var pars = document.querySelectorAll('.par26'),
        text = document.querySelector('#text26');
    for (var i = 0; i < pars.length; i++) {
        pars[i].addEventListener('click', function(e){
            text.value = +text.value + 1;
        }, false);
    }
}
task26();

// 27
// Дан инпут с числом. Сделайте так,
// чтобы каждую секунду в нем появлялся квадрат того числа, которое в нем записано.
function task27() {
    var text = document.querySelector('#text27');
    window.addEventListener('load', start);
    function start() {
        window.setInterval(func, 1000);
    }
    function func() {
        text.value = Math.pow(parseInt(text.value), 2);
    }
}
// task27();

// 28
// Дан инпут и кнопка. По нажатию на кнопку сгенерируйте
// случайную строку из 8-ми символов и запишите в инпут
function task28() {
    var text = document.querySelector('#text28'),
        button = document.querySelector('#but28');
    button.addEventListener('click', function(e){
        text.value = '';
        var str = 'abcdefghijklmnopqrstuvwxyz1234567890';
        for (var i = 0; i < 8; i++) {
            var symb = str.charAt(Math.floor(Math.random() * str.length));
            text.value += symb;
        }
    },false);
}
task28();

// 29
// Модифицируйте предыдущую задачу так,
// чтобы был еще один инпут, в котором задается длина случайной строки
function task29() {
    var text = document.querySelector('#text29'),
        button = document.querySelector('#but29'),
        inp = document.querySelector('#inp29');
    button.addEventListener('click', function(e){
        text.value = '';
        var str = 'abcdefghijklmnopqrstuvwxyz1234567890';
        for (var i = 0; i < inp.value; i++) {
            var symb = str.charAt(Math.floor(Math.random() * str.length));
            text.value += symb;
        }
    },false);
}
task29();

// 30
// Модифицируйте предыдущую задачу так, чтобы был еще один инпут,
// в котором задаются символы, из которых формируется эта случайна строка.
// Символы задаются без всяких разделитетей, в одну строку.
function task30() {
    var text = document.querySelector('#text30'),
        button = document.querySelector('#but30'),
        inp = document.querySelector('#inp30'),
        symbols = document.querySelector('#inp301');
    button.addEventListener('click', function(e){
        text.value = '';
        var str = symbols.value || 'abcdefghijklmnopqrstuvwxyz1234567890';
        for (var i = 0; i < inp.value; i++) {
            var symb = str.charAt(Math.floor(Math.random() * str.length));
            text.value += symb;
        }
    },false);
}
task30();

// 31
// Дан инпут. В него вводится число. По потери фокуса сделайте так,
// чтобы в абзаце ниже начал тикать обратный отсчет, начиная с введенного числа.
// Когда отсчет дойдет до нуля - он должен закончится.
function task31() {
    var text = document.querySelector('#text31'),
        par = document.querySelector('.par31');
    text.addEventListener('blur', func1, false);
    function func1(e) {
        par.innerHTML = this.value;
        window.timerId = window.setInterval(goTik, 1000);
    }
    function goTik() {
        if(parseInt(par.innerHTML) > 0) {
            par.innerHTML = parseInt(par.innerHTML) - 1;
        }
        if (parseInt(par.innerHTML) == 0) {
            stop();
        }
    }
    function stop() {
        window.clearInterval(window.timerId);
    }

}
task31();

// 32
// Дан абзац. Сделайте так, чтобы каждую секунду
// он менял свой цвет с красного на зеленый и наоборот.
function task32() {
    var par = document.querySelector('.par32');
    window.addEventListener('load', func1, false);
    function func1(e) {
        window.timerIdf = window.setInterval(toggle, 1000);
    }
    function toggle() {
        if(par.style.backgroundColor == 'red') {
            // console.log('!');
            par.style.backgroundColor = 'green';
        } else {
            par.style.backgroundColor = 'red';
        }
    }
}
// task32();

// 33
// Дан абзац. Дан массив цветов ['red', 'green', 'blue']. Сделайте так,
// чтобы каждую секунду абзац менял свой цвет на определенное значение
// их массива: сначала 'red', потом 'green' и так далее. Как только цвета в массиве
// закончатся - все начнется сначала. Количество цветов в массиве может быть любым.
var colors = ['red', 'green', 'blue'];
function task33(arr) {
    var par = document.querySelector('.par33');
    window.addEventListener('load', change, false);
    // function func1() {
    //     window.timerIdt = window.setInterval(change, 1000);
    // }
    var i = 0;
    function change() {
            par.style.backgroundColor = arr[i];
            i++;
            if (i >= arr.length) {
                i = 0;
            }
            window.setTimeout(change, 1000);
            console.log(i);
    }
}
// task33(colors);

// 34
// Дан абзац. Дан массив строк ['один', 'два', 'три'].
// Под абзацем ссылка 'следующая строка'.
// По заходу на страницу в абзаце должен стоять нулевой элемент этого массива,
// а по нажатию на ссылку - вставлятся следующий элемент.
var str = ['один', 'два', 'три'];
function task34(arr) {
    var par = document.querySelector('.par34'),
        anch = document.querySelector('.anch34'),
        i = 0;
    window.addEventListener('load', function(e){
        par.innerHTML = arr[i];
    }, false);
    anch.addEventListener('click', function(e){
        e.preventDefault();
        if (par.innerHTML == arr[i] && arr[i+1] != arr[arr.length]) {
            par.innerHTML = arr[i + 1];
            console.log('!');
        } else {
            i = 0;
            par.innerHTML = arr[i];
            i--;
            console.log('!!');
        }
        i++;
        console.log(i);
    }, false);
}
task34(str);

// 35
// Даны инпуты с числами. Произвольное количетсво, пусть три.
// В первый инпут запишите 1, через секунду во второй инпут запишите 2,
// еще через секунду в третий инпут 3, потом
// через секунду в первый инпут запишите 4, во второй 5 и так далее до бесконечности.
function task35() {
    var inps = document.querySelectorAll('.text35');
    var i = 0;
    var number = 1;
    window.addEventListener('load', function(e){
        window.timerIdk = window.setInterval(change, 1000);
    }, false);
    function change() {
        inps[i].value = number;
        i++;
        number++;
        if (i >= inps.length) {
            i = 0;
        }
    }
}
task35();

// Урок №3
// 36
// Дана ссылка. Дан чекбокс. По нажатию
// на ссылку меняйте состояние чекбокса с отмеченного на неотмеченное и наоборот.
function task36() {
    var anch = document.querySelector('.anch36'),
        elem = document.querySelector('#check36');
    anch.addEventListener('click', function(e) {
        e.preventDefault();
        // console.log(elem.hasAttribute('checked'));
        if (!elem.checked) {
            elem.checked = true;
        } else {
            elem.checked = false;
        }
    }, false);
}
task36();

// 37
// Даны чекбокс. Дана кнопка. По нажатию на кнопку сделайте все чекбоксы отмеченными.

function task37() {
    var button = document.querySelector('#but37'),
        elems = document.querySelectorAll('#check37');
        console.log(elems);
    button.addEventListener('click', function(e) {
        // console.log(elem.hasAttribute('checked'));
        for (var i = 0; i < elems.length; i++) {
            elems[i].checked = true;
        }
    }, false);
}
task37();

// 38
// Спросите у пользователя какой язык (html, css, js, php)
// он знает с помощью радио кнопочек. Выведите этот язык в абзац.
function task38() {
    var radio = document.querySelectorAll('.inp38'),
        result = document.querySelector('#res38');
    for (var i = 0; i < radio.length; i++) {
        radio[i].addEventListener('change', function(e){
            if (this.checked) {
            result.innerHTML = this.value;
        }
        }, false);
    }
}
task38();

// 39
// Спросите у пользователя какие языки (html, css, js, php) он знает
// с помощью чекбоксов.
// Выбранные языки должны выводится в абзац ниже через запятую.
function task39() {
    var inputs = document.querySelectorAll('.inp39'),
    res = document.querySelector('#res39');
    var arr = [];
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('change', func1);
    }
    function func1(){
        var that = this;
        if (that.checked && arr.length < inputs.length) {
            arr.push(that.value);
            res.innerHTML = arr;
        } else {
            var str1 = arr.join(',');
            console.log('str1: ' + str1);
            var index = str1.indexOf(that.value);
            console.log('index: ' + index);
            var str12 = str1.substr(index, that.value.lenght);
            var str13 = str1.replace(that.value, '').split(',');
            console.log('str13: ' + str13);
            arr = [];
            for (var k = 0; k < str13.length; k++) {
                if (str13[k] != '') {
                    arr.push(str13[k]);
                }
            }
            console.log('arr: ' + arr);
            res.innerHTML = arr;
        }
    }


}
task39();

// 40
// Дан чекбокс. Дан инпут. Сделайте так,
// что если чекбокс отмечен - инпут видимый, если не отмечен - не видимый.

function task40() {
    var elem = document.querySelector('#check40'),
        text = document.querySelector('#inp40');
    elem.addEventListener('change', function(e){
        var that = this;
        if (that.checked) {
            text.style.display = 'inline-block';
        } else {
            text.style.display = 'none';
        }
    }, false);
}
task40();

// 41
// Даны чекбоксы. Под каждым чекбоксом размещен абзац.
// Сделайте так, что если чекбокс отмечен
// - соответствующий абзац видимый, а если не отмечен - не видимый.
function task41() {
    var elems = document.querySelectorAll('#inp41');
    for (var i = 0; i < elems.length; i++) {
        elems[i].addEventListener('change', function(e){
            if (!this.checked) {
                this.nextElementSibling.style.display = 'none';
            } else {
                this.nextElementSibling.style.display = 'inline';
            }
        }, false);
    }
}
task41();

// 42
// Дан инпут. Даны li. В инпут пишется номер. Сделайте так,
// чтобы по вводу числа, li с заданным номером покрасился в красный цвет.
function task42() {
    var text = document.querySelector('#text42'),
        li = document.querySelectorAll('ul.menu42 li');
        console.log(li);
    text.addEventListener('keyup', function(e){
        if (li[text.value]) {
            li[text.value].style.color = 'red';
        }
    }, false);
}
task42();

// 43
// Дан абзац. Даны чекбоксы 'перечеркнуть', 'сделать жирным', 'сделать красным'.
// Если соответствующий чекбокс отмечен - заданное действие происходит
// с абзацем (становится красным, например).
// Если чекбоксу снять отметку - действие отменяется.
function task43() {
    var elem = document.querySelector('.par43'),
        box1 = document.querySelectorAll('.inp43');
    for (var i = 0; i < box1.length; i++) {
        box1[i].addEventListener('change', function(e){
        var that = this,
            value = that.value;
        if (!that.checked) {
            switch(value) {
            case 'cross':
            elem.style.textDecoration = 'none';
            break;
            case 'bold':
            elem.style.fontWeight = 'normal';
            break;
            case 'red':
            elem.style.color = 'black';
            break;
            }
        } else {
            switch(value) {
            case 'cross':
            elem.style.textDecoration = 'line-through';
            break;
            case 'bold':
            elem.style.fontWeight = 'bold';
            break;
            case 'red':
            elem.style.color = 'red';
            break;
            }
        }
    }, false);
    }
}
task43();

// 44
// Дан блок с кнопкой 'закрыть блок'. По нажатию на эту кнопку блок должен исчезнуть.
// Кнопка размещается внутри блока и должна исчезнуть вместе с ним.
// Блоков может быть любое количество, каждый из них закрывает своя кнопка.
function task44() {
    var buttons = document.querySelectorAll('.but44');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(e){
            var that = this,
                parent = that.parentNode;
            console.log(parent);
            parent.style.display = 'none';
        },false);
    }
}
task44();

// Урок №4
// 45
// В инпут через запятую вводятся страны. По нажатию на кнопку сделайте так,
// чтобы эти страны записались в ul под инпутом (каждая страна отдельный li)
function task45() {
    var text = document.querySelector('#text45'),
        button = document.querySelector('#but45'),
        ul = document.createElement('ul');
    button.addEventListener('click', function(e){
        var str = text.value.split(',');
        console.log(str);
        for (var i = 0; i < str.length; i++) {
            var li = document.createElement('li');
            li.innerHTML = str[i];
            ul.appendChild(li);
        }
        console.log(ul);
        button.parentNode.insertBefore(ul, button.nextSibling);
    },false);
}
task45();

// 46
// В инпут вводится страна и нажимается Enter.
// По нажатию на Enter сделайте так, чтобы введенные страны записывались
// в абзац под инпутом через запятую. То
// есть по каждому нажатию Enter в абзац будут добавляться все новые и новые страны.
function task46() {
    var text = document.querySelector('#text46'),
        result = document.querySelector('.res46');
    text.addEventListener('keypress', function(e){
        var that = this;
        var str = that.value;
        if (e.keyCode == 13 && that.value != '') {
            result.innerHTML += that.value + ',';
        }
    }, false);
}
task46();

// 47
// На странице есть дивы. В них есть текст. Обойдите все дивы и обрежьте тот текст,
// который в них стоит так, чтобы он стал длиной 10 символов.
// И добавьте троеточие в конец обрезанного текста
function task47() {
    var divs = document.querySelectorAll('.dv47');
    for (var i = 0; i < divs.length; i++) {
        if (divs[i].innerHTML.length > 10) {
            console.log(divs[i].innerHTML.length);
            divs[i].innerHTML = divs[i].innerHTML.substr(0, 10) + '...';
        }
    }
}
task47();

// Проблема не решена так полностью - длину строки я получаю с учетом пробелов

// 48
// Дана таблица с числами. По нажатию на кнопку найдите ячейку,
// в которой хранится максимальное число, и сделайте ее фон красным.
function task48() {
    var tableTd = document.querySelectorAll('.table48 td'),
        button = document.querySelector('#inp48');
    var max = 0;
    var n = 0;
    button.addEventListener('click', function(e){
        for (var i = 0; i < tableTd.length; i++) {
            if (max < tableTd[i].innerHTML) {
                max = tableTd[i].innerHTML;
                n = i;
            }
        }
        tableTd[n].style.backgroundColor = 'red';
        console.log(max);
    }, false);
}
task48();

// 49
// Дана таблица с числами. По нажатию на кнопку в инпут под
// таблицей выведите эти числа через запятую в порядке возрастания
function task49() {
    var tableTd = document.querySelectorAll('.table49 td'),
        button = document.querySelector('#inp49'),
        text = document.querySelector('#text49');
    var arr = [];
    button.addEventListener('click', function(e){
        for (var i = 0; i < tableTd.length; i++) {
            arr[i] = parseInt(tableTd[i].innerHTML);
        }
        var str = arr.sort(function(a,b){
            return a - b;
        });
        text.value = str.join(',');
    }, false);
}
task49();

// 50
// Дана таблица с числами. По нажатию на кнопку в последний ряд
// таблицы в каждую ячейку запишите сумму чисел в столбце таблицы,
// расположенном над определенной ячейкой.
function task50() {
    var tableTd = document.querySelectorAll('.table50 td'),
        tableTr = document.querySelectorAll('.table50 tr'),
        button = document.querySelector('#inp50');
    console.log(tableTr);
    console.log(tableTr[0].children.length);
    var arr = [];
    button.addEventListener('click', function(e){
        for (var i = 0; i < tableTr.length; i++) {
        var sum = 0;
        console.log(i);
           for (var j = 0; j < tableTr[i].children.length; j++) {
                sum += parseInt(tableTr[i].children[j].innerHTML);
                console.log(i);
           }
        arr[i] = sum;
        var td = document.createElement('td');
        td.innerHTML = arr[i];
        tableTr[i].appendChild(td);
        }
    }, false);
}
task50();

// 51
// Дана таблица с числами. По нажатию на ячейку она активируется и
// становится красного цвета. Активировать можно много ячеек. Под таблицей кнопка.
// По нажатию по этой кнопке в абзац ниже выведите сумма активированных ячеек.
// Реализуйте кнопку 'сбросить активированные ячейки'.
function task51(){
    var table = document.querySelector('.table51'),
        tableTD = document.querySelectorAll('.table51 td'),
        button = document.querySelector('#inp51'),
        result = document.querySelector('.par51'),
        buttonReset = document.querySelector('#inp511'),
        arr = [];
    table.addEventListener('click', selectCells, false);
    // SELECT CELLS
    function selectCells(e) {
        var target = e.target;
        console.log(target.tagName);
        if(target.tagName == 'TD') {
            target.style.backgroundColor = 'red';
            arr.push(target.innerHTML);
        }
        console.log(target.innerHTML);
        console.log(arr);
    }
    button.addEventListener('click', countCells, false);
    //COUNT CELLS
    function countCells() {
        var summ = 0;
        for (var i = 0; i < arr.length; i++) {
            summ += parseInt(arr[i]);
        }
        var str = 'Summ: ' + summ + '; Amount: ' + i;
        result.innerHTML = str;
    }
    // Reset selected cells
    buttonReset.addEventListener('click', resetCells, false);
    function resetCells() {
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < tableTD.length; j++ ) {
                if (arr[i] == tableTD[j].innerHTML) {
                    tableTD[j].style.backgroundColor = '#fff';
                }
            }
        }
        arr = [];
    }
}
task51();

// 52
// Дана таблица. По нажатию на ячейку в ней появляется инпут
// с содержимым этой ячейки и кнопка сохранить.
// Можно поредактировать текст в инпуте, сохранить - и текст ячейки поменяется.
function task52() {
    var tableTD = document.querySelectorAll('.table52 td');
    for (var i = 0; i < tableTD.length; i++) {
        tableTD[i].addEventListener('click', correctCells, false);
    }
    function correctCells(e) {
        e.stopPropagation();
        var that = this;
        var input = document.createElement('input'),
            inputSave = document.createElement('button');
        // input.type = 'text';
        inputSave.innerHTML = 'Save';
        if (that.tagName == 'TD') {
            input.value = that.innerHTML;
            that.innerHTML = '';
            that.appendChild(input);
            that.appendChild(inputSave);
        }
        inputSave.addEventListener('click', saveChanges, false);
        function saveChanges(e) {
            e.stopPropagation();
            var target = e.target;
            var parent = target.parentNode;
            parent.innerHTML = input.value;
        }
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
task52();

// 53
// Реализуйте раскрывающийся список. По умолчанию есть список стран (ul),
// по нажатию на страну внутри li со страной появляется список городов.
function task53() {
    var elems = document.querySelectorAll('ul.menu53 span');
    for (var i = 0; i < elems.length; i++) {
        elems[i].addEventListener('click', showList, false);
    }
    function showList() {
        var that = this;
        that.nextElementSibling.style.display = 'block';
        that.removeEventListener('click', showList, false);
        that.addEventListener('click', hideList, false);
    }
    function hideList() {
        var that = this;
        that.nextElementSibling.style.display = 'none';
        that.removeEventListener('click', hideList, false);
        that.addEventListener('click', showList, false);
    }
}
task53();

// Урок №5
// 54
// Даны два селекта. В первом находятся страны, во втором - города.
// Сделайте так, чтобы когда выбирается определенная
// страна - в другом селекте появлялись города этой страны.
// В абзац ниже пишите выбранную страну и город через запятую.
function task54() {
    var cityArr = {
    '---': ['-----'],
    'aus': ['Мельбурн', 'Сидней', 'Аделаида', 'Брисбен', 'Хобарт'],
    'jap': ['Токио', 'Киото', 'Осака', 'Иокогама'],
    'sar': ['Кейптаун', 'Йоханесбург'],
 };

    var prime_select = document.getElementById('country');
    prime_select.addEventListener('change', func);
    prime_select.addEventListener('change', toParagraph);

    var city_select = document.getElementById('cities');
    city_select.addEventListener('change', toParagraph);

    function func(){
        city_select.innerHTML = '';
        var selected_country = prime_select.value;
        for (var i = 0; i < cityArr[selected_country].length; i++) {
            var new_option = document.createElement('option');
            new_option.innerHTML = cityArr[selected_country][i];
            city_select.appendChild(new_option);
        }
    }

    var parag = document.querySelector('p.res54');
    function toParagraph() {
        parag.innerHTML = '';
        parag.innerHTML = prime_select.options[prime_select.selectedIndex].text + ',' + city_select.options[city_select.selectedIndex].text;
     }
}
task54();

// 55
// Сделайте селекты день, мес, год. Сделайте так,
// чтобы не корректную дату нельзя было выбрать (например, 30 февраля нельзя,
// а 30 марта можно или 29 февраля можно, но только в високосный год).
function task55() {
    var obj = {
        'days': [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
        'month': [0,1,2,3,4,5,6,7,8,9,10,11],
        'years': [2018,2017,2016,2015,2014]
    };
    window.addEventListener('load', function(){
        var selectDays = document.querySelector('select#days'),
        selectMonths = document.querySelector('select#months'),
        selectYears = document.querySelector('select#years');
    selectDays.addEventListener('change', func1);
    selectMonths.addEventListener('change', func1);
    selectYears.addEventListener('change', func1);
    var oldDate1 = 32 - new Date(2018,1, 32).getDate();
    console.log('oldDate1: ' + oldDate1);
    function func1(){
        var year = selectYears.options[selectYears.selectedIndex].text || obj['years'][0];
        console.log(year);
        var month = selectMonths.options[selectMonths.selectedIndex].text || obj['month'][0];
        console.log(month);
        var day = selectDays.options[selectDays.selectedIndex].text;
        var date = new Date(year, month);
        console.log(date);
        var oldDate = 32 - new Date(year,month, 32).getDate();
        console.log('oldDate: ' + oldDate);
        for (var i = 0; i < obj['days'].length; i++) {
            if (obj['days'][i] - oldDate > 0) {
                selectDays.options[obj['days'][i] - 1].disabled = true;
                console.log('!');
            } else {
               selectDays.options[obj['days'][i]-1].disabled = false;
               console.log('!!');
            }
        }
    }
    (function pushDays() {
        for (var i = 0; i < obj['days'].length; i++) {
            var new_option = document.createElement('option');
            new_option.innerHTML = obj['days'][i];
            selectDays.appendChild(new_option);
        }
    })();
    (function pushMonth() {
        for (var i = 0; i < obj['month'].length; i++) {
            var new_option = document.createElement('option');
            new_option.innerHTML = obj['month'][i];
            selectMonths.appendChild(new_option);
        }
    })();
    (function pushYears() {
        for (var i = 0; i < obj['years'].length; i++) {
            var new_option = document.createElement('option');
            new_option.innerHTML = obj['years'][i];
            selectYears.appendChild(new_option);
        }
        selectYears.options.selectedIndex = 0;
    })();
    }, false);
}
task55();

// 56
// Реализуйте калькулятор валют. Есть два селекта - селект с исходной валюты,
// селект с той валютой, в которую мы хотим перевести деньги, инпут,
// в который вводится сумма для обмена. Курсы валют храните в массиве.
// Сделайте так, чтобы в селектах нельзя было выбрать две одинаковых валюты.
function task56() {
    var volute = {
        'uah': '1.00',
        'usd': '0.0385',
        'eur': '0.0311',
        'rub': '2.39'
    };
    var money = 0;
    var cashPrime = document.querySelector('#cash_prime'),
        cashSecond = document.querySelector('#cash_second'),
        text = document.querySelector('#text56'),
        result = document.querySelector('#text561');
    cashPrime.addEventListener('change', getCurrency, false);
    cashSecond.addEventListener('change', getCurrency, false);
    text.addEventListener('keyup', getCurrency, false);

    function getCurrency(){
        if (cashPrime.value != cashSecond.value) {
            result.innerHTML = '';
            money = volute[cashSecond.value] / volute[cashPrime.value] * text.value;
            console.log(money);
            result.value = money;
        } else {
            alert('Change another volute!');
        }
    }
}
task56();

// 57
// Реализуйте генератор таблиц, ширина и высота таблиц задается в двух инпутах
// (например, таблица 5 на 10 ячеек).
function task57() {
    var amountTr = document.querySelector('#inp57'),
        amountTd = document.querySelector('#inp571'),
        button = document.querySelector('#but57');
    button.addEventListener('click', addTable, false);
    function addTable(AmTr, Amtd) {
        AmTr = amountTr.value;
        Amtd = amountTd.value;
        var table = document.createElement('table');
        for (var i = 0; i < AmTr; i++) {
            var tr = document.createElement('tr');
            for (var j = 0; j < Amtd; j++) {
                var td = document.createElement('td');
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        table.setAttribute('class', 'table57');
        console.log(table);
        this.parentNode.insertBefore(table, this.nextSibling);
    }
}
task57();

// 58
// Дан список и кнопка. По нажатию на кнопку посортируйте пункты списка по возрастанию.
function task58() {
    var button = document.querySelector('#but58');
    button.addEventListener('click', function(){
        var items = document.querySelectorAll('.menu58 li');
        arr = [];
        for (var i = 0; i < items.length; i++) {
            arr[i] = items[i].innerHTML;
        }

        arr.sort(function(a,b){
            return b - a;
        });
        console.log(arr);
        for (i = 0; i < items.length; i++) {
            items[i].innerHTML = arr[i];
        }
    }, false);
}
task58();

// 59
// Дан ряд ссылок. Сделайте так, чтобы по нажатию на ссылку она становилась с красным фоном.
// По нажатию на другую ссылку выделение первой ссылки снимается и выделяется та,
// на которую мы нажали. В абзац ниже пишите текст активной ссылки.
function task59() {
    var items = document.querySelectorAll('.item59'),
        result = document.querySelector('.res59');
    for (var i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function(e){
        e.preventDefault();
        var that = this;
        for (var j = 0; j < items.length; j++) {
            items[j].style.backgroundColor = 'transparent';
        }
        that.style.backgroundColor = 'red';
        result.innerHTML = that.style.backgroundColor;
    }, false);
    }
}
task59();