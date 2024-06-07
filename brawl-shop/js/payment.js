var items = document.querySelectorAll('.modal-pay__item');

items.forEach(function(item) {
    item.addEventListener('click', function() {
        items.forEach(function(item) {
            item.querySelector('.modal-pay__circle').classList.remove('modal-pay__circle_active');
        });

        item.querySelector('.modal-pay__circle').classList.add('modal-pay__circle_active');
    });
});
