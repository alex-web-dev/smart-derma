const $menu = document.querySelector(".mobile-menu");
if ($menu) {
  const $menuToggle = document.querySelector(".toggle-menu");
  $menuToggle.addEventListener("click", () => {
    $menu.classList.toggle("mobile-menu--active");
    $menuToggle.classList.toggle("toggle-menu--active");
    document.body.classList.toggle("body--lock");
  });

  $menu.addEventListener("click", (e) => {
    if ($menu === e.target && $menu.classList.contains("mobile-menu--active")) {
      $menu.classList.remove("menu--active");
      document.body.classList.remove("body--lock");
    }
  });
}
