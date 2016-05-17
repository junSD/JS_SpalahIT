(function IIFE () {
	'use strict';
  
  function propContent (nodeElement, attr, content) {
	var key;
    var value;
	if (nodeElement && nodeElement.setAttribute) {
		for (key in attr) {
			if ( attr.hasOwnProperty(key) ) {
				value = attr[key];
				nodeElement.setAttribute(key, value);	
			}
		}
		if (content) {
        nodeElement.innerHTML = content;}
        else {nodeElement.innerHTML = "";}
	}
}

function appendChilds(parentNode, arrayNodes) {
   if (parentNode && parentNode.appendChild) { 
        for (var i = 0; i < arrayNodes.length; i++) {
           parentNode.appendChild(arrayNodes[i]);
				}
	 }
}

	// find element
    var inputElement = document.querySelector("#message");
	var divElement = document.querySelector("#result");
	var inputName = document.querySelector("#name");
    var divResultHead = document.querySelector("#hide");
    var divWords = document.querySelector("#words");
    var inputSubmit = document.querySelector("#button");
    
    
    divResultHead.hidden = !divResultHead.hidden;
    
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
  
  function guessLetter(letter, name) {
    
     // create new div (message)
        var funcGetBonus = document.createElement('div');
        var currentBonusStat = document.createElement('div');
        var guessToWord = document.createElement('div');
        var currentGuessWord = document.createElement('div');
        var leftToGuess = document.createElement('div');
        var bonusYouGuess = document.createElement('div');
    
      
    //--------------------------------------------------------
    // create new windowMassage
		var windowMassage = document.createElement('div');
		windowMassage.setAttribute('class', 'message');
        var EnterWord = document.createElement('div');
        EnterWord.setAttribute('class', 'word');
	// add windowMassage to 'text'
		windowMassage.innerHTML = '<strong>' + name + ' ' + '</strong>' + 'ввел букву - '  + '<i>' + letter.toUpperCase() + '</i>' + '</br>';
    // add EnterWord to 'text'
        EnterWord.innerHTML = "Введенная буква: " + letter.toUpperCase();
  
    // Append
        appendChilds(divWords, [EnterWord]);
        appendChilds(divElement, [windowMassage]);
        appendChilds(windowMassage, [funcGetBonus, currentBonusStat, guessToWord, currentGuessWord, leftToGuess, bonusYouGuess]);

    //----------------------------------------------------------
    
    
    
	var isGuess = false,
		currentBonus = 0;
	
	for (var i = 0; i < word.length; i++) {
		if ( word[i] === letter) {
			wordResult[ i ] = letter;
			streamBonus = getBonus();
			currentBonus = currentBonus + streamBonus * ((lastGuessed) ? 2: 1);
			funcGetBonus.innerHTML = 'Ф-ция getBonus(): ' + streamBonus; 
			currentBonusStat.innerHTML = 'Текущий бонус = ' + currentBonus;
			isGuess = true;
			//newArrayPr = wordResult[ i ];

		}
	}

	if ( isGuess ) {

		guessToWord.innerHTML = 'Молодец! Ты угадал букву. Bonus ' + currentBonus;
		lastGuessed = true;
	} else {

		lastGuessed = false;
      guessToWord.innerHTML = '<strong style=' + "'color:red'" + '>' + 'Ты не угадал букву!' + '</strong>';
      
	}

	currentGuessWord.innerHTML = "Слово: " + '[ ' + wordResult + ' ]';
	

	//Так же необходимо сообщить сколько осталось угадать букв
	var count = 0;
	for (i = 0; i < wordResult.length; i++) {
		
		if ( wordResult[i] === '_' ) {
			count++;
		}

		console.log(i, wordResult[i], wordResult[i] === '_', count);
	}
	leftToGuess.innerHTML = 'Осталось угадать: ' + count;

	bonus += currentBonus;

	// и если все буквы отгаданы, то поздравить пользователя с этим событием.
	// 1, 3 ,5 , -1 => false
	// 0, true	
	if ( !count ) { 
		bonusYouGuess.innerHTML = 'Ты угадал слово. Bonus: ' + bonus;
	}
    
}
  
	function onKeyUpHandler(event) {
		if (event.keyCode === 13) {
          
			guessLetter(event.target.value, getName());
			event.target.value = '';
		}
	}

	function getName () {
		var name = inputName;
			return name.value || "Игрок";
	}
  
    function onClickHandler() {
      alert("Игра запустилась!");
      var div = document.createElement('div');
	  div.setAttribute('class', 'message');  
	  div.innerHTML = 'Загаданное слово: ' + '[ ' + wordResult + ' ]';
      appendChilds(divElement, [div]);
      divResultHead.hidden = false;
    }
      
	// вешаем событие
    inputSubmit.addEventListener("click", onClickHandler);
	inputElement.addEventListener("keyup", onKeyUpHandler);
  




})();