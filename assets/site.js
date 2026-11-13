const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector("#nav");

function closeMenu() {
  nav.classList.remove("open");
  menu.setAttribute("aria-expanded", "false");
}

menu.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(isOpen));
});
nav.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menu.getAttribute("aria-expanded") === "true") {
    closeMenu();
    menu.focus();
  }
});
matchMedia("(min-width: 801px)").addEventListener("change", closeMenu);
