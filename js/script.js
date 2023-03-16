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
});
