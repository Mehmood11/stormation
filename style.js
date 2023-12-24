function myFunction() {
  let menutoggle = document.querySelector(".toggle");
  menutoggle.classList.toggle("active");
}
$(document).ready(function () {
  $("#toggle").click(function () {
    $("header ul").toggleClass("active");
    // $("#toggle").toggleClass("active");
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  loop: true,
  nav: true,
  spaceBetween: 30,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 3,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
