// 1. Створити клас Людина.

//     Властивості:
//     імʼя;
//     стать.
//     Методи:
//     конструктор, який приймає два параметри: імʼя та стать.

// 2. Створити клас Квартира.

//     Властивості:
//     конструктор не потрібен;
//     масив жителів, який при створенні пустий.
//     Методи:
//     додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.

// 3. Створити клас Будинок.

//     Властивості:
//     масив квартир, який при створенні пустий;
//     максимальна кількість квартир.
//     Методи:
//     конструктор, який приймає один параметр: максимальну кількість квартир;
//     додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, чи не буде кількість перевищувати максимальну кількість квартир, і якщо це так, додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.


// В якості демонстраціїї створити:

//     декілька екземплярів класу Людина;
//     декілька екземплярів класу Квартира;
//     додадити екземпляри класу Людина до екземплярів класу Квартира;
//     екземпляр класу Будинок;
//     додадити екземпляри класу Квартира до екземплярів класу Будинок.

// 1. Класс человек
class Human {
  constructor(name, gender) {
  this.name = name;
  this.gender = gender;
  }
}
  
// 2. Класс Квартира
class Apartment {
  constructor() {
  this.people = [];                 
  }
  addPeople(human) {
  this.people.push(human);
  }
}

// 3. Клас дом
class House {
  constructor(maxApartment) {
  this.apartments = [];
  this.maxApartment = maxApartment;
  }
  
  addApartment(apartment) {
  if (this.apartment.length < this.maxApartment) {
  this.apartment.push(apartment);
  } else {
  console.log("very much apartments");
  }
  }
}

const person1 = new Human("Konstantin", "male");
const person2 = new Human("Maria", "female");

const apartment1 = new Apartment();
apartment1.addPeople(person1);
apartment1.addPeople(person2);

const house1 = new House(2);
house1.addApartment(apartment1);

const house2 = new Apartment();
house1.addApartment(apartment1); 

const house3 = new Apartment();
house1.addApartment(apartment1); 
  

