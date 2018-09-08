function initIndex () {
	const map_link = document.querySelector(".map-link");
	const write_us_link = document.querySelector(".contacts__button");
	const modal_map_close = document.querySelector(".modal-map-close");
	const map_popup = document.querySelector(".modal-map");
	const write_us_popup = document.querySelector(".modal-write-us");
	const modal_write_us_close = document.querySelector(".modal-write-us-close");

	map_link.addEventListener("click", function(evt) {
	    evt.preventDefault();
	    map_popup.classList.add("modal-show");
	});

	modal_map_close.addEventListener("click", function(evt) {
	    evt.preventDefault();
	    map_popup.classList.remove("modal-show");
	})

	write_us_link.addEventListener("click", function(evt) {
	    evt.preventDefault();
	    write_us_popup.classList.add("modal-show");
	});

	modal_write_us_close.addEventListener("click", function(evt) {
	    evt.preventDefault();
	    write_us_popup.classList.remove("modal-show");
	 })
}

function initCommon () {
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
}
