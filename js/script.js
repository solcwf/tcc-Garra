
console.log("aCHOOOOO");
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 0) {  // Check for length > 0 instead of > 1 for NodeList
    if (elem.length === undefined) {  // Check if it's a single element
      elem.addEventListener(type, callback);
    } else {  // It's a NodeList (collection)
      for (let i = 0; i < elem.length; i++) {
        elem[i].addEventListener(type, callback);
      }
    }
  }
};


document.getElementById("userButton").addEventListener("click", function () {
  window.location.href = "/html/loginregistro.html";
});

const navToggler = document.querySelector("[data-nav-toggler]");
console.log(navToggler);
const navbar = document.querySelector("[data-navbar]");
console.log(navbar);
const navbarLinks = document.querySelectorAll("[data-nav-link]");
console.log(navbarLinks);

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
};

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
};

addEventOnElem(navbarLinks, "click", closeNavbar);

// header aparece quando abaixamos a tela

const header = document.querySelector("[data-header]");
console.log(header);
const backTopBtn = document.querySelector("[data-back-top-btn]");
console.log(backTopBtn);

const activeElemOnScroll = function () {
  console.log("Scrollou ");
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
};

window.addEventListener("scroll", activeElemOnScroll);