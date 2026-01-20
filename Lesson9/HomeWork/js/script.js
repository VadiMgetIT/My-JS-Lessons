// Домашнє завдання 9

// -----1----
// Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
// <div id="text"> зникав.
// ---Решение---
// const button = document.querySelector("#hider");
// const textBlock = document.querySelector("#text");

// button.addEventListener("click", function () {
//   textBlock.hidden = true;

//   console.log("Текст зникнув!");
// });

// -----2----
// Напишіть такий код, щоб після натискання на кнопку, вона зникала.

// ---Решение---

// const btn = document.querySelector("#self-hider");

// btn.addEventListener("click", function () {
//   this.hidden = true;
//   console.log("Кнопка сама себе сховала!");
// });

// -----3----
// Створіть дерево, яке показує/приховує дочірні вузли при кліці

// ---Решение---
// const tree = document.querySelector("#tree");

// tree.addEventListener("click", function (event) {
//   if (event.target.tagName !== "SPAN") return;

//   let childrenContainer = event.target.parentNode.querySelector("ul");

//   if (!childrenContainer) return;

//   childrenContainer.hidden = !childrenContainer.hidden;

//   console.log(`Гілка "${event.target.textContent}" змінила стан.`);
// });
