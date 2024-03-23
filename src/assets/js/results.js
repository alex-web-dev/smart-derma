import Swiper from "swiper";
import { Pagination } from "swiper/modules";

Swiper.use([Pagination]);

const $resultsSections = document.querySelectorAll(".results");
$resultsSections.forEach(($results) => {
  const $slider = $results.querySelector(".results__slider");
  const $pagination = $results.querySelector(".results__pagination");

  new Swiper($slider, {
    slidesPerView: 1.39,
    speed: 500,
    spaceBetween: 16,
    pagination: {
      el: $pagination,
      clickable: true,
    },
    breakpoints: {
      1180: {
        slidesPerView: 3,
        spaceBetween: 27,
      },
      992: {
        slidesPerView: 2,
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
