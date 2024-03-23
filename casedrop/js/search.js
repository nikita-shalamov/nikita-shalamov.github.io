const searchBlock = document.querySelector('.search');
const headerScrollButtonCube = document.querySelector('#search-filter-cube-button');
const headerScrollButtonKnife = document.querySelector('#search-filter-knife-button');

headerScrollButtonCube.addEventListener('click', () => {
    headerScrollButtonCube.querySelector('svg').querySelector('path').setAttribute('fill', 'white');
    headerScrollButtonCube.classList.add('search__input-filter-blue');

    headerScrollButtonKnife.classList.remove('search__input-filter-blue');
    headerScrollButtonKnife.querySelector('svg').querySelector('path').setAttribute('fill', '#7C839D')
});

headerScrollButtonKnife.addEventListener('click', () => {
    headerScrollButtonKnife.querySelector('svg').querySelector('path').setAttribute('fill', 'white');
    headerScrollButtonKnife.classList.add('search__input-filter-blue');

    headerScrollButtonCube.classList.remove('search__input-filter-blue');
    headerScrollButtonCube.querySelector('svg').querySelector('path').setAttribute('fill', '#7C839D');
});

const searchPriceFilters = document.querySelectorAll('.search__price-filter');
let currentSearchFilterButton = 0;

searchBlock.addEventListener('click', (e) => {
    if (e.target.classList.contains('search__price-filter')) {
        searchPriceFilters[currentSearchFilterButton].classList.remove('search__price-filter-blue');
        searchPriceFilters.forEach((item, i) => {
            if (item === e.target) {
                currentSearchFilterButton = i; // отслеживаем активный элемент

                // делаем нажатый элемент активным
                searchPriceFilters[i].classList.add('search__price-filter-blue');
            }
        });
    }
});

const searchBalaceFilterCheckbox = document.querySelector('.search__balance-checkbox');
const searchBalaceFilterOk = document.querySelector('.search__balance-checkbox-ok');
const searchBalanceFilterClick = document.querySelector('.search__balance-filter-click');

searchBalanceFilterClick.addEventListener('click', () => {
    searchBalaceFilterOk.classList.toggle('hidden');
    searchBalaceFilterCheckbox.classList.toggle('search__balance-checkbox-active');
});

const searchLikedFilter = document.querySelector('.search__liked');
const searchLikedFilterIcon = searchLikedFilter.querySelector('svg');

searchLikedFilter.addEventListener('click', () => {
    searchLikedFilterIcon.querySelector('path').setAttribute('fill', 'white');
    searchLikedFilter.classList.toggle('search__liked-active');
});

