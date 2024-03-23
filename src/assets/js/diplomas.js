import Swiper from "swiper";
import { Pagination, Navigation } from "swiper/modules";

Swiper.use([Pagination, Navigation]);

const $diplomasSections = document.querySelectorAll(".diplomas");
$diplomasSections.forEach(($diplomas) => {
  const $slider = $diplomas.querySelector(".diplomas__slider");
  const $pagination = $diplomas.querySelector(".diplomas__pagination");
  const $btnPrev = $diplomas.querySelector(".diplomas__slider-btn--prev");
  const $btnNext = $diplomas.querySelector(".diplomas__slider-btn--next");
  new Swiper($slider, {
    slidesPerView: 1.74,
    speed: 500,
    spaceBetween: 13,
    pagination: {
      el: $pagination,
      clickable: true,
    },
    navigation: {
      prevEl: $btnPrev,
      nextEl: $btnNext,
    },
    breakpoints: {
      1180: {
        slidesPerView: 4,
        spaceBetween: 27,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      481: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
    },
  });
});
