// Задачи на основы работы с ООП в JavaScript

// Простые задачи
// 1
// Реализуйте класс Worker (Работник), который будет иметь следующие
// свойства: name (имя), surname (фамилия), rate (ставка за день работы),
// days (количество отработанных дней). Также класс должен иметь метод getSalary(),
// который будет выводить зарплату работника. Зарплата
// - это произведение (умножение) ставки rate на количество отработанных дней days.
function task1() {
   class Worker {
      constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
      }
      getSalary() {
        return this.rate * this.days;
      }
   }
  var worker = new Worker('Иван', 'Иванович', 100 , 21);
  console.log(worker.name);
  console.log(worker.surname);
  console.log(worker.rate);
  console.log(worker.days);
  console.log(worker.getSalary());
  var worker2 = new Worker('Петя', 'Иванович', 100 , 21);
  function getSum() {
    var sum = 0;
    if (arguments.length) {
      for (var i = 0; i < arguments.length; i++) {
      sum += arguments[i];
      }
    }
    return sum;
  }
  var sum = getSum(worker.getSalary(), worker2.getSalary());
  console.log('Сумма зарплат: ' + sum);
}
task1();

// Геттеры и сеттеры
// 2
// Модифицируйте класс Worker из предыдущей задачи следующим образом:
// сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры.
function task2() {
   class Worker {
      constructor(name, surname, rate, days) {
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
      }
      // getters
      getName() {
        return this._name;
      }
      getSurname() {
        return this._surname;
      }
      getRate() {
        return this._rate;
      }
      getDays() {
        return this._days;
      }
      getSalary() {
        return this._rate * this._days;
      }

   }
  var worker = new Worker('Иван', 'Иванович', 100 , 21);
  console.log(worker.getName());
  console.log(worker.getSurname());
  console.log(worker.getRate());
  console.log(worker.getDays());
  console.log(worker.getSalary());
  var worker2 = new Worker('Петя', 'Иванович', 100 , 21);
  function getSum() {
    var sum = 0;
    if (arguments.length) {
      for (var i = 0; i < arguments.length; i++) {
      sum += arguments[i];
      }
    }
    return sum;
  }
  var sum = getSum(worker.getSalary(), worker2.getSalary());
  console.log('Сумма зарплат: ' + sum);
}
task2();

// 3
// Модифицируйте класс Worker из предыдущей задачи следующим образом:
// для свойства rate и для свойства days сделайте еще и методы-сеттеры.
function task3() {
   class Worker {
      constructor(name, surname, rate, days) {
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
      }
      // getters
      getName() {
        return this._name;
      }
      getSurname() {
        return this._surname;
      }
      getRate() {
        return this._rate;
      }
      getDays() {
        return this._days;
      }
      getSalary() {
        return this._rate * this._days;
      }
      //setters
      setRate(rate) {
        this._rate = rate;
      }
      setDays(days) {
        this._days = days;
      }
   }
  var worker = new Worker('Иван', 'Иванович', 100 , 21);
  worker.setRate(50);
  worker.setDays(22);
  console.log(worker.getRate());
  console.log(worker.getDays());
  console.log(worker.getSalary());
  var worker2 = new Worker('Петя', 'Иванович', 100 , 21);
  function getSum() {
    var sum = 0;
    if (arguments.length) {
      for (var i = 0; i < arguments.length; i++) {
      sum += arguments[i];
      }
    }
    return sum;
  }
  var sum = getSum(worker.getSalary(), worker2.getSalary());
  console.log('Сумма зарплат: ' + sum);
}
task3();

// Практика
// 4
// Реализуйте класс MyString, который будет иметь следующие методы:
// метод reverse(), который параметром принимает строку,
// а возвращает ее в перевернутом виде, метод ucFirst(),
// который параметром принимает строку, а возвращает эту же строку,
// сделав ее первую букву заглавной и метод ucWords, который
// принимает строку и делает заглавной первую букву каждого слова этой строки.
function task4() {
  class MyString {
    reverse (str) {
    return str.split('').reverse().join('');
  }
    ucFirst (str) {
    str = str.substr(0,1).toUpperCase() + str.substr(1);
    return str;
  }
    ucWords (str) {
      var result = [];
      str = str.split(' ');
      if (str.length == 1) {
        return str;
      } else {
        for (var i = 0; i < str.length; i++) {
          str[i] = str[i].substr(0,1).toUpperCase() + str[i].substr(1);
          result.push(str[i]);
        }
        return result.join(' ');
      }
    }
  }
  var str_two = 'hello world',
      str_one = 'hello';
  var str1 = new MyString();
  console.log(str1.reverse(str_one));
  console.log(str1.ucFirst(str_one));
  console.log(str1.ucWords(str_two));
}
task4();

// 5
// Реализуйте класс Validator, который будет проверять строки.
// К примеру, у него будет метод isEmail параметром принимает строку и проверяет,
// является ли она корректным емейлом или нет.
// Если является - возвращает true, если не является - то false.
// Кроме того, класс будет иметь следующие методы: метод isDomain
// для проверки домена,
// метод isDate для проверки даты и метод isPhone для проверки телефона:
function task5 () {
  class Validator {
    isEmail (str) {
      if (str.indexOf('@') >= 2 && str.indexOf('@') <= 7) {
        return true;
      } else if (str.indexOf('@') == -1) {
        return false;
      }
      return false;
    }
    isDomain (str) {
      if (str.substr(0,7) == 'phphtml') {
        return true;
      } else {
        return false;
      }
    }
    isDate (str) {
      str = str.split('.');
      var currentDate = new Date(),
          inputDate = new Date(str[2], str[1], str[0]);
    }
    isPhone (str) {
      return str;
    }
  }
  var validateForm1 = new Validator();
}
task5 ();