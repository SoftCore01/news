let burgerButton = document.querySelector(".menu-div");
let mobileNav = document.querySelector(".mobile-nav")

let closeButton = document.querySelector(".close-div")

burgerButton.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileNav.style.display = "flex"
})

closeButton.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileNav.style.display = "none"
})

window.addEventListener("click", (e) => {
    if (!mobileNav.contains(e.target)) mobileNav.style.display = "none";
})

