window.addEventListener("scroll", function () {
  const progressBar = document.querySelector(".progressbar");
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollPosition = window.scrollY;

  const scrollPercent = (scrollPosition / scrollHeight) * 100;

  progressBar.style.width = scrollPercent + "%";
});
