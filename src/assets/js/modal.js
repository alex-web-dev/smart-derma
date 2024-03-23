import { lockBody, unlockBody } from "./helpers";

const ABSOLUTE_SELECTORS = ".callback-box";
const $openBtns = document.querySelectorAll(".js-open-modal");
$openBtns.forEach(($btn) => {
  $btn.addEventListener("click", () => {
    const name = $btn.dataset.modalName;
    const title = $btn.dataset.modalTitle;
    const $modal = document.querySelector(`.modal[data-name="${name}"`);
    if (!name || !$modal) {
      return;
    }

    openModal($modal, title);
  });
});

const $modals = document.querySelectorAll(".modal");
$modals.forEach(($modal) => {
  $modal.classList.add("modal--show");

  $modal.addEventListener("click", (e) => {
    if ($modal === e.target || e.target.classList.contains("modal__dialog")) {
      $modal.classList.remove("modal--active");

      const $otherActiveModal = document.querySelector(".modal--active");
      if (!$otherActiveModal) {
        $modal.addEventListener("transitionend", () => unlockBody(ABSOLUTE_SELECTORS), { once: true });
      }
    }
  });
});

const $closeBtns = document.querySelectorAll(".js-close-modal");
$closeBtns.forEach(($btn) => {
  $btn.addEventListener("click", () => {
    const name = $btn.dataset.modalClose;
    let $modal;
    if (name) {
      $modal = document.querySelector(`.modal[data-name="${name}"`);
    } else {
      $modal = $btn.closest(".modal");
    }

    $modal.classList.remove("modal--active");

    const $otherActiveModal = document.querySelector(".modal--active");
    if (!$otherActiveModal) {
      $modal.addEventListener("transitionend", () => unlockBody(ABSOLUTE_SELECTORS), { once: true });
    }
  });
});

export function openModal($modal, title) {
  const $otherActiveModal = document.querySelector(".modal--active");
  if (!$otherActiveModal) {
    lockBody(ABSOLUTE_SELECTORS);
  } else {
    const modalBodyScrollWidth = getScrollbarWidth($otherActiveModal.querySelector(".modal__body"));
    $modal.querySelector(".modal__dialog").style.paddingRight = `${modalBodyScrollWidth}px`;
  }

  const $modalTitle = document.querySelector('.modal__title');
  if (title) {
    $modalTitle.innerText = title;
  }

  $modal.classList.add("modal--active");
}

export default {
  openModal,
};
