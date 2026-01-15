// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити значення за допомогою call apply bind

// let student1 = {
//   name: "Френк",
//   specialty: "Computer Science",
//   averageGrade: 4.2,
//   missedClasses: 5,
//   getInfo: function () {
//     return `Name: ${this.name}, Specialty: ${this.specialty}, Average Grade: ${this.averageGrade}, Missed Classes: ${this.missedClasses}`;
//   },
// };
// let student2 = {
//   name: "Лена",
//   specialty: "Mathematics",
//   averageGrade: 3.2,

//   missedClasses: 1,
// };
// let student3 = {
//   name: "Ирина",
//   specialty: "Physics",
//   averageGrade: 4.1,

//   missedClasses: 10,
// };
// console.log(student1.getInfo());
// console.log(student1.getInfo.call(student2));
// console.log(student1.getInfo.apply(student3));
// let getStudentInfoBound = student1.getInfo.bind(student2);
// console.log(getStudentInfoBound());

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// мой вариант
// const infoProvider = {
//   showValue() {
//     alert(`Значення: ${this.value}`);
//     console.log("Ви обрали: ", this.value);
//   },
// };

// const subscriptionType = {
//   value: "Річний безлімітний абонемент (Gold)",
// };

// const subscriptionPrice = {
//   value: "15 000 грн",
// };
// document
//   .querySelector("#type")
//   .addEventListener("click", infoProvider.showValue.bind(subscriptionType));

// document
//   .querySelector("#price")
//   .addEventListener("click", infoProvider.showValue.bind(subscriptionPrice));

// то что выдало Гемини
// const service = {
//   type: "Річний абонемент (Gold)",
//   price: "12 000 грн",

//   showType() {
//     alert(`Ви обрали тип: ${this.type}`);
//   },
//   showPrice() {
//     alert(`Вартість складає: ${this.price}`);
//   },
// };
// const typeBtn = document.getElementById("type");
// const priceBtn = document.getElementById("price");

// typeBtn.addEventListener("click", service.showType.bind(service));
// priceBtn.addEventListener("click", service.showPrice.bind(service));

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4

// function calculateCost(productName, pricePerKg, quantityKg) {
//   const totalCost = pricePerKg * quantityKg;
//   return `Товар: ${productName}, Вартість: ${totalCost.toFixed(2)} грн`;
// }
// console.log(calculateCost("banana", 30, 4.5));
// console.log(calculateCost("cherry", 58, 1.3));
// console.log(calculateCost("jrange", 89, 3.4));
