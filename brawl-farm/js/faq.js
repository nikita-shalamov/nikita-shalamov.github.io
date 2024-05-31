// Получаем все элементы вопросов
const questions = document.querySelectorAll('.faq__question');

// Добавляем обработчик событий для каждого вопроса
questions.forEach(question => {
    question.addEventListener('click', () => {
        // Получаем следующий элемент, который является ответом
        const answer = question.nextElementSibling;
        // Переключаем класс active для ответа, чтобы показать или скрыть его
        answer.classList.toggle('active');
    });
});