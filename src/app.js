import "bootstrap";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/swiper/swiper-bundle";

const swiper = new Swiper(".swiper", {
  // centeredSlides: true,
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    // when window width is >= 480px
    700: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 640px
    1440: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    // when window width is >= 640px
    1850: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    // when window width is >= 640px
    2350: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
});

const newSwiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let linkMore = document.querySelector(".link-more"),
  text = document.querySelector(".text");

  linkMore.onclick = function (e) {
  e.preventDefault();
  text.classList.toggle("text-open");
};

