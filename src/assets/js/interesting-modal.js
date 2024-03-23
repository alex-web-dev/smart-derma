import { openModal } from "./modal";

modalHandler();

function modalHandler() {
  const $modal = document.querySelector('.modal[data-name="interest"]');
  const $callbackModal = document.querySelector('.modal[data-name="callback"]');
  const formDelayS = +$callbackModal.dataset.interestDelay;
  if (!formDelayS) {
    return;
  }

  setTimeout(() => {
    const isformSent = !!document.querySelector(".form--sent");
    if (isformSent) {
      return;
    }

    const modalLastShowDateMS = localStorage.getItem("interest-modal-date");
    if (!modalLastShowDateMS) {
      openModal($modal);
      localStorage.setItem("interest-modal-date", Date.parse(new Date()));
      return;
    }

    const modalDelayMS = 5 * 24 * 60 * 60 * 1000;
    const timePassMS = Date.parse(new Date()) - modalLastShowDateMS;
    if (modalDelayMS < timePassMS) {
      openModal($modal);
      localStorage.setItem("interest-modal-date", Date.parse(new Date()));
    }
  }, 1000 * formDelayS);
}
