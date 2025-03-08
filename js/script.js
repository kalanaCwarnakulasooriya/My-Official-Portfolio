document.addEventListener("DOMContentLoaded", function () {
  // Create mobile navigation toggle button
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");
  const mobileNavToggle = document.createElement("button");
  mobileNavToggle.className = "mobile-nav-toggle";
  mobileNavToggle.innerHTML = `
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
  `;
  header.insertBefore(mobileNavToggle, nav);

  // Mobile menu toggle functionality
  mobileNavToggle.addEventListener("click", function () {
    const navMenu = nav.querySelector("ul");
    mobileNavToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (event) {
    const navMenu = nav.querySelector("ul");
    const isClickInsideNav = nav.contains(event.target);
    const isClickOnToggle = mobileNavToggle.contains(event.target);

    if (
      !isClickInsideNav &&
      !isClickOnToggle &&
      navMenu.classList.contains("active")
    ) {
      mobileNavToggle.classList.remove("active");
      navMenu.classList.remove("active");
    }
  });

  // Close mobile menu when clicking on a nav link
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const navMenu = nav.querySelector("ul");
      mobileNavToggle.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  // Header scroll effect
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Handle window resize
  let resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      const navMenu = nav.querySelector("ul");
      if (window.innerWidth > 768) {
        mobileNavToggle.classList.remove("active");
        navMenu.classList.remove("active");
      }
    }, 250);
  });
});