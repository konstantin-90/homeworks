// Створити клас SuperMath.
// Додати до екземпляра метод - check(obj), параметр obj якого має властивості X, Y, znak. Метод повинен підтвердити у користувача, чи хоче він зробити дію znak c Х і У. Якщо хоче, зробити математичну дію znak (яка описана в прототипі), інакше - запитати введення нових даних через метод input() класу SuperMath. 
// Приклад об'єкта: `obj = {X:12, Y:3, znak: “/”}`, можливі варіанти znak => `+ - / * %`.
// При введенні znak потрібно перевірити коректність введення на можливі математичні дії.
// p = new SuperMath();
// p.check(obj); // --> no p.input() -> 3 prompt -> рахує

class SuperMath {
  check(obj) {
    const { X, Y, znak } = obj;

    if (this.isValidZnak(znak)) {
      const result = this.calculate(X, Y, znak);
      console.log(`Result: ${result}`);
    } else {
      console.log("Invalid input!");
      this.input();
    }
  }

  isValidZnak(znak) {
    const validZnaks = ["+", "-", "/", "*", "%"];
    return validZnaks.includes(znak);
  }

  calculate(X, Y, znak) {
    switch (znak) {
      case "+":
        return X + Y;
      case "-":
        return X - Y;
      case "/":
        return X / Y;
      case "*":
        return X * Y;
      case "%":
        return X % Y;
    }
  }

  input() {
    const X = prompt("Enter X:");
    const Y = prompt("Enter Y:");
    const znak = prompt("Enter znak (+, -, /, *, %):");
    const obj = { X: Number(X), Y: Number(Y), znak };
    this.check(obj);
  }
}
