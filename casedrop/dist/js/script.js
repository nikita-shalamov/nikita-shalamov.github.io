// const bagItems = {
//     // cookies {prod.ID: counter}
//     cookies: {
//         1: 0,
//         2: 0,
//         3: 0,
//         4: 0,
//         5: 0
//     }
// }

const filterSex = document.querySelector('#sex');
const filterSexWomen = document.querySelector('#filter-women');
const filterSexMen = document.querySelector('#filter-men');
const sortingList = document.querySelector('.catalog__sorting-list');
const allItems = document.querySelectorAll('.catalog__item');

let sortingType = 'popular';

let filterSexSelected = {
    women: -1,
    men: -1
}

filterSex.addEventListener('click', (e) => {
    const selector = e.target.closest('.catalog__filter-selector');
    
    if (selector) {
        if (selector.id == 'filter-men') {
            filterSexSelected.men = filterSexSelected.men * -1;
            filterSexMen.firstElementChild.classList.toggle('checkbox-active');
        }
        if (selector.id == 'filter-women') {
            filterSexSelected.women = filterSexSelected.women * -1;
            filterSexWomen.firstElementChild.classList.toggle('checkbox-active');
        }
    }
    filterItemsSex();
});

sortingList.addEventListener('change', (e) => {
    sortingType = sortingList.value;
    sortItems(sortingType);
});

// Функция для сортировки элементов по цене
function sortItems(sortingType) {
    let itemsContainer = document.querySelectorAll('.catalog__item');
    let itemsArray = Array.from(itemsContainer);

    if (sortingType == 'popular') {
        itemsArray.sort(function (a, b) {
            let popularA = parseInt(a.getAttribute('data-popular') || 0);
            let popularB = parseInt(b.getAttribute('data-popular') || 0);
            
            return popularA - popularB;
        });
    }
    else {
        itemsArray.sort(function (a, b) {
            let priceA = parseInt(a.querySelector('.catalog__item-price').getAttribute('data-price') || 0);
            let priceB = parseInt(b.querySelector('.catalog__item-price').getAttribute('data-price') || 0);
    
            if (sortingType === 'priceAsc') {
                return priceA - priceB;
            } else if (sortingType === 'priceDesc') {
                return priceB - priceA;
            }
        });
    }

    let catalogContainer = document.querySelector('.catalog__items');
    catalogContainer.innerHTML = '';

    itemsArray.forEach(function (item) {
        catalogContainer.appendChild(item);
    });
    console.log(itemsArray);
}

function filterItemsSex() {
    let itemsContainer = allItems;
    let itemsArray = Array.from(itemsContainer);

    let catalog = document.querySelector('.catalog__items');
    catalog.innerHTML = '';
    if (filterSexSelected.men == -1 && filterSexSelected.women == -1) {
        itemsArray.forEach(item => {
            catalog.appendChild(item);
        });
    }
    else {
        itemsArray.forEach(item => {
            const itemSex = item.querySelector('.catalog__item-sex').getAttribute('data-sex');
            if (itemSex == 'men' && filterSexSelected.men == 1) {
                catalog.appendChild(item);
            }
            if (itemSex == 'women' && filterSexSelected.women == 1) {
                catalog.appendChild(item);
            }
        });
    }
    sortItems(sortingType);
}

const itemPhotos = document.querySelectorAll('.catalog__item-info');
const items = document.querySelector('.catalog__items');

itemPhotos.forEach(item => {
    item.addEventListener('mouseenter', (e) => {
        e.target.classList.toggle('hidden');
        e.target.parentNode.querySelector('.catalog__item-settings').classList.toggle('item-settings-active');
    });

    item.addEventListener('mouseleave', (e) => {
        e.target.classList.toggle('hidden');
        e.target.parentNode.querySelector('.catalog__item-settings').classList.toggle('item-settings-active');
    });
});

// Функция для генерации уникального идентификатора
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// Функция для проверки, существуют ли у пользователя куки
function checkCookies() {
    const cookiesString = document.cookie;
    if (cookiesString) {
        console.log('Cookies пользователя:', cookiesString);
    } else {
        // Если у пользователя нет кук, устанавливаем их
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 30); // Куки будут действительны 30 дней

        const userId = uuidv4(); // Генерируем уникальный идентификатор для пользователя

        document.cookie = "userId=" + userId + "; expires=" + expirationDate.toUTCString() + "; path=/"; // Устанавливаем куки
        console.log('Куки были установлены');
    }
}

// Проверяем куки при загрузке страницы
checkCookies();

