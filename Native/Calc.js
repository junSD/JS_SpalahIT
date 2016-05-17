/* Калькулятор снабжения на всю жизнь */
var current = 29,
maxage = 110,
amount = 200, // 200 гр. творога
name = "творог";
full = ((maxage - current) * 365 * 200)/1000; // получаем значение в кг
result = "Вы должны приобрести "+full+" кг "+name+"а, чтобы вам хватило до глубой старости";
console.log(result);
alert(result);
