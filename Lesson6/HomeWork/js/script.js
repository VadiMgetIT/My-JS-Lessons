// Створити телефонну книгу
// -створити початковий клас Abonent, де зберігатимуться ім * я і номер
// -створити set який прийматиме телефон і номер
// -створити get який виводитиме данні про абонента
// -створити три різних юзери
// -вивести данні

// --- Вариант 1 ---

// class Abonent {
//   constructor(name, phoneNumber) {
//     this.name = name;
//     this.phoneNumber = phoneNumber;
//   }
//   set setPhoneNumber(newPhoneNumber) {
//     this.phoneNumber = newPhoneNumber;
//   }
//   get getAbonentInfo() {
//     return `Name: ${this.name}, Phone Number: ${this.phoneNumber}`;
//   }
// }

// const user1 = new Abonent("Alice", "123-456-7890");
// const user2 = new Abonent("Bob", "987-654-3210");
// const user3 = new Abonent("Charlie", "555-555-5555");
// console.log(user1.getAbonentInfo);
// console.log(user2.getAbonentInfo);
// console.log(user3.getAbonentInfo);
// user1.setPhoneNumber = "111-222-3333";
// console.log(user1.getAbonentInfo);

// --- Вариант 2 ---

// class Abonent {
//   constructor(name, phone) {
//     this.name = name;
//     this.phone = phone;
//   }
//   set setPhone(newPhone) {
//     this.phone = newPhone;
//   }
//   get getInfo() {
//     return `Name: ${this.name}, Phone: ${this.phone}`;
//   }
// }

// const user1 = new Abonent("Вадим", "067-111-22-33");
// const user2 = new Abonent("Олена", "050-444-55-66");
// const user3 = new Abonent("Іван", "093-777-88-99");
// console.log(user1.getInfo);
// console.log(user2.getInfo);
// console.log(user3.getInfo);
// user1.setPhone = "099-000-00-00";
// console.log(user1.getInfo);
