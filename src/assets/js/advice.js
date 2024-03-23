import Swiper from "swiper";
import { Pagination, Autoplay } from "swiper/modules";

Swiper.use([Pagination, Autoplay]);

const $adviceSectionsSections = document.querySelectorAll(".advice");
$adviceSectionsSections.forEach(($advice) => {
  const $slider = $advice.querySelector(".advice__slider");
  const $pagination = $advice.querySelector(".advice__pagination");

  new Swiper($slider, {
    slidesPerView: 1.74,
    speed: 500,
    spaceBetween: 10,
    pagination: {
      el: $pagination,
      clickable: true,
    },
    breakpoints: {
      1180: {
        spaceBetween: 45,
        slidesPerView: 2,
      },
      481: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });
});
