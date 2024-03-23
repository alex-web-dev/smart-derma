import Swiper from "swiper";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";
import { createElem } from "./helpers";

Swiper.use([Navigation, Thumbs, FreeMode]);

const $boxes = document.querySelectorAll(".igallery");
$boxes.forEach(($galleryBox, boxIndex) => {
  const duration = $galleryBox.dataset.duration ? $galleryBox.dataset.duration : 400;
  createGalleryModal($galleryBox, boxIndex, duration);

  const $items = $galleryBox.querySelectorAll(".igallery__item");
  $items.forEach(($item, index) => {
    const $btns = $item.querySelectorAll(".igallery__btn");
    $btns.forEach(($btn) => {
      $btn.addEventListener("click", () => {
        openGalleryModal(boxIndex, index);
      });
    });
  });
});

function openGalleryModal(boxIndex, imgIndex) {
  const $modal = document.querySelectorAll(".igallery-modal")[boxIndex];
  const $slider = $modal.querySelector(".igallery-modal__slider");

  $slider.swiper.slideTo(imgIndex, 0, false);
  $modal.classList.add("igallery-modal--hide");
  $modal.classList.add("igallery-modal--active");
  setTimeout(() => $modal.classList.remove("igallery-modal--hide"), 10);
}

function closeGalleryModal(boxIndex) {
  const $modal = document.querySelectorAll(".igallery-modal")[boxIndex];

  $modal.classList.add("igallery-modal--hide");
  setTimeout(() => {
    $modal.classList.remove("igallery-modal--hide");
    $modal.classList.remove("igallery-modal--active");
  }, 400);
}

function createGalleryModal($galleryBox, boxIndex, duration) {
  const $modal = document.createElement("div");
  $modal.className = "igallery-modal";
  $modal.style.transitionDuration = `${duration}ms`;
  $modal.innerHTML = `
    <div class="igallery-modal__content">
      <div class="igallery-modal__main">
        <div class="igallery-modal__slider swiper"></div>
        <div class="igallery-modal__controls">
          <button class="btn-prev btn-prev--white igallery-modal__prev"></button>
          <button class="btn-next btn-next--white igallery-modal__next"></button>
        </div>
      </div>
      <div class="igallery-modal__thumbnails swiper"></div>
    </div>
    <div class="igallery-modal__backdrop"></div>
    <button class="igallery-modal__close"></button>
  `;

  const $items = $galleryBox.querySelectorAll(".igallery__item");
  const $sliderWrapper = document.createElement("div");
  $sliderWrapper.className = "swiper-wrapper";
  $items.forEach(($item) => {
    const $slide = document.createElement("div");
    $slide.className = "swiper-slide";
    $slide.innerHTML = `<img src="${$item.dataset.img}">`;
    $sliderWrapper.append($slide);
  });

  document.body.appendChild($modal);

  const $slider = $modal.querySelector(".igallery-modal__slider");
  $slider.append($sliderWrapper);

  const $thumbnails = $modal.querySelector(".igallery-modal__thumbnails");
  const $thumbnailsWrapper = createElem("div", "swiper-wrapper");
  $items.forEach(($items) => {
    const $thumbnail = document.createElement("div");
    $thumbnail.className = "igallery-modal__thumbnail";
    $thumbnail.innerHTML = `<img src="${$items.dataset.img}">`;

    const $slide = createElem("div", "swiper-slide igallery-modal__thumbnails-slide");
    $slide.append($thumbnail);

    $thumbnailsWrapper.append($slide);
  });

  $thumbnails.append($thumbnailsWrapper);

  const $content = $modal.querySelector(".igallery-modal__content");
  $content.append($thumbnails);

  const $prev = $modal.querySelector(".igallery-modal__prev");
  const $next = $modal.querySelector(".igallery-modal__next");

  const thumnailsSlider = new Swiper($thumbnails, {
    slidesPerView: "auto",
    spaceBetween: 10,
    freeMode: true,
  });

  new Swiper($slider, {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    speed: 600,
    navigation: {
      prevEl: $prev,
      nextEl: $next,
    },
    thumbs: {
      swiper: thumnailsSlider,
    },
  });

  const $close = $modal.querySelector(".igallery-modal__close");
  $close.addEventListener("click", () => closeGalleryModal(boxIndex));

  const $backdrop = $modal.querySelector(".igallery-modal__backdrop");
  $backdrop.addEventListener("click", () => closeGalleryModal(boxIndex));
}
