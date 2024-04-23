document.addEventListener("DOMContentLoaded", function() {
    const walletAddress = document.querySelectorAll('.user-wallet__address');

    walletAddress.forEach(function(element) {
        const address = element.textContent;
        const newAddress = `${address.substring(0, 4)}...${address.substring(address.length - 4)}`;
        element.textContent = newAddress;
    });

    const div = document.querySelector('.sub-options__value');
    const text = div.textContent;

    if (text.length > 10) {
      const truncatedText = text.slice(0, 5) + '...' + text.slice(-5);
      div.textContent = truncatedText;
    }
});

function adjustTextWidth() {
    const screenWidth = window.innerWidth;
    const textElements = document.querySelectorAll('.partners-catalog__descr');

    textElements.forEach((element) => {
        const width = screenWidth - 34 - 46 - 15 - 105;
        element.style.width = `${width}px`;
    });
}
