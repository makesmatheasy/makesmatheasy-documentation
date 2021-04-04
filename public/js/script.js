// Slider
const styleToggler = document.querySelector('.style-toggler');
styleToggler.addEventListener('click', () => {
	document.querySelector('.theme-switcher').classList.toggle('open');
});

// OWL CAROUSEL EFFECT
$(document).ready(function () {
	$('.owl-carousel').owlCarousel({
		loop: true,
		autoplay: true,
		dots: true,
		responsive: {
			0: { items: 1 },
			768: {
				items: 3,
			},
		},
	});
});

// SideBar Toggle
var menuBtn = document.querySelector('.menu-btn');
var sidebar = document.querySelector('#sidebar');
var content = document.querySelector('#content');
var showTabs = false;
menuBtn.addEventListener('click', function () {
	if (!showTabs) {
		menuBtn.classList.toggle('show');
		sidebar.classList.toggle('active');
		content.classList.toggle('active');
		showTabs = true;
	} else {
		menuBtn.classList.toggle('show');
		sidebar.classList.toggle('active');
		content.classList.toggle('active');
		showTabs = false;
	}
});
// SideBar Toggle Ends
