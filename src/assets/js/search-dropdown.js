const $searchDropdowns = document.querySelectorAll(".search-dropdown");
$searchDropdowns.forEach(($dropdown) => {
  const $btn = $dropdown.querySelector(".search-dropdown__btn");
  const $input = $dropdown.querySelector(".search-dropdown__input");

  $btn.addEventListener("click", () => {
    if ($dropdown.classList.contains(".search-dropdown--active")) {
      $dropdown.classList.remove("search-dropdown--active");
    } else {
      $dropdown.classList.add("search-dropdown--active");
      setTimeout(() => $input.focus(), 300);
    }
  });
});

window.addEventListener("click", (e) => {
  const $activeDropdown = document.querySelector(".search-dropdown--active");
  const isInner = e.target.closest(".search-dropdown") && !e.target.classList.contains("search-dropdown");
  if (!$activeDropdown || isInner) {
    return;
  }

  $activeDropdown.classList.remove("search-dropdown--active");
});
