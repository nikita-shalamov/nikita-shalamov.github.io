
const balanceTypesPayment = document.querySelector('.balance__pay-items');
const balanceItems = document.querySelectorAll('.balance__pay-item');
const balanceItemsClick = document.querySelectorAll('.balance__pay-item-click');
let currentActive = 0;

balanceTypesPayment.addEventListener('click', (e) => {
    if (e.target.classList.contains('balance__pay-item-click')) {
        // убираем активность на текущем элементе
        balanceItems[currentActive].querySelector('.balance__pay-item-selector').remove();
        balanceItems[currentActive].classList.remove('balance__pay-item-active');
        balanceItemsClick.forEach((item, i) => {
            if (item === e.target) {
                currentActive = i; // отслеживаем активный элемент

                // делаем нажатый элемент активным
                const newSelectorElement = document.createElement('div');
                newSelectorElement.className = 'balance__pay-item-selector';
                newSelectorElement.innerHTML = '<img src="img/balance/icons/ok.svg" alt="">';
                balanceItems[i].appendChild(newSelectorElement);
                balanceItems[i].classList.add('balance__pay-item-active');
            }
        });
    }
});

const balanceCheckboxClickElem = document.querySelector('.profile-search__checkbox-selector-click-elem');
const balanceCheckbox = document.querySelector('.profile-search__checkbox-selector');

balanceCheckboxClickElem.addEventListener('click', (e) => {
    balanceCheckbox.classList.toggle('profile-search__checkbox-selector-active');
});