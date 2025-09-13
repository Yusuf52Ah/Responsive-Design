const menu = document.getElementById("mobileMenu")
const openBtn = document.getElementById("openBtn")
const closeBtn = document.getElementById("closeBtn")
if (menu && openBtn && closeBtn) {
    openBtn.addEventListener("click", () => {
        menu.classList.remove("hidden")
    })
    closeBtn.addEventListener("click", () => {
        menu.classList.add("hidden")
    })
}