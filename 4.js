// Декоратор (Decorator) — це патерн програмування, який додає нову функціональність до існуючих об'єктів, не змінюючи їхньої структури.
// Іншими словами, він дозволяє розширити функціональність об'єкта, не змінюючи сам об'єкт.

// Клас Drink представляє основний напій, який можна приготувати.
// Цей клас містить базову вартість напою (price=10) та його ім'я (name="Чай").
class Drink {
  name = 'Чай';
  price = 10;
  prepare() {
    console.log(`Приготування ${this.name}`);
  }
  // Метод prepare() виводить в консоль рядок "Приготування {назва напою}"
}

// Клас HoneyDecorator є декоратором, який додає мед до напою.
class HoneyDecorator {
  constructor(drink, amount) {
    this.drink = drink;
    this.amount = amount;
  }
  get name() {
    return `${this.drink.name} з ${this.amount} г меду`
  }
  get price() {
    const honeyCost = 0.5;
    return this.drink.price + honeyCost * this.amount;
  }
  prepare() {
    console.log(`Приготування ${this.name} з медом`);
  }
  // Конструктор приймає в якості параметрів базовий напій (drink) та кількість меду (amount), яку треба додати.
  // Getter для name повертає рядок `${this.drink.name} з ${this.amount} г меду`.
  // Getter для price розраховує загальну вартість напою, враховуючи базову вартість напою
  // і додаткову вартість меду, яку за замовчуванням встановлюємо на 0.5, і множимо на this.amount.
  // Метод prepare відповідає за приготування напою з медом.
  // Він виводить в консоль Приготування ${this.name} з медом
}
console.log("Завдання 4 ====================================");
// Після виконання розкоментуйте код нижче

// Створення об'єкту базового напою (чаю)
let tea = new Drink();
console.log(tea.name); // Виводить ім'я напою
console.log(tea.price); // Виводить вартість напою
tea.prepare(); // Готує напій

// Додавання декоратора меду до чаю
let honeyTea = new HoneyDecorator(tea, 2); // Додаємо 2 грами меду
console.log(honeyTea.name); // Виводить нову назву напою
console.log(honeyTea.price); // Виводить нову вартість напою
honeyTea.prepare(); // Готує напій з медом
