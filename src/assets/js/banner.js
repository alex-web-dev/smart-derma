import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";

Swiper.use([Navigation, Autoplay]);

new Swiper(".banner__slider", {
  slidesPerView: 1,
  speed: 700,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    prevEl: ".banner__navigation-btn--prev",
    nextEl: ".banner__navigation-btn--next",
  },
});
