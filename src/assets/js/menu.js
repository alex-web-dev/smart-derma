const $menu = document.querySelector(".menu");
if ($menu) {
  const $items = $menu.querySelectorAll(".menu__item");
  $items.forEach(($item, index) => {
    const $submenues = $menu.querySelectorAll(".menu__submenu");
    $submenues.forEach(($submenu, index) => ($submenu.dataset.index = index));

    const $link = $item.querySelector(".menu__link");
    $link.addEventListener("click", () => {
      const $oldActiveSubmenu = $menu.querySelector(".menu__submenu--active");
      const oldActiveIndex = +$oldActiveSubmenu?.dataset.index;

      if (index === oldActiveIndex) {
        return;
      }

      const $submenu = $item.querySelector(".menu__submenu");
      $submenu.classList.add("menu__submenu--active");
      $menu.append($submenu);
      $item.classList.add("menu__item--active");

      if ($oldActiveSubmenu) {
        const $oldActiveItem = $menu.querySelectorAll(".menu__item")[oldActiveIndex];
        $oldActiveItem.append($oldActiveSubmenu);
        $oldActiveItem?.classList.remove("menu__item--active");
        $oldActiveSubmenu.classList.remove("menu__submenu--active");
      }
    });
  });

  window.addEventListener("click", (e) => {
    const $activeItem = document.querySelector(".menu__item--active");
    const isInner = e.target.closest(".menu__item") && !e.target.classList.contains("menu__item");
    const isSubmenu = e.target.closest(".menu__submenu") || e.target.classList.contains("menu__submenu");
    if (!$activeItem) {
      return;
    }

    if (isInner || isSubmenu) {
      return;
    }
    const $activeSubmenu = $menu.querySelector(".menu__submenu--active");
    $activeItem.append($activeSubmenu);
    $activeSubmenu.classList.remove("menu__submenu--active");
    $activeItem.classList.remove("menu__item--active");
  });
}
