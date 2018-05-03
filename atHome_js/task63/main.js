// Задачи на наследование классов в JavaScript


// 1
// Реализуйте класс Student (Студент),
// который будет наследовать от класса User, подобно тому,
// как это сделано в теоретической части урока.
// Этот класс должен иметь следующие свойства: name (имя, наследуется от User),
// surname (фамилия, наследуется от User), year (год поступления в вуз).
// Класс должен иметь метод getFullName() (наследуется от User),
// с помощью которого можно вывести одновременно имя и фамилию студента.
// Также класс должен иметь метод getCourse(),
// который будет выводить текущий курс студента (от 1 до 5).
// Курс вычисляется так: нужно от
// текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.
function task1() {
class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  getFullName() {
    return this.name + ' ' + this.surname;
  }
}

class Student extends User{
  constructor (name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  getCourse() {
    var date = new Date(),
        currentYear = date.getFullYear();
    if ((currentYear - this.year) <= 5) {
      return currentYear - this.year;
    } else {
      alert('Incorrect year!')
      return false;
    }
  }
}
var student = new Student('Karl', 'Karlovich', 2015);
console.log(student.getCourse());
console.log(student.year);
}
task1();