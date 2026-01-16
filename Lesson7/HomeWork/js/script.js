// Створіть функцію-конструктор Calculator, який створює об’єкти з трьома
// методами:
// read() запитує два значення за допомогою prompt і запам’ятовує їх у
// властивостях об’єкта.
// sum() повертає суму цих властивостей.
//     mul() повертає результат множення даних властивостей.

// --- 1 вариант ---

// function Calculator() {
//   this.read = function () {
//     this.a = +prompt("Enter first number:", 0);
//     this.b = +prompt("Enter second number:", 0);
//   };
//   this.sum = function () {
//     return this.a + this.b;
//   };
//   this.mul = function () {
//     return this.a * this.b;
//   };
// }
// let calculator = new Calculator();
// calculator.read();
// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());

// --- 2 вариант ---

// function Calculator() {
//   // Метод для чтения данных
//   this.read = function () {
//     // Используем +prompt, чтобы сразу преобразовать строку в число
//     this.a = +prompt("Введіть перше число:", 0);
//     this.b = +prompt("Введіть друге число:", 0);
//   };

//   // Метод для сложения
//   this.sum = function () {
//     return this.a + this.b;
//   };

//   // Метод для умножения
//   this.mul = function () {
//     return this.a * this.b;
//   };
// }

// // Использование:
// const calculator = new Calculator();

// calculator.read(); // Откроются два окна ввода

// alert("Сума: " + calculator.sum());
// alert("Добуток: " + calculator.mul());
