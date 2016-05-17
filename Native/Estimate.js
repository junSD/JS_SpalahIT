/*Задача 3. Постановщик оценок*/
function assignGrade(grade) {
   
    if (grade >= 1 && grade < 20) {
        return console.log("Ваша оценка - 1");
    }
    else if (grade >= 20 && grade < 40) {
        return console.log("Ваша оценка - 2");
    }
    else if (grade >= 40 && grade < 60) {
        return console.log("Ваша оценка - 3");
    }else if (grade >= 60 && grade < 80) {
        return console.log("Ваша оценка - 4");
    }else if (grade >= 80 && grade <= 100) {
        return console.log("Ваша оценка - 5");
    }
    else if (grade == 0) {
    return alert("Введенное значение неверно");
}
}

/*Проверка работы фунции assignGrade*/
check = alert("Проверка на работу ф-ции assignGrade");
var i = prompt ("Введите начальное значение i (от 0 до 100)", "");

for (i; i <= 100; i++) {
    p = assignGrade(i);
}

/*Как нада было сделать по заданию*/

function assignGrade(grade) {
   
    if (grade >= 1 && grade < 20) {
        return "Ваша оценка - 1";
    }
    else if (grade >= 20 && grade < 40) {
        return "Ваша оценка - 2";
    }
    else if (grade >= 40 && grade < 60) {
        return "Ваша оценка - 3";
    }else if (grade >= 60 && grade < 80) {
        return "Ваша оценка - 4";
    }else if (grade >= 80 && grade <= 100) {
        return "Ваша оценка - 5";
    }
    else if (grade == 0) {
    return "Введенное значение неверно";
}
}
console.log(assignGrade(25));
console.log(assignGrade(55));
console.log(assignGrade(85));
