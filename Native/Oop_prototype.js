// Базовый класс
var Appliances = function() {
	this._enabled = false; // устройство включено
}

// Включение устройства
Appliances.prototype.on = function() {
	this._enabled = true;
}

// Выключение устройства
Appliances.prototype.off = function() {
	this._enabled = false;
}

// Класс-наследник от Appliances
var Fridge = function(power) {
	this._food = [];
};

Fridge.prototype = new Appliances(); // Наследование от Appliances

// Метод добавления продуктов в холодильник
Fridge.prototype.addFood = function() {
	if (!this._enabled) {
		alert('Fridge is OFF!');
		return;
	}

	for (var i = 0; i < arguments.length; i++) {
		if (this._food.length >= 5) {
			console.log('That\'s too much!');
			break;
		}
		else {
			this._food.push(arguments[i]);
		}
	}
}

// Получение содержимого холодильника
Fridge.prototype.getFood = function() {
	return this._food.slice();
}

// Экземпляр класса Fridge (с мощностью 100)
var fridge1 = new Fridge(100);
fridge1.on();
fridge1.addFood('bread');
fridge1.addFood('eggs', 'cheese', 'apple');

// проверка добавить продукты в холодильник в обход метода класса addFood
var fridgeFood = fridge1.getFood();
fridgeFood.push('вилка', 'ложка');
console.log('fridgeFood', fridgeFood);

fridge1.addFood('bannana', 'cherry', 'apple'); // попытка переполнить холодильник

console.log('fridge1 contains: ', fridge1.getFood());


// Класс-наследник от Appliance
var CoffeeMachine = function(power) {
	// Appliances.call(this, power);
	
	this.power = power;

	this.timer;

	this.waterAmmount = 0;

	this.capacity = 300;

	this.isReady = function() {
		alert('Coffee is done');
		this._enabled = false;
	}
};

CoffeeMachine.prototype = new Appliances(); // Наследование от Appliances

// Сделать чашечку кофе
CoffeeMachine.prototype.makeCup = function(k, milk) {
	var time = this.power * 100 * 1/k + milk;

	if (milk && this.waterAmmount + milk > this.capacity) {
		alert('You try to set ' + ( parseInt(this.waterAmmount) + parseInt(milk) ) + 'ml. Max capacity ' + this.capacity);
		return;
	}

	if (this._enabled)
		this.timer = setTimeout(this.isReady, time);
	else
		alert('Coffeemachine is OFF!');
}

// Расширение метода off базового класса
CoffeeMachine.prototype.off = function() {
	Appliances.prototype.off.call(this);
	clearTimeout(this.timer);
	// alert('No coffee!');
}

// Экземпляр класса CoffeeMachine (с мощностью 50)
var coffee1 = new CoffeeMachine(50);
coffee1.waterAmmount = 200;
coffee1.on();
coffee1.makeCup(2, 50);

// coffee1.off();