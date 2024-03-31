const casesTitles = document.querySelectorAll('.title-wrapper-click');

casesTitles.forEach((e, i) => {
    e.addEventListener('click', (e) => {
        const cases = e.target.parentElement.parentElement.querySelector('.case-items');
        const casesArrow = e.target.parentElement.querySelector('img');
        if (cases.classList.contains('hidden')) {
            cases.classList.remove('hidden');
            casesArrow.style.transform = 'rotate(0deg)';
        }
        else {
            cases.classList.add('hidden');
            casesArrow.style.transform = 'rotate(180deg)';
        }
    })
});
