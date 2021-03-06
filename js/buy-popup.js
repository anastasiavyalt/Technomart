let productBuyLinks = document.querySelectorAll(".buy");
let addedToCartPopup = document.querySelector(".added-to-cart-popup");
let addedToCartClose = addedToCartPopup.querySelector(".added-close");
let continueShopping = addedToCartPopup.querySelector(".continue-shopping");

for (let i = 0; i < productBuyLinks.length; i++) {
  productBuyLinks[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    addedToCartPopup.classList.add("modal-show");
  })
}

addedToCartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  addedToCartPopup.classList.remove("modal-show");
});

continueShopping.addEventListener("click", function (evt) {
  evt.preventDefault();
  addedToCartPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (addedToCartPopup.classList.contains("modal-show")) {
      addedToCartPopup.classList.remove("modal-show");
    }
  }
});
