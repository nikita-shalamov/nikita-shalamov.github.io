document.addEventListener("DOMContentLoaded", function() {
    const sortButton = document.querySelector(".header__sort-button");
    const sortList = document.querySelector(".header__sort-list");
    const sortItems = document.querySelectorAll(".header__sort-item");

    sortButton.addEventListener("click", function() {
        sortList.classList.toggle("active");
    });

    sortItems.forEach(function(item) {
        item.addEventListener("click", function() {
            const selectedSort = this.textContent;
            sortButton.innerHTML = selectedSort + '<img src="img/icons/arrow-sort.svg" alt="">';

            // Убираем подсветку у всех элементов и подсвечиваем выбранный
            sortItems.forEach(function(item) {
                item.classList.remove("selected");
            });
            this.classList.add("selected");

            sortList.classList.remove("active");
        });
    });
});
