import Swiper from "swiper";
import { Pagination } from "swiper/modules";

Swiper.use([Pagination]);

const $reviewRatingsSections = document.querySelectorAll(".review-ratings");
$reviewRatingsSections.forEach(($reviewRatings) => {
  const $slider = $reviewRatings.querySelector(".review-ratings__slider");
  const $pagination = $reviewRatings.querySelector(".review-ratings__pagination");

  new Swiper($slider, {
    slidesPerView: 1.2,
    speed: 500,
    spaceBetween: 30,
    pagination: {
      el: $pagination,
      clickable: true,
    },
    breakpoints: {
      1280: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      560: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
    },
  });
});
