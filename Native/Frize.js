function Animal (name, weight) {
	this.name = name;
	this.weight = weight;

	this.getName = function () {
		console.info ("It name is " + this.name + ".");
	};

	this.getWeight = function () {
		console.info ("It weight is " + this.weight + " kg.");
	};

	this.setName = function (newName) {
		this.name = NewName;
		console.info ("It name is " + this.name + ".");
	};

	this.setWeight = function (newWeight) {
		this.weight = newWeight;
		console.info ("It weight is " + this.weight + " kg.");
	};


}

function Giraffe (name, weight) {
	Animal.apply(this, arguments);
}

function Elephant (name, weight) {
	Animal.apply(this, arguments);
}


function Frize (kg) {
	var isOpened = false,
		name = 'холодильник',
		weight = kg || 50,
		roominess = weight,
		list = [],
		del = [],
		isNow = false;

	this.open = function () {
		console.info('Открываем ' + name + ".");
		isOpened = true;
	};

	this.close = function () {
		console.info('Закрываем ' + name + ".");
		isOpened = false;
	};

	this.put = function (obj) {
		if (isOpened) {
			if ( roominess >= obj.weight) {
				list.push(obj);
				console.log("В " + name + "е сейчас находиться:");
				console.log(list);
				roominess = roominess - obj.weight;
				console.log("Вместимость: " + roominess);
			} else {
				console.warn('Нет места в ' + name + "е.");
			}
		} else {
			console.warn(name[0].toUpperCase() + name.slice(1) + ' закрыт.');
		}
	};

	this.pull = function (obj) {
		if (isOpened) {		
			for (var i = 0; i < list.length; i++) {
				if (list[i] === obj) {
					list.splice(i, 1);
					del.push(obj);
					console.log("Счетчик i --> " + i);
					console.log("В " + name + "е сейчас находиться:");
					console.log(list);
					console.log("Вы вытащили с " + name + "а:");
					console.log(del);
					isNow = true;
					console.log ("isNow: " + isNow);
				} else {
					console.log("Счетчик i --> " + i + ":" + " Такого объекта нет.");
					isNow = false;
					console.log ("isNow: " + isNow);
				}
					if (roominess < weight) {
						if (isNow) {
						roominess = roominess + obj.weight;
						console.log("Вместимость: " + roominess);
					} 
					} else {
					console.warn(name[0].toUpperCase() + name.slice(1) + " пустой.");
					}
			}
			if (roominess < weight) {
				del = [];
			}
		} else {
			console.warn(name[0].toUpperCase() + name.slice(1) + ' закрыт');
		}
	};

	this.getWeight = function () {
	    return weight;
	};
    this.getRoominess = function () {
	    return roominess;
	};
	
}

var elephant = new Elephant ("Sony", 50);
var giraffe = new Giraffe ("Bony", 50);
var frize = new Frize(150);