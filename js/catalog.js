const buyButtons = document.querySelectorAll(".action-buy");
const cartPopup = document.querySelector(".cart-add");
const cartPopupClose = document.querySelector(".modal-cart-close");
const cartPopupContinue = document.querySelector(".modal-continue");
const shoppingCartAdd = document.querySelector(".shopping-cart");
const bookmarkButtons = document.querySelectorAll(".action-bookmark");
const bookmarkAdd = document.querySelector(".bookmarks");

function openCart() {
 	cartPopup.classList.add('modal-show');
}

function closeCart() {
	cartPopup.classList.remove('modal-show');
}

function addProduct() {
	shoppingCartAdd.classList.add('header-link--active');
}

function addBookmark() {
	bookmarkAdd.classList.add('header-link--active');
}

buyButtons.forEach(function(buyButton) {
	buyButton.addEventListener('click', function() {
		openCart();
		addProduct();
	});
});

cartPopupClose.addEventListener('click', closeCart);

bookmarkButtons.forEach(function(bookmarkButton) {
	bookmarkButton.addEventListener('click', function() {
		addBookmark()
	});
});

cartPopupContinue.addEventListener('click', closeCart);