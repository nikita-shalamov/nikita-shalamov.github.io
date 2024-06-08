const modal = document.getElementById("modal");
const buyButton = document.querySelector("#buy-button");
const activeOrder = document.querySelector('.orders__item_active')

if (buyButton) {
    buyButton.onclick = function() {
        modal.style.display = "block";
      }
}

if (activeOrder) {
    activeOrder.addEventListener('click' , () => {
        modal.style.display = "block";
    })
}


modal.addEventListener('click', (e) => {
    if (e.target.classList.contains("modal")) {
        modal.style.display = "none";
    }
})
