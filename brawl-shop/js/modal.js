// Получаем элементы кнопки открытия и закрытия модального окна
var openModalBtn = document.getElementById("open-modal");
var closeModalBtn = document.getElementById("close-modal");
var modal = document.getElementById("modal");

// Обработчик события для открытия модального окна
openModalBtn.onclick = function() {
  modal.style.display = "block";
}

// Обработчик события для закрытия модального окна
closeModalBtn.onclick = function() {
  modal.style.display = "none";
}

// Закрыть модальное окно при клике вне него
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
