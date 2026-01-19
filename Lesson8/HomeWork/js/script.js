//  Домашнее задание 8

//  Напишіть код, щоб вибрати елемент з атрибутом data-widget-name з документа
// та прочитати його значення.
// <!DOCTYPE html>
// <html>
// <body>
// <div data-widget-name="menu">Виберіть жанр</div>
// <script>/* ваш код */</script>
// </body>
// </html>

const widget = document.querySelector("[data-widget-name]");
const widgetName = widget.dataset.widgetName;
console.log(widgetName);

//добавил от себя  "Слушаем событие 'click' на нашем элементе"
widget.addEventListener("click", function () {
  this.style.color = "red";
  console.log("Ви обрали жанр!");
});
