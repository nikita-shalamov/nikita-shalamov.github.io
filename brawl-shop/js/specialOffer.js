const elements = document.querySelectorAll('.card-special-offer');

function adjustElementsSize() {
    const screenWidth = window.innerWidth;
    const elementWidth = screenWidth - 32;

    elements.forEach(element => {
        element.style.minWidth = `${elementWidth}px`;
    });
}

adjustElementsSize();
window.addEventListener('resize', adjustElementsSize);