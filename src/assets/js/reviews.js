import Swiper from "swiper";
import { Pagination, Autoplay } from "swiper/modules";

Swiper.use([Pagination, Autoplay]);

const $reviewsSections = document.querySelectorAll(".reviews");
$reviewsSections.forEach(($reviews) => {
  const $slider = $reviews.querySelector(".reviews__slider");
  const $pagination = $reviews.querySelector(".reviews__pagination");
  new Swiper($slider, {
    slidesPerView: "auto",
    speed: 500,
    spaceBetween: 50,
    pagination: {
      el: $pagination,
      clickable: true,
    },
  });

  const $mobileSlider = $reviews.querySelector(".reviews__mobile-slider");
  const $mobilePagination = $reviews.querySelector(".reviews__mobile-pagination");
  new Swiper($mobileSlider, {
    slidesPerView: 1.25,
    speed: 500,
    spaceBetween: 12,
    pagination: {
      el: $mobilePagination,
      clickable: true,
    },
    breakpoints: {
      481: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
    },
  });
});

const $slides = document.querySelectorAll(".reviews__slide");
$slides.forEach(($slide) => {
  const $columns = $slide.querySelectorAll(".reviews__slide-column");
  const firstColumnTextSize = [...$columns[0].querySelectorAll(".review-item__text")].reduce((accumulator, currentValue) => {
    return accumulator + currentValue.innerText.length;
  }, 0);
  const secondColumnTextSize = [...$columns[1].querySelectorAll(".review-item__text")].reduce((accumulator, currentValue) => {
    return accumulator + currentValue.innerText.length;
  }, 0);
  const k = 1.49;
  const firstColumnWidth = k * (firstColumnTextSize / (firstColumnTextSize + secondColumnTextSize)) * 100;
  const secondColumnWidth = 100 - firstColumnWidth;

  $columns[0].style.width = `${firstColumnWidth}%`;
  $columns[1].style.width = `${secondColumnWidth}%`;
});

const $listGroups = document.querySelectorAll(".reviews__list-group");
$listGroups.forEach(($listGroup) => {
  const $firstItem = $listGroup.querySelectorAll(".reviews__item")[0];
  const $secondItem = $listGroup.querySelectorAll(".reviews__item")[1];

  if (!$firstItem || !$secondItem) {
    return;
  }

  const firstItemTextSize = $firstItem.querySelector(".review-item__text").innerText.length;
  const secondItemTextSize = $secondItem.querySelector(".review-item__text").innerText.length;
  const k = 0.94;
  const offset = 14;
  const firstItemWidth = k * (firstItemTextSize / (firstItemTextSize + secondItemTextSize)) * 100;
  const secondItemWidth = 100 - firstItemWidth;

  $firstItem.style.width = `calc(${firstItemWidth}% - ${offset}px)`;
  $secondItem.style.width = `calc(${secondItemWidth}% - ${offset}px)`;
});
