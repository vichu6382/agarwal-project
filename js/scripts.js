

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// Initialize Swiper 


var swiper = new Swiper(".mySwiper2", {
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
});



// ===========jQuery===========

$(document).ready(function () {

  $('.text-h1').click(function () {
    $(this).animate({
      top: '20px'
    })
  })


})