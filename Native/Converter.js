/* Жара! Создаем конвертер*/
/* Перевод с °F в °C*/
var tempF = 89;
tempFtoC = ((tempF - 32) * 5) / 9; // Получаем температуру по шкале Цельсия
resultFtoC = "Температура по шкале Фаренгейта составляет "+tempF+"°F, значит по шкале Цельсия - "+tempFtoC+"°C "
console.log(resultFtoC);
alert(resultFtoC);

/* Жара! Создаем конвертер*/
/* Перевод с °C в °F*/
var tempC = 89;
tempCtoF = ((tempC * 9) / 5) + 32; // Получаем температуру по шкале Фаренгейта
resultCtoF = "Температура по шкале Цельсия составляет "+tempC+"°C, значит по шкале Фаренгейта - "+tempCtoF+"°F "
console.log(resultCtoF);
alert(resultCtoF);
