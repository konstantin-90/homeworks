// Мережа фастфудів пропонує кілька видів гамбургерів:

//     маленький (50 тугриків, 20 калорій);
//     великий (100 тугриків, 40 калорій).

// Гамбургер може бути з одним із декількох видів начинок:

//     сиром (+ 10 тугриків, + 20 калорій);
//     салатом (+ 20 тугриків, + 5 калорій);
//     картоплею (+ 15 тугриків, + 10 калорій).

// Можна додати добавки:

//     посипати приправою (+15 тугриків, 0 калорій) - полити майонезом (+ 20 тугриків, +5 калорій).
// Напишіть програму, яка розраховує вартість та калорійність гамбургера. Використовуйте ООП підхід.
// (підказка: потрібен клас Гамбургер, константи, методи для вибору опцій та розрахунку потрібних величин)

class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  static SIZE_SMALL = { price: 50, calories: 20 };
  static SIZE_LARGE = { price: 100, calories: 40 };
  static STUFFING_CHEESE = { price: 10, calories: 20 };
  static STUFFING_SALAD = { price: 20, calories: 5 };
  static STUFFING_POTATO = { price: 15, calories: 10 };
  static TOPPING_SPICE = { price: 15, calories: 0 };
  static TOPPING_MAYO = { price: 20, calories: 5 };

  addTopping(topping) {
    this.toppings.push(topping);
  }

  calculatePrice() {
    const sizePrice = this.size.price;
    const stuffingPrice = this.stuffing.price;
    const toppingsPrice = this.toppings.reduce((acc, topping) => acc + topping.price, 0);
    return sizePrice + stuffingPrice + toppingsPrice;
  }

  calculateCalories() {
    const sizeCalories = this.size.calories;
    const stuffingCalories = this.stuffing.calories;
    const toppingsCalories = this.toppings.reduce((acc, topping) => acc + topping.calories, 0);
    return sizeCalories + stuffingCalories + toppingsCalories;
  }
}

// Створення гамбургера з великою начинкою картоплею та добавкою майонезу
const hamburger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_POTATO);
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// Виведення вартості та калорійності гамбургера
console.log(`Price: ${hamburger.calculatePrice()} tg`);
console.log(`Calories: ${hamburger.calculateCalories()} cal`);
