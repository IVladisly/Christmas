const TITLE = document.querySelector(".Title"); 
const DecCont = document.querySelector(".Container_Decoration"); 
const DecList = document.querySelector(".Decorations_List"); 

window.addEventListener("scroll", function () {
	let scroll = window.scrollY;
	console.log(scroll);

	if (scroll > 230) {
		TITLE.classList.add("active");
	}else {
		TITLE.classList.remove("active");
	}

});

/* /==========Timer==========/ */

document.addEventListener('DOMContentLoaded', () => {
	const newYear = new Date('Jan 1 2023 00:00:00');
	console.log(newYear);

	const Days_Val = document.querySelector('#Days');
	const Hours_Val = document.querySelector('#Hours');
	const Minutes_Val = document.querySelector('#Minutes');
	const Seconds_Val = document.querySelector('#Seconds');

	const timeCounts = () => {
		let now = new Date();
		let leftUntil = newYear - now;

		let Days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
		let Hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
		let Minutes = Math.floor(leftUntil / 1000 / 60) % 60;
		let Seconds = Math.floor(leftUntil / 1000) % 60;
		
		Days_Val.textContent = Days;
		Hours_Val.textContent = Hours;
		Minutes_Val.textContent = Minutes;
		Seconds_Val.textContent = Seconds;
	};

	timeCounts();
	setInterval(timeCounts, 1000);

});




// /===============Slider===============/
new Swiper('.Swiper_Container', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	spaceBetween: 150,
	centeredSlides: true,



	pagination: {
		el: '.swiper-pagination',
		clickable: true,

		dynamicBullets: true,
	},

	autoplay: {
		delay: 3000,
		disableOnInteraction: true,

	},

	speed: 900,


});