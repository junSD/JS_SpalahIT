// Задачи на нововведения в ES6 для новичков

// На деструктуризацию
// 1
// Дан массив. Запишите первый элемент этого массива в переменную elem1,
// второй - в переменную elem2,
// третий - в переменную elem3, а все остальные элементы массива - в переменную arr.
function task1() {
   let [elem1, elem2, elem3, ...arr] = [1,2,3,4,5,6,7,8,9,10];
   console.log(elem1);
   console.log(elem2);
   console.log(elem3);
   console.log(arr);
}
task1();

// 2
// Дан массив. Запишите последний элемент этого массива в переменную elem1,
// а предпоследний - в переменную elem2
function task2() {
    var arr = [1,2,3,4,5,6,7,8,9,10];
   let [elem1, elem2, ...rest] = arr.reverse();
   console.log(elem1);
   console.log(elem2);
   // console.log(arr);
}
task2();

// 3
// Дан массив. Запишите второй элемент этого массива в переменную elem2.
// Первый элемент никуда записывать не надо.
function task3() {
    var arr = [1,2,3,4,5,6,7,8,9,10];
   let [, elem2, ...rest] = arr;
   console.log(elem2);
   // console.log(arr);
}
task3();

// 4
// Дан массив. Запишите второй элемент этого массива в переменную elem2,
// третий - в переменную elem3. Если в массиве нет третьего элемента
// - запишите в переменную elem3 значение 'eee', а если нет второго - в переменную
// elem2 запишите значение 'bbb'. Первый элемент никуда записывать не надо.
function task4() {
    var arr = [1,2,3,4,5,6,7,8,9,10];
   let [, elem2 = 'bye', elem3 = 'hi'] = arr;
   console.log(elem2);
   console.log(elem3);
}
task4();

// 5
// Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет'}.
// Запишите соответствующие значения в переменные name, surname и age.
function task5(){
    let obj = {'name': 'Петр', 'surname': 'Петров', 'age': '20 лет'};
    let {name, surname, age} = obj;
    console.log(name);
    console.log(surname);
    console.log(age);
}
task5();

// 6
// Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет', }.
// Запишите соответствующие значения в переменные name, surname и age.
// Сделайте так, чтобы, если какое-то значение не задано - оно принимало следующее
// значение по умолчанию: {name: 'Аноном', 'surname': 'Анонимович', 'age': '? лет'}.
function task6() {
    let obj = {
        name: 'Петр',
        // surname: 'Петров',
        age: '20 лет'};
    let {name: str = 'Аноном', surname: sur = 'Анонимович' , age: a = '? лет'} = obj;
    console.log(str);
    console.log(sur);
    console.log(a);
}
task6();

// На итераторы
// 7
// Дан массив, выведите его элементы последовательно на экран
function task7() {
    var arr = [1,2,3,4,5,6,7,8];
    for (let value of arr) {
        console.log(value);
    }
}
task7();

// 8
// Дан массив, выведите его элементы последовательно на экран
// в обратном порядке (подсказка: сначала перевернем массив через reverse).
function task8(){
    var arr = [1,2,3,4,5,6,7,8];
    for (let value of arr.reverse()) {
        console.log(value);
    }
}
task8();

// 9
// Дан массив с числами, найдите сумму элементов этого массива.
function task9(){
    let arr = [1,2,3,4,5,6];
    let sum = 0;
    for (let elem of arr) {
        sum += elem;
    }
    console.log(sum);
}
task9();

// 10
// Дана строка. С помощью for-of подсчитайте количество букв 'о' в ней.
function task10(){
    let i = 0;
    let str = 'Hello world';
    for (let elem of str) {
        if(elem != " ") {
            i++;
        }
    }
    console.log('Количество: ' + i);
}
task10();

// На функции
// Сделайте функцию, которая получает имя пользователя
// и выводит на экран 'Привет, Имя' (вместо Имя - полученное параметром имя).
// По умолчанию (то есть если не передать параметр)
// функция должна выводить 'Привет, Аноним'.
function task11(){
    function sayHi(name = 'Аноним') {
        console.log('Привет ' + name);
    }
sayHi();
sayHi('Вася');
}
task11();

// 12
// Дан объект с настройками, например,
// {id: 'elem', color: 'blue', border: '1px solid red', font: '15px Arial'}.
// Сделайте функцию, которая получает этот объект,
// извлекает из него все настройки в соответствующие переменные
// и для элемента с указанным id (в нашем случае это 'elem')
// ставит заданные CSS свойства.
// В объекте могут быть только эти ключи, однако, какой-либо ключ (кроме id)
// может быть не задан - в этом случае пусть возьмутся следующие
// значения по умолчанию: color: 'blue', border: '1px solid red', font: '15px Arial'.
function task12(){
let options = {id: 'elem', color: 'blue', border: '1px solid red', font: '15px Arial'};
function func(obj) {
    let {
        id,
        color:c = 'blue',
        border:b = '1px solid red',
        font:f = '15px Arial'} = obj;
    let elem = document.getElementById('elem');
    let str = 'color:' + c + ';border: ' + b + ';font: ' + f ;
    elem.style.cssText = str;
}
func(options);
}
task12();

// 13
// Даны абзацы с числами. Сделайте так, чтобы по нажатию на абзац
// начинал тикать таймер, который каждую секунду будет увеличивать
// на единицу число в этом абзаце.
// По нажатию на другой абзац должно происходить то же самое - он тоже начнет тикать.
function task13(){
    var parags = document.querySelectorAll('.task13');
parags.forEach(elem => elem.addEventListener('click',
    () => setInterval(
    () => elem.innerHTML=Number(elem.innerHTML) +1, 1000)
));
}
task13();