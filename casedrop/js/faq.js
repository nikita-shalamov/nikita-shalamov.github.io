const faqItems = document.querySelectorAll('.faq__item');
const faqList = document.querySelector('.faq__items');
const pseudoElements = document.querySelectorAll('.faq__item-pseudo');

faqList.addEventListener('click', (e) => {
    if (e.target.classList.contains('faq__item-pseudo')) {
        pseudoElements.forEach((item, i) => {
            if (item === e.target) {
                faqItems[i].querySelector('.faq__item-descr').classList.toggle('faq__item-descr-hidden');
                const itemIcon = faqItems[i].querySelector('.faq__item-icon');
                console.log(i);
                // Переключаем классы иконки текущего элемента
                itemIcon.classList.toggle('faq__item-icon-minus');
                itemIcon.classList.toggle('faq__item-icon-plus');

                // Если у иконки есть класс faq__item-icon-minus, значит описание открыто
                if (itemIcon.classList.contains('faq__item-icon-minus')) {
                    itemIcon.innerHTML = '';
                    const newSpan = document.createElement('span');
                    newSpan.classList.add('faq-span');
                    itemIcon.appendChild(newSpan);
                }
                else {
                    itemIcon.innerHTML = '';
                    for (j = 0; j < 2; j++) {
                        const newSpan = document.createElement('span');
                        newSpan.classList.add('faq-span');
                        itemIcon.appendChild(newSpan);
                    }
                }
            }

            // // Находим все <span> внутри элемента иконки
            // const spans = itemIcon.querySelectorAll('.faq-span');
            // // Если описание открыто, добавляем <span>, иначе удаляем
            // if (isOpen) {
            //     const newSpan = document.createElement('span');
            //     newSpan.classList.add('faq-span');
            //     itemIcon.appendChild(newSpan);
            // } else {
            //     const spansArray = Array.from(spans); // Преобразуем NodeList в массив
            //     const lastSpan = spansArray.pop(); // Удаляем последний span
            //     lastSpan.remove();
            // }
        });
    }
});