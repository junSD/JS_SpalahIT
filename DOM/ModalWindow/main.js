//1
var modalDiv = $('<div>', {
	id: 'modal_form'
});

var FormData = $('<form>', {
	method: "POST",
	name:  "form"
})

var fieldset_first = $('<fieldset>');

fieldset_first.append($('<legend>', {
	html: 'Ввод личных данных'
}), [$('<p>', {
	class: "question",
	html:'<label for=' + 'first-name' + '>' + 'Ваше имя:' + '</label>'
}), $('<p>').append($('<input>', {
	class: 'input',
	type: 'text',
	name: 'first-name',
	id: 'first-name',
	size: '30',
	maxlenght: '10'
})), $('<p>', {
	class: "question",
	html:'<label for=' + 'last-name' + '>' + 'Ваше имя:' + '</label>'
}), $('<p>').append($('<input>', {
	class: 'input',
	type: 'text',
	name: 'last-name',
	id: 'last-name',
	size: '30',
	maxlenght: '10'
}))]);

//2

var fieldset_second = $('<fieldset>');

var select = $('<select>', {
	name: 'sleep',
	id: 'sleep'
}).append($('<option>', {
	value: 'five',
	html: '5'
}), [$('<option>', {
	value: 'six',
	html: '6'
}), $('<option>', {
	value: 'seven',
	html: '7'
}), $('<option>', {
	value: 'eight',
	html: '8',
	selected: 'on'
}), $('<option>', {
	value: 'more-eight',
	html: 'больше 8'
})]);


fieldset_second.append($('<legend>', {
	html: 'Вопросы'
}), [$('<p>', {
	class: "question",
	html:'Любите ли вы экономить время?'
}), $('<p>').append($('<label>', {
	html: 'Да'
}).append($('<input>', {
	type: "radio",
	name: "time",
	value: "yes",
	checked: 'on'
})), [$('<label>', {
	html: 'Нет'
}).append($('<input>', {
	type: "radio",
	name: "time",
	value: "no",
	checked: 'on'
}))]), $('<p>', {
	class: "question",
	html:'Какими инструментами для экономии времени вы пользуетесь?'
}), $('<p>').append($('<label>', {
	html: 'Ежедневник'
}).append($('<input>', {
	type: "checkbox",
	name: "ez",
	checked: 'on'
})), [$('<label>', {
	html: 'Хронометраж'
}).append($('<input>', {
	type: "checkbox",
	name: "hr"
})), $('<label>', {
	html: 'Свои наработки'
}).append($('<input>', {
	type: "checkbox",
	name: "sv"
})) ]), $('<p>', {
	class: "question",
	html:'<label for=' + 'sleep' + '>' + 'Сколько часов в день вы спите?' + '</label>'
}), $('<p>').append(select) ]);


// 3

var p_workTime = $('<p>', {
	class: 'question',
	id: 'tp',
	html:'<label for=' + 'text' + '>' + 'Поделитесь своими наработками в экономии времени:' + '</label>'
})

var p_textarea = $('<p>').append($('<textarea>', {
	placeholder: "Ваше сообщение",
	onfocus: "placeholder='';",
	onblur: "placeholder='Ваше сообщение';",
	name: "text",
	cols: "60",
	rows: "7"
}));

// 4

var button = $('<p>').append($('<input>', {
	class: "reset",
	type: "reset",
	name: "reset",
	value: "Сброс"
}), [$('<input>', {
	class: "submit",
	type: "submit",
	name: "submit",
	value: "Отправить"
})])

FormData.append(fieldset_first, [fieldset_second, p_workTime, p_textarea, button]);

modalDiv.append($('<span>', {
	id: 'modal_close',
	html: 'X'
}), [FormData]);

$('body').append(modalDiv);



	var link = $('a#link');
	var close = $('#modal_close, #overlay');
	var overlay = $('#overlay');
	
	function SayHi () {
		alert("Добрый день. Открываем окно заполнения Анкеты.");
	}

	function SayBye () {
		alert("Спасибо за проявленный интерес.");
	}

	
	link.on('click', function(event){
		SayHi();
		event.preventDefault(); 
		overlay.fadeIn(400, 
		 	function(){ 
				$('#modal_form') 
					.css('display', 'block') 
					.animate({opacity: 1, top: '50%'}, 200); 
			});
	});
		
	close.on('click', function(){
	 	SayBye();
		$('#modal_form')
			.animate({opacity: 0, top: '45%'}, 200,  
				function(){
					$(this).css('display', 'none'); 
					overlay.fadeOut(400); 
				});                    
	});



