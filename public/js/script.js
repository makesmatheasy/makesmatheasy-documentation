$(function() { 
    $('#sidebarCollapse').on('click', function() {
      $('#sidebar, #content').toggleClass('active');
    });
  });
  


// Slider
const styleToggler = document.querySelector(".style-toggler")
styleToggler.addEventListener('click',()=>{
    document.querySelector('.theme-switcher').classList.toggle('open');
})

// OWL CAROUSEL EFFECT
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop:true,
  autoplay:true,
  dots:true,
  responsive:{
    0:{items:1},
  768:{
    items:3
  }}
  });
});


