// Створити сутність "Людина".

// Властивості:
// імʼя;
// вік.
// Методи:
// конструктор, який приймає два параметри: імʼя та вік;
// метод, який виводить у консоль інформацію про людину.

// 2. Створити сутність "Автомобіль".

// Властивості:
// марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
// Bласник.
// Методи:
// конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, номерний знак 
// присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18, інакше виводити у консоль відповідне повідомлення
// метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина для виведення інформації про власника


// В якості демонстраціїї створити:

// декілька екземплярів класу Людина;
// декілька екземплярів класу Автомобіль;
// присвоїти власників автомобілям.

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  humanInfo() {
    console.log(`Hello ${this.name}. Your age:${this.age}`);
  }
}

class Auto {
  constructor(marka, model, year, owner) {
    this.marka = marka;
    this.model = model;
    this.year = year;
    this.owner = owner;

    if (owner.age > 18) {
      this.owner = owner;
    } else {
      console.log(`${owner} must be older`)
    }
  }
  infoOwner() {
    console.log(`marka: ${this.marka}, model: ${this.model}, year: ${this.year}, `)
  }
}

let human1 = new Human('Konstantin', 32);
let human2 = new Human('Anna', 27);

let auto1 = new Auto('dodge', 'dart', 2017, human1);
let auto2 = new Auto('porshe', 'maccan', 2015, human2);

auto1.infoOwner();
auto2.infoOwner();