/*Задача 1. Какое из чисел больше? */
var a = prompt("Введите первое значение:", "");
var b = prompt("Введите второе значение:", "");
function greaterNum(a,b) {
    if (a > b) {
        return console.log("Наибольшее число между "+ a +" и "+ b +":", a);
    } else {
        return console.log("Наибольшее число между "+ a +" и "+ b +":", b);
    }
}



/*Как "нада" было сделать, чтобы выводило число, а не строку*/

function greaterNum(a,b) {
    var a, b;
    if (a > b) {
        return a;
    } else {
        return b;
    }  
}
console.log(greaterNum(5,10));