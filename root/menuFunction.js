let menuBtn = document.querySelector("#menu-button");
let menuBox = document.querySelector(".menu-box");

menuBtn.addEventListener("click", () => {
    menuBox.classList.add("label-menu");
})

menuBox.addEventListener("click", () => {
    menuBox.classList.remove("label-menu");
})