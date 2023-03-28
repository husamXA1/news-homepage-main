let menuBtn = document.querySelector("img.bars");
let navigationMenu = document.querySelector("nav ul");
let isActive = false;

menuBtn.onclick = () => {
    if (isActive) {
        navigationMenu.classList.remove("active");
    } else {
        navigationMenu.classList.add("active");
    }
    isActive = !isActive;
}