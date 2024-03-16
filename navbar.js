const hamburger = document.querySelector(".hamburger");
const navItem = document.querySelectorAll(".navbar .nav-items a");
const navItems = document.querySelector(".nav-items");

hamburger.onclick = function (e) {
  navItems.classList.toggle("active1");
}
// to close hamburger on the click
navItem.forEach((navs) => {
  navs.onclick = function (e) {
    // if(navItems.classList.contains('active'))
    navItems.classList.remove("active");
  }
})