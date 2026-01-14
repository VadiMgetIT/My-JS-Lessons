// Домашнє завдання
// ---1---
// Перепишіть функцію, використовуючи '?' або '||'

// function checkAge(age) {
//   if (age > 18) {
//     return console.log(true);
//   } else {
//     return confirm("Батьки дозволили?");
//   }
// }
// checkAge(19);

// ---Варіант з '?'

// function checkAge(age) {
//   return age > 18 ? true : confirm("Батьки дозволили?");
// }
// console.log(checkAge(17));

// ---Варіант з '||'
// function checkAge(age) {
//   return age > 18 || confirm("Батьки дозволили?");
// }
// console.log(checkAge(20));

// ---2---
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// console.log(min(3, 5));

// Второй вариант

// function min(a, b) {
//   return a < b ? a : b;
// }
// console.log(min(11, 5));

// ---3---
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// ask(
//   "Ви згодні?",
//   function () {
//     alert("Ви погодились.");
//   },
//   function () {
//     alert("Ви скасували виконання.");
//   }
// );

// ---Варіант зі стрілковими функціями---

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// ask(
//   "Ви згодні?",
//   () => alert("Ви погодились."),
//   () => alert("Ви скасували виконання.")
// );

// Еще вариант - полностью стрелочная функция, более подходящая

// const ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };

// ask(
//   "Ви згодні?",
//   () => alert("Ви погодились."),
//   () => alert("Ви скасували виконання.")
// );
