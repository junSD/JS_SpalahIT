var words = ['зима', 'весна', 'лето', 'осень'];

function printArray (arr) {
	for (var i = 0; i < arr.length; i++) {
		console.log( arr[ i ] );
	}
}
// от 0 до number
function getRandomInt(number) {
	return Math.floor( (number + 1) * Math.random());
}
function getBonus() {
	return 10 + getRandomInt(4) * 10;
}
// getRandomElement (array)
function getRandomElement(array) {
	var index;
	//array.length
	index = getRandomInt(array.length - 1);

	return array[ index ];
}


var word = getRandomElement(words), // лето
	bonus = 0,
	wordResult,
	lastGuessed = false;

// CODE HERE

function toArray(str) {
	var newArray = [];

	for (var i = 0; i < str.length; i++) {
		newArray.push( str[i] );
		// newArray[ i ] = str[i];
	}
	return newArray;
}

function getEmptyArray(str) {
	var newArray = [];

	for (var i = 0; i < str.length; i++) {
		newArray.push( '_' );
	}
	return newArray;
}

word = toArray(word); 
wordResult = getEmptyArray(word);
var streamBonus;
function guessLetter(letter) {
	
	var isGuess = false,
		currentBonus = 0;
	
	for (var i = 0; i < word.length; i++) {
		if ( word[i] === letter) {
			wordResult[ i ] = letter;
			streamBonus = getBonus();
			currentBonus = currentBonus + streamBonus * ((lastGuessed) ? 2: 1);
			console.log('Ф-ция getBonus(): ' + streamBonus); 
			console.log ('Текущий бонус = ' + currentBonus);
			isGuess = true;
			//newArrayPr = wordResult[ i ];

		}
	};

	if ( isGuess ) {
		
		console.log('Молодец! Ты угадал букву. Bonus ' + currentBonus);
		lastGuessed = true;
	} else {

		lastGuessed = false;
	}

	console.log(wordResult);
	

	//Так же необходиол сообщить сколько осталось угадать букв
	var count = 0;
	for (var i = 0; i < wordResult.length; i++) {
		
		if ( wordResult[i] === '_' ) {
			count++;
		}
		console.log(i, wordResult[i], wordResult[i] === '_', count);
	};
	console.log('Осталось угадать: ' + count);

	bonus += currentBonus;

	// и если все буквы отгаданы, то поздравить пользователя с этим событием.
	// 1, 3 ,5 , -1 => false
	// 0, true	
	if ( !count ) { 
		console.log('Ты угадал слово. Bonus: ' + bonus);
	}

}

//Бонус: Сделайте игру похожей на "Палач":
//Записывайте все буквы, которые пользователь пробывал и 
//проверять пробовали ли букву. Если пробовалась, то ничего не делаем.
//Следите за состоянием палача, некое число (начинается с 0), 
//и вычитаем или прибавляем к этому числу каждый раз когда угадывает или не угадывает букву.
//Как только состояние палача доходит до 6, сообщаем пользователю, 
//что он проиграл и показываем ему палача в консоли