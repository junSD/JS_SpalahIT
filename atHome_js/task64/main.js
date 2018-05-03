// Задачи на применение ООП при работе с DOM

// Работа с элементами
// 1
 // Реализуйте класс Elem, который параметром принимает селектор одного HTML
 // элемента и затем может выполнять с ним различные операции.
function task1(){
  class Elem {
    constructor (selector) {
      this.elem = document.querySelector(selector);
    }
    html(text) {
      this.elem.innerHTML = text;
      return this;
    }
    append(text) {
      var arr = this.elem.innerHTML.split('');
      arr.unshift(text);
      var str = arr.join('');
      this.elem.innerHTML = str;
      return this;
    }
    prepend(text) {
      this.elem.innerHTML = this.elem.innerHTML + text;
      return this;
    }
    attr(name, value) {
      this.elem.setAttribute(name, value);
      return this;
    }
  }
  var elem = new Elem('#elem');
  elem.html('Bye');
  elem.append('!!!!');
  elem.prepend(' Some text');
  elem.attr('class', 'eee');
  elem.attr('class', 'www').attr('title', 'hello');

}
task1();

// 2
// Модифицируйте класс Elem из предыдущей задачи так,
// чтобы он мог работать не только с одним элементом, но и одновременно с группой,
// как это сделано в jQuery. Кроме того:
// реализуйте еще и метод each, который будет работать также, как и each из jQuery.
function task2(){
  class Elem {
    constructor (selector) {
      this.elems = document.querySelectorAll(selector);
    }
    html(text) {
          for (var i = 0; i < this.elems.length; i++) {
            if (text) {
              this.elems[i].innerHTML = text;
            } else {
              return this.elems[i].innerHTML;
            }

        }
      return this;
    }
    append(text) {
      for (var i = 0; i < this.elems.length; i++) {
      var arr = this.elems[i].innerHTML.split('');
      arr.unshift(text);
      var str = arr.join('');
      this.elems[i].innerHTML = str;
    }
      return this;
    }
    prepend(text) {
      for (var i = 0; i < this.elems.length; i++) {
      this.elems[i].innerHTML = this.elems[i].innerHTML + text;
    }
      return this;
    }
    attr(name, value) {
      for (var i = 0; i < this.elems.length; i++) {
      this.elems[i].setAttribute(name, value);
    }
      return this;
    }
    each (func) {
      var that = this;
      for (var i = 0; i < that.elems.length; i++) {
        func(i, that.elems[i]);
      }
    }
  }
  var elems1 = new Elem('.elems');
  console.log(elems1.html());
  // elems1.html('Hello');
  // elems1.append('!!!!');
  // elems1.prepend(' Some text');
  // elems1.attr('class', 'eee');
  // elems1.attr('class', 'www').attr('title', 'hello');
  // elems1.each(function(index, elem) {
  //   alert(elems1.html());
  // });

}
task2();

// 3
// Практика
// Реализуйте класс Rectangle,
// о котором я рассказываю в видео в теоретической части урока.
// У него должны быть следующие свойства: ширина width, высота height.
// Также у него должны быть следующие методы: получить ширину getWidth,
// установить ширину setWidth,
// получить высоту getHeight, установить высоту setHeight.
function task3() {
  class Rectangle {
    constructor (width, height) {
      this.elem = document.createElement('div');
      this.setWidth(width);
      this.setHeight(height);
      this.elem.style.border = '1px solid red';
      document.body.appendChild(this.elem);
    }
    //set
    setWidth(value) {
      this.elem.style.width = value + 'px';
      return this;
    }
    setHeight(value) {
      this.elem.style.height = value + 'px';
      return this;
    }
    //get
    getWidth() {
      return parseInt(this.elem.style.width);
    }
    getHeight() {
      return parseInt(this.elem.style.height);
    }
  }
  var rect = new Rectangle(50, 40);
  rect.setWidth(200);
  rect.setHeight(300);
  rect.setHeight(150).setWidth(150);

}
task3();