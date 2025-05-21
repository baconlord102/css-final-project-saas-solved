document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.getElementById("mobile-bars");
  const closeBtn = document.getElementById("close-btn");
  const navList = document.getElementById("nav-list");

  mobileMenu.onclick = function () {
    navList.classList.add("open");
  };
  closeBtn.onclick = function () {
    navList.classList.remove("open");
  };
  
  document.querySelectorAll("#nav-list li:not(.close-btn)").forEach(link => {
    link.onclick = function () {
      navList.classList.remove("open");
    };
  });
});
