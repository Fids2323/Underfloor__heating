//Slider
new Swiper(".hero__slider", {
	slidesPerView: 2,
	loop: true,
	spaceBetween: 10,

	navigation: {
		prevEl: ".hero__slider-btn-prev",
		nextEl: ".hero__slider-btn-next",
	},
	autoplay: {
		delay: 3000,
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		560: {
			spaceBetween: 8,
		},
	},
});

//Calculate
const calcForm = document.querySelector(".js-calc-form");
const totalSquare = document.querySelector(".js-square");
const totalPrice = document.querySelector(".js-total-price");
const calcResultWrapper = document.querySelector(".calc__result-wrapper");

const tariff = {
	economy: 550,
	comfort: 1400,
	premium: 2700,
};

calcForm.addEventListener("submit", (e) => {
	e.preventDefault();

	if (calcForm.width.value > 0 && calcForm.length.value > 0) {
		const square = calcForm.width.value * calcForm.length.value;
		const price = square * tariff[calcForm.tariff.value];

		calcResultWrapper.style.display = "block";

		totalSquare.textContent = `${square} кв м`;
		totalPrice.textContent = `${price} руб`;
	}
});
