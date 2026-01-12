// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.
// let variable1 = 1;
// if (variable1 > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// let variable1 = 0;
// if (variable1 > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// let variable1 = -3;
// if (variable1 > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

// let variable2 = "test";
// if (variable2 === "test") {
//   console.log(true);
// } else {
//   console.log(false);
// }

// let variable2 = "qwerty";
// if (variable2 === "test") {
//   console.log(true);
// } else {
//   console.log(false);
// }

// let variable2 = true;
// if (variable2 === "test") {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// let variable3 = 1;
// if (variable3 > 10) {
//   variable3 -= 5;
//   console.log(variable3);
// } else {
//   variable3 += 5;
//   console.log(variable3);
// }

// let variable3 = 10;
// if (variable3 > 10) {
//   variable3 -= 5;
//   console.log(variable3);
// } else {
//   variable3 += 5;
//   console.log(variable3);
//}

// let variable3 = 13;
// if (variable3 > 10) {
//   variable3 -= 5;
//   console.log(variable3);
// } else {
//   variable3 += 5;
//   console.log(variable3);
// }

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// let monthNumber = 10;
// switch (monthNumber) {
//   case 1:
//     console.log("January");
//     break;

//   case 2:
//     console.log("February");
//     break;

//   case 3:
//     console.log("March");
//     break;

//   case 4:
//     console.log("April");
//     break;

//   case 5:
//     console.log("May");
//     break;

//   case 6:
//     console.log("June");
//     break;

//   case 7:
//     console.log("July");
//     break;

//   case 8:
//     console.log("August");
//     break;

//   case 9:
//     console.log("September");
//     break;

//   case 10:
//     console.log("October");
//     break;

//   case 11:
//     console.log("November");
//     break;

//   case 12:
//     console.log("December");
//     break;
//   default:
//     console.log("Invalid month number");
//     break;
// }

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// let threeDigitNumber = 222;
// let hundreds = Math.floor(threeDigitNumber / 100);
// let tens = Math.floor((threeDigitNumber % 100) / 10);
// let units = threeDigitNumber % 10;
// let sum = hundreds + tens + units;
// console.log(sum);
