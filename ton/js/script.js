document.addEventListener("DOMContentLoaded", function() {
    const walletAddress = document.querySelectorAll('.user-wallet__address');

    walletAddress.forEach(function(element) {
        const address = element.textContent;
        const newAddress = `${address.substring(0, 4)}...${address.substring(address.length - 4)}`;
        element.textContent = newAddress;
    });
});
