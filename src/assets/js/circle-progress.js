const $circlesProgress = document.querySelectorAll(".circle-progress");
$circlesProgress.forEach(($circleProgress) => {
  const percent = +$circleProgress.dataset.percent;
  const secondCircle = $circleProgress.querySelector(".circle-progress circle:nth-child(2)");
  secondCircle.style.strokeDashoffset = `calc(282 - (282 * ${percent}) / 100)`;
});
