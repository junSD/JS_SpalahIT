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

function homeWorkDiv() {
	var books = [{
		name: 'Альберт Эйнштейн',
		author: 'Юлия Потерянко',
		pages: 96,
		img: 'http://bukva.ua/img/products/408/408491_165.jpg',
		link: 'http://bukva.ua/catalog/browse/366/1/672010'
	}, {
		name: 'США. Путеводитель Lonely planet',
		author: 'Мария Ерохина',
		pages: 1264,
		img: 'http://bukva.ua/img/products/325/325306_165.jpg',
		link: 'http://bukva.ua/catalog/browse/288/1/313808'
	}, {
		name: 'Перевернутый мир',
		author: 'Ирина Карпинос',
		pages: 158,
		img: 'http://bukva.ua/img/products/410/410076_165.jpg',
		link: 'http://bukva.ua/catalog/browse/395/1/673120'
	}];
	var divResult = document.createElement('div');
	var ul = document.createElement('ul');
	
	propContent(ul, {class: 'books'});
	propContent(divResult, {id: 'result'}, '<b>Список книг:</b>' ); 

	function createLi (book) {
		var li = document.createElement('li'),
		a = document.createElement('a'),
		span1 = document.createElement('span'),
		span2 = document.createElement('span'),
		span3 = document.createElement('span'),
		img = document.createElement('img');

		propContent(li, {class: 'item'});
		propContent(a, {href: book.link});
		propContent(span1, {class: 'title'}, '<b>' + book.name + '</b>' + '</br>' );
		propContent(span2, {class: 'pages'}, ' Страниц: ' + book.pages + '</br>' );
		propContent(span3, {class: 'Author'}, ' Автор: ' + book.author + '</br>'  );
		propContent(img, {src: book.img, alt: book.name});


		/*_ver.2 li.setAttribute('class', 'item');
		a.setAttribute('href', book.link);
		span1.setAttribute('class', 'title');
		span2.setAttribute('class', 'pages');
		span3.setAttribute('class', 'Author');
		img.setAttribute('src', book.img);
		img.setAttribute('alt', book.name);
		span1.innerHTML = '<b>' + book.name + '</b>' + '</br>';
		span2.innerHTML = ' Страниц: ' + book.pages + '</br>';
		span3.innerHTML = ' Автор: ' + book.author + '</br>';*/

		appendChilds(li, [a, span2, span3, img]);
		appendChilds(a, [span1]);

		/*_ver.2 li.appendChild( a );
		a.appendChild( span1 );
		li.appendChild( span2 );
		li.appendChild( span3 );
		li.appendChild( img );*/

		/*_ver.1 li.innerHTML = '<a href=' + book.link + '>'
    + '<span class=' + 'title' + '>' + '<b>' + book.name + '</b>' +'</span>' + '</a>' + '</br>'
    + ' <span class=' + 'pages' + '>' + ' Страниц: ' + book.pages + '</span>' + '</br>'
    + ' <span class=' + 'Author' + '>' + ' Автор: ' + book.author + '</span>' + '</br>'
    + '<img src=' + book.img + 'alt= ' + book.name + '>';*/
   
    
		return li;
	}

	for (var i = 0; i < books.length; i++) {	
		ul.appendChild( createLi( books[i] ) );
	}

	divResult.appendChild( ul );
	document.body.appendChild( divResult );
  	divResult.style.backgroundColor = "#F3D1B5";
  	divResult.style.width = "350px";
  	divResult.style.height = "650px";
  	divResult.style.overflow = "scroll";
  	divResult.style.padding = "5px";
  	divResult.style.borderRadius = "5px";
  	divResult.style.backgroundImage = "url(http://goodoboi.ru/images/foto/original/20130714130934342.jpg)";
}

homeWorkDiv();