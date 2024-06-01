document.addEventListener("DOMContentLoaded", function() {
    const sortButton = document.querySelector(".header__sort-button");
    const sortList = document.querySelector(".header__sort-list");
    const sortItems = document.querySelectorAll(".header__sort-item");
    const arrowIcon = sortButton.querySelector("img");

    sortButton.addEventListener("click", function() {
        sortList.classList.toggle("active");
        arrowIcon.classList.toggle("rotate-180");
    });

    sortItems.forEach(function(item) {
        item.addEventListener("click", function() {
            const selectedSort = this.textContent;
            sortButton.innerHTML = selectedSort + '<img src="img/icons/arrow-sort.svg" alt="">';

            sortItems.forEach(function(item) {
                item.classList.remove("selected");
            });
            this.classList.add("selected");

            sortList.classList.remove("active");
            arrowIcon.classList.remove("rotate-180");
        });
    });
});