const itemsRarityBtn = document.querySelector('.invent-items__rarity-button');
const itemsRarityList = document.querySelector('.invent-items__rarity-list');
const arrowRarityIcon = document.querySelector('.invent-items__rarity-icon');

itemsRarityBtn.addEventListener('click', () => {
    itemsRarityList.classList.toggle('hidden');
    arrowRarityIcon.classList.toggle('arrow-rotate_activate');
});

const itemsPriceBtn = document.querySelector('.invent-items__price-selector');
const itemsPriceList = document.querySelector('.invent-items__price-selector-list');
const arrowPriceIcon = document.querySelector('.invent-items__price-selector-icon');

itemsPriceBtn.addEventListener('click', () => {
    itemsPriceList.classList.toggle('hidden');
    arrowPriceIcon.classList.toggle('arrow-rotate_activate');
});