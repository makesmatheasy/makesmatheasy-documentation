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

// Search Focus
var navSearch = document.querySelector('.nav_search');
var navSearchInput = document.querySelector('.nav_search input');
var navSearchBtns = document.querySelectorAll('.nav_search button');
navSearchInput.addEventListener("focus", function () {
    navSearch.style.background = "hsl(210, 36%, 96%)";
    navSearch.style.transition = ".25s";
    navSearchInput.style.background = "hsl(210, 36%, 96%)";
    navSearchBtns.forEach(function (btn) {
        var button = btn;
        button.style.background = "hsl(210, 36%, 96%)";
    });
    navSearch.style.boxShadow = " 0 5px 15px rgba(0, 0, 0, 0.2)";
}, true);
navSearchInput.addEventListener("blur", function () {
    navSearch.style.background = "hsl(210, 31%, 80%)";
    navSearchInput.style.background = "hsl(210, 31%, 80%)";
    navSearchBtns.forEach(function (btn) {
        var button = btn;
        button.style.background = "hsl(210, 31%, 80%)";
    });
    navSearch.style.boxShadow = "";
}, true);
$( ".change" ).on("click", function() {
	if( $( "body" ).hasClass( "dark" )) {
		$( "body" ).removeClass( "dark" );
		$("#sidebar").removeClass("dark-side");
		$( ".change" ).text( "OFF" );
	} else {
		$( "body" ).addClass( "dark" );
		$("#sidebar").addClass("dark-side");
		$( ".change" ).text( "ON" );
	}
});
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}