const listMenu = document.getElementById("list-menu-id");
const navLink = document.getElementById("nav-link-id");

listMenu.addEventListener("click", () => {
  navLink.classList.toggle("active");
});
