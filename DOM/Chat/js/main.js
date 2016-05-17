(function IIFE (argument) {
	'use string';

	// найти
	var inputElement = $('#message'),
		divElement = $('#result'),
		nameInput = $('#name');

	function addMessage (text, name) {
		var div = $('<div>');
		div.attr('class', 'message');

		div.html('<b>' + name + ':</b> ' + text);
		divElement.append( div );
	}

	function getName () {
		return $("#name").val();
	}

	function onKeyUpHandler (event) {
		if (event.keyCode === 13) {

			addMessage(event.target.value, getName());
		
			event.target.value = '';
		}
	}

	// вешаем событие
	inputElement.on('keyup', onKeyUpHandler);

})();