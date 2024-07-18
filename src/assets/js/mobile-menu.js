const $menu = document.querySelector(".mobile-menu");
if ($menu) {
  const $menuToggle = document.querySelector(".toggle-menu");
  $menuToggle.addEventListener("click", () => {
    if ($menu.classList.contains('mobile-menu--active')) {
      $menu.classList.remove("mobile-menu--active");
      $menuToggle.classList.remove("toggle-menu--active");
      document.body.classList.remove("body--lock");
    } else {
      $menu.classList.add("mobile-menu--active");
      $menuToggle.classList.add("toggle-menu--active");
      document.body.classList.add("body--lock");
    }
  });

  $menu.addEventListener("click", (e) => {
    if ($menu === e.target && $menu.classList.contains("mobile-menu--active")) {
      $menu.classList.remove("menu--active");
      document.body.classList.remove("body--lock");
    }
  });
}
