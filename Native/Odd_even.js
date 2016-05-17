/*Задача 3.1. "Генератор" четных - нечетных чисел*/
function Loop(n) {
	for (var i = 0; i <= n; i++) {
	if (i % 2 == 0) {
		console.log("Четное число -", i);
	}else {
		console.log("Нечетное число -", i);
	}
	}
};

