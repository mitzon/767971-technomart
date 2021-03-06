function initIndex () {
	const mapLink = document.querySelector(".map-link");
	const writeUsLink = document.querySelector(".contacts__button");
	const modalMapClose = document.querySelector(".modal-map-close");
	const mapPopup = document.querySelector(".modal-map");
	const writeUsPopup = document.querySelector(".modal-write-us");
	const modalWriteUsClose = document.querySelector(".modal-write-us-close");
	const serviceButtonDelivery = document.querySelector(".service-list-item:nth-child(1)");
	const serviceButtonGuarantee = document.querySelector(".service-list-item:nth-child(2)");
	const serviceButtonCredit = document.querySelector(".service-list-item:nth-child(3)");
	const serviceDescriptionDelivery = document.querySelector(".delivery-service");
	const serviceDescriptionGuarantee = document.querySelector(".guarantee-service");
	const serviceDescriptionCredit = document.querySelector(".credit-service");
	const slideOne = document.querySelector(".first-slide");
	const slideTwo = document.querySelector(".second-slide");
	const previousSlide = document.querySelector(".left-btn");
	const nextSlide = document.querySelector(".right-btn");
	const paginationItemOne = document.querySelector(".slide-pagination__item:nth-child(1)");
	const paginationItemTwo = document.querySelector(".slide-pagination__item:nth-child(2)");

	mapLink.addEventListener("click", function(evt) {
	    evt.preventDefault();
	    mapPopup.classList.add("modal-show");
	});

	modalMapClose.addEventListener("click", function(evt) {
	    evt.preventDefault();
	    mapPopup.classList.remove("modal-show");
	})

	writeUsLink.addEventListener("click", function(evt) {
	    evt.preventDefault();
	    writeUsPopup.classList.add("modal-show");
	});

	modalWriteUsClose.addEventListener("click", function(evt) {
	    evt.preventDefault();
	    writeUsPopup.classList.remove("modal-show");
	 })

	serviceButtonDelivery.addEventListener("click", function(evt) {
		evt.preventDefault();
		if (serviceButtonDelivery.classList.contains("active")) {}
			else {
				serviceButtonDelivery.classList.add("active");
				serviceButtonGuarantee.classList.remove("active");
				serviceButtonCredit.classList.remove("active");
				serviceDescriptionGuarantee.classList.add("hidden");
				serviceDescriptionDelivery.classList.remove("hidden");
				serviceDescriptionCredit.classList.add("hidden");
			}
	});

	serviceButtonGuarantee.addEventListener("click", function(evt) {
		evt.preventDefault();
		if (serviceButtonGuarantee.classList.contains("active")) {}
			else {
				serviceButtonGuarantee.classList.add("active");
				serviceButtonDelivery.classList.remove("active");
				serviceButtonCredit.classList.remove("active");
				serviceDescriptionGuarantee.classList.remove("hidden");
				serviceDescriptionDelivery.classList.add("hidden");
				serviceDescriptionCredit.classList.add("hidden");
			}
	});

	serviceButtonCredit.addEventListener("click", function(evt) {
		evt.preventDefault();
		if (serviceButtonCredit.classList.contains("active")) {}
			else {
				serviceButtonCredit.classList.add("active");
				serviceButtonDelivery.classList.remove("active");
				serviceButtonGuarantee.classList.remove("active");
				serviceDescriptionGuarantee.classList.add("hidden");
				serviceDescriptionDelivery.classList.add("hidden");
				serviceDescriptionCredit.classList.remove("hidden");
			}
	});

	previousSlide.addEventListener("click", function(evt) {
		evt.preventDefault();
		if (slideTwo.classList.contains("hidden")) {
			slideTwo.classList.remove("hidden");
			slideOne.classList.add("hidden");
			paginationItemOne.classList.remove("slide-pagination__item--active");
			paginationItemTwo.classList.add("slide-pagination__item--active");
		}

			else {
				slideTwo.classList.add("hidden");
				slideOne.classList.remove("hidden");
				paginationItemOne.classList.add("slide-pagination__item--active");
				paginationItemTwo.classList.remove("slide-pagination__item--active");
			}
	});

	nextSlide.addEventListener("click", function(evt) {
		evt.preventDefault();
		if (slideTwo.classList.contains("hidden")) {
			slideTwo.classList.remove("hidden");
			slideOne.classList.add("hidden");
			paginationItemOne.classList.remove("slide-pagination__item--active");
			paginationItemTwo.classList.add("slide-pagination__item--active");
		}

			else {
				slideTwo.classList.add("hidden");
				slideOne.classList.remove("hidden");
				paginationItemOne.classList.add("slide-pagination__item--active");
				paginationItemTwo.classList.remove("slide-pagination__item--active");
			}
	});
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
		buyButton.addEventListener('click', function(evt) {
			evt.preventDefault();
			openCart();
			addProduct();
		});
	});

	cartPopupClose.addEventListener('click', closeCart);

	bookmarkButtons.forEach(function(bookmarkButton) {
		bookmarkButton.addEventListener('click', function(evt) {
			evt.preventDefault();
			addBookmark()
		});
	});

	cartPopupContinue.addEventListener('click', closeCart);
}
