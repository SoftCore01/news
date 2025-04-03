let burgerButton = document.querySelector(".menu-div");
let mobileNav = document.querySelector(".mobile-nav")

let closeButton = document.querySelector(".close-div")

burgerButton.addEventListener("click", (e) => {
    mobileNav.style.display = "flex"
})

closeButton.addEventListener("click", (e) => {
    mobileNav.style.display = "none"
})



