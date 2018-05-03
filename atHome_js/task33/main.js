// Задачи на некоторые продвинутые функции JavaScript

// На forEach
// 1
// Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел.
function task1() {
   var arr = [1,2,3,4,5,6];
   var newArr = [];
   arr.forEach(function(elem, index){
        newArr.push(Math.pow(elem,2));
        return newArr;
   });
   console.log(newArr);
}
task1();

// 2
// Дан массив с числами. Найдите сумму этих чисел.
function task2() {
    var arr = [1,2,3,4,5,6,7];
    var sum = 0;
    var result = arr.forEach(function(elem){
        sum += elem;
    });
    console.log(sum);
}
task2();

// На map
// 3
// Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел.
function task3() {
    var arr = [1,2,3,4,5,6,7];
    var newArr = arr.map(function(elem){
        return Math.pow(elem, 2);
    });
    console.log(newArr);
}
task3();

// На every, some
// 4
// Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля
function task4(){
    var arr = [1,2,3,4,5,6,7,8];
    var flag = arr.every(function(elem){
        if (elem > 0) {
            return true;
        } else {
            return false;
        }
    });
    console.log(flag);
}
task4();

// 5
// Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы.
function task5(){
    var arr = [1,2,3,4,-5,6,7,8];
    var flag = arr.every(function(elem){
        return elem > 0;
    });
    console.log('flag: ' + flag);
}
task5();

// На filter
// 6
// Дан массив с числами. Оставьте в нем только отрицательные числа.
function task6() {
    var arr = [1,-2,3,4,-5,-6, 7];
    var newArr = arr.filter(function(elem){
        return elem < 0;
    });
    console.log('newArr6: ' + newArr);
}
task6();

// 7
// Дан массив с числами. Оставьте в нем только четные числа.
function task7() {
    var arr = [1,2,-3,-4,-5,8,12,14,16];
    var newArr = arr.filter(function(elem){
        return elem > 0;
    });
    console.log(newArr);
}
task7();

// 8
// Дан массив со строками. Оставьте в нем только те строки,
// длина которых больше 5-ти символов.
function task8(){
    var arr = ['How', 'do', 'you', 'feel', 'my', 'friend'];
    var newArr = arr.filter(function(elem){
        return elem.length > 5;
    });
    console.log(newArr);
}
task8();

// 9
// Дан массив, в нем могут быть обычные элементы и подмассивы,
// например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только подмассивы.

function task9(){
    var arr = [1, 2, [3, 4], 5, [6, 7]];
    var newArr = arr.filter(function(elem) {
        return Array.isArray(elem);
    });
    console.log(newArr);
}
task9();

// 10
// Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.
function task10(){
    var arr = [1,-2,-3,-5,6,8,9,-14];
    var i = 0;
    var newArr = arr.filter(function(elem){
        if (elem < 0) {
            i++;
            return true;
        }
        // return true;
    });
    console.log('Количество отрицательных чисел: ' + newArr.length);
    console.log(i);
}
task10();

// 11
// На reduce, reduceRight
// Дан массив с числами. Найдите сумму этих чисел.
function task11(){
    var arr = [1,2,3,4,5];
    // var sum = 0;
    var res = arr.reduce(function(sum, elem){
        sum += elem;
        return sum;
    },0);
    console.log(res);
}
task11();

// 12
// Дан массив с числами. Найдите сумму первых N элементов до первого нуля.
// Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 элемента,
// так как дальше стоит элемент с числом 0.
function task12(){
    var arr = [1, 2, 3, 0, 4, 5, 6];
    var i = 0;
    var res = arr.reduce(function(sum, elem){
        if (elem == 0) {
            i = sum;
        } else {
            sum += elem;
        }
        return sum;
    });
    console.log(i);
}
task12();

// 13
// Дан массив с числами. Найдите сумму последних N элементов до первого нуля с конца.
// Пример: [1, 2, 3, 0, 4, 5, 6]
// - суммируем последние 3 элемента, так как дальше стоит элемент с числом 0.
function task13(){
    var arr = [1, 2, 3, 0, 4, 5, 6];
    var i = 0;
    var res = arr.reduceRight(function(sum, elem){
        if (elem == 0) {
            i = sum;
        } else {
            sum += elem;
        }
        return sum;
    });
    console.log(i);
}
task13();

// 14
// Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить,
// чтобы в сумме получилось больше 10-ти
function task14(){
    var arr = [1,2,3,4,5,6,7,8,9,4];
    var i = 1;
    arr.reduce(function(sum, elem){
        if (sum < 11) {
            sum += elem;
            i++;
        }
        return sum;
    });
    console.log(i);
}
task14();

// 15
// Дан массив с числами. Узнайте сколько элементов с конца массива надо сложить,
// чтобы в сумме получилось больше 10-ти.
function task15(){
    var arr = [1,2,3,4,5,6,7,8,9,4];
    var i = 1;
    arr.reduceRight(function(sum, elem){
        if (sum < 11) {
            sum += elem;
            i++;
        }
        return sum;
    });
    console.log(i);
}
task15();

// Закрепление
// 16
// Дан массив с числами. Оставьте в нем только положительные числа.
// Затем извлеките квадратный корень и этих чисел.
function task16() {
    var arr = [1,4, -12,16,-8, 25, -7, 36];
    var newArr = arr.filter(function(elem){
        return elem > 0;
    }).map(function(elem) {
        return Math.sqrt(elem);
    });
    console.log(newArr);
}
task16();