const questions = document.querySelectorAll('.faq__question');

questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.classList.toggle('active');
    });
});