// Задачи на разные полезные темы JavaScript

// Работа с формами
// 1
// Дана форма с id="form". В ней даны инпуты, в них числа.
// Дана кнопка. По нажатию на эту кнопку получите форму по ее id,
// затем циклом переберите все инпуты в ней и найдите сумму чисел из этих инпутов.
// function task1() {
//    var form = document.getElementById('form1'),
//        result = document.getElementById('res1'),
//        button = document.getElementById('inp1'),
//        div = document.querySelector('#form1 div.div1');
//        console.log(form);
//        button.addEventListener('click', getSumm, false);
//     function getSumm(e) {
//         var psFormElems = document.forms.form1.elements;
//         console.log(psFormElems);
//         var summ = 0;
//         for (var i = 0; i < psFormElems.length; i++) {
//             summ += parseInt(psFormElems[i].value);
//         }
//         result.value = summ;
//     }
// }
// task1();

// 2
// На странице расположено несколько форм. В них есть инпуты, в инпутах числа.
// Дана кнопка. По нажатию на эту кнопку циклом переберите все формы на странице,
// затем циклом переберите
// все инпуты в каждой форме и найдите сумму чисел из всех этих инпутов.

function task2() {
    var button = document.querySelector('#inp2'),
        result = document.querySelector('#res2'),
        forms = document.forms;
    button.addEventListener('click', getSum, false);
    function getSum(event) {
        event.preventDefault();
        var summ = 0;
        for (var i = 0; i < forms.length; i++) {
            for (var j = 1; j < forms[i].elements.length; j++) {
                summ += parseInt(forms[i].elements[j].value);
                console.log('elem ' + j + ' ' + forms[i].elements[j].value);
            }
            console.log(forms[i]);
        }
        result.value = summ;
    }
}
task2();

// Работа с селектами
// 3
// Дан селект. Дан инпут.
// По изменению селекта выведите текст выбранного пункта в инпут.

function task3() {
    var select = document.querySelector('#select3'),
        text = document.querySelector('#text3');
    select.addEventListener('change', getText, false);
    function getText(e) {
        e.preventDefault();
        var that = this;
        text.value = that.options[that.selectedIndex].text;
        console.log(text.value);
    }
}
task3();

// 4
// Дан селект. Дан инпут. Дана кнопка. Сделайте так,
// чтобы в инпут можно было ввести число,
// нажать на кнопку и в селекте становился выбранным пункт с этим номером.
function task4() {
    var select = document.querySelector('#select4'),
        text = document.querySelector('#text4'),
        button = document.querySelector('#but4');
    button.addEventListener('click', setOption, false);
    function setOption() {
        select.selectedIndex = parseInt(text.value);
    }
}
task4();

// 5
// Дан селект со списком стран. Сделайте так, чтобы при
// выборе страны рядом появлялся еще и селект со списком городов из этой страны.
function task5 () {
    var countries = document.querySelector('#select5'),
        cities = document.querySelectorAll('select.city');
    countries.addEventListener('change', getCity, false);
    function getCity(e) {
        var that = this;
        for (var i = 0; i < cities.length; i++) {
            var current = cities[i].getAttribute('class').split(' ')[1];
            var valueSelect = that.options[that.selectedIndex].value;
            console.log(i + " : " + (current === valueSelect));
            cities[i].style.display = 'none';
            if (current === valueSelect) {
                cities[i].style.display = 'inline-block';
                cities[i].style.marginLeft = '10px';
            }
        }
    }
}
task5();
