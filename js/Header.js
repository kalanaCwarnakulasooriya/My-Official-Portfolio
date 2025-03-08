document.addEventListener("DOMContentLoaded", function () {
  var header = document.getElementById("main-header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});