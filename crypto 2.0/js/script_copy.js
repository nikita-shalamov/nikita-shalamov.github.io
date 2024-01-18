window.addEventListener('DOMContentLoaded', () => {
    const header_block_menu = document.querySelector('.header_block_menu'),
    header_block_menu_item = document.querySelectorAll('.header_block_menu_item'),
    menu_btn = document.querySelector('.menu_btn'),
    second_btn = document.querySelector('.second_btn');

    menu_btn.addEventListener('click', () => {
        menu_btn.classList.toggle('menu_btn_active');
        header_block_menu.classList.toggle('header_block_menu_active');
        second_btn.classList.toggle('second_btn_active');
    });

    header_block_menu_item.forEach(item => {
        item.addEventListener('click', () => {
            menu_btn.classList.toggle('menu_btn_active');
            header_block_menu.classList.toggle('header_block_menu_active');
            second_btn.classList.toggle('second_btn_active');
        })
    })

    second_btn.addEventListener('click', () => {
        menu_btn.classList.toggle('menu_btn_active');
        header_block_menu.classList.toggle('header_block_menu_active');
        second_btn.classList.toggle('second_btn_active');
    });

})