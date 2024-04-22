document.addEventListener("DOMContentLoaded", function() {
    const walletAddress = document.querySelectorAll('.user-wallet__address');

    walletAddress.forEach(function(element) {
        const address = element.textContent;
        const newAddress = `${address.substring(0, 4)}...${address.substring(address.length - 4)}`;
        element.textContent = newAddress;
    });
});

function adjustTextWidth() {
    const screenWidth = window.innerWidth;
    const textElements = document.querySelectorAll('.partners-catalog__descr');

    textElements.forEach((element) => {
        const width = screenWidth - 34 - 46 - 15 - 105;
        element.style.width = `${width}px`;
    });
}

// Вызовите функцию при загрузке страницы и при изменении размера окна
window.addEventListener('load', adjustTextWidth);
window.addEventListener('resize', adjustTextWidth);
