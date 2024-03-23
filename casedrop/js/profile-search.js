const profileSearchFilters = document.querySelector('.profile-search__filters');
const profileSearchAllFilters = document.querySelectorAll('.profile-search__checkbox');
const profileSearchFilterCheckbox = document.querySelectorAll('.profile-search__checkbox-selector');
const profileSearchFilterClickElements = document.querySelectorAll('.profile-search__checkbox-selector-click-elem');


profileSearchFilters.addEventListener('click', (e) => {
    if (e.target.classList.contains('profile-search__checkbox-selector-click-elem')) {
        profileSearchFilterClickElements.forEach((item, i) => {
            if (item === e.target) {
                profileSearchFilterCheckbox[i].classList.toggle('profile-search__checkbox-selector-active');
            }
        });
    }
});