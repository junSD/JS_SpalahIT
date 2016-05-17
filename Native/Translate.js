/*Задача 2. Переводчик*/
/*Вариант 1. if....else if*/
function helloWorld(code) {
    var code = prompt ("Введите код страны (es; de; en)", "");
    if (code == "es") {
    return console.log("Hola, mundo!");  
    }
    else if (code == "de") {
    return console.log("Hallo, Welt!");
    }
    else if (code == "en") {
    return console.log("Hello, World!");
    }
    else {
    return console.log("Привет, Мир!");   
    }
}
/*Вариант 2. switch...case*/
function helloWorld(code) {
    var code = prompt ("Введите код страны (es; de; en)", "");
    switch (code) {
        case "es":
        return console.log("Hola, mundo!");
        break;
        case "de":
        return console.log("Hallo, Welt!");
        break;
        case "en":
        return console.log("Hello, World!");
        break;
        default:
        return console.log("Привет, Мир!");
    }
}

/*Вариант 3. Как нада было сделать по заданию - нужно получить строку на выходе*/

function helloWorld(code) {
    
    if (code == "es") {
    return "Hola, mundo!";  
    }
    else if (code == "de") {
    return "Hallo, Welt!";
    }
    else if (code == "en") {
    return "Hello, World!";
    }
    else {
    return "Привет, Мир!";   
    }
}
console.log(helloWorld("es"));
console.log(helloWorld("de"));
console.log(helloWorld("en"));