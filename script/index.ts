const itemsWithMenu = document.querySelectorAll("[data-item-type='menu']");
itemsWithMenu.forEach((itemWithMenu) => {
  itemWithMenu.addEventListener("click", () => {
    itemWithMenu.classList.toggle("active");
  });
});

const menuButton = document.querySelector(".menu-button");
const closeMenuButton = document.querySelector(".close-menu-button");
const link = document.querySelector(".link");
const linkMobileLayout = document.querySelector(".link-mobile-layout");
const body = document.body;

menuButton?.addEventListener("click", () => {
  link?.classList.toggle("active");
  linkMobileLayout?.classList.toggle("active");
  body.classList.toggle("menu-active");
});

closeMenuButton?.addEventListener("click", () => {
  link?.classList.toggle("active");
  linkMobileLayout?.classList.toggle("active");
  body.classList.toggle("menu-active");
});

linkMobileLayout?.addEventListener("click", () => {
  link?.classList.toggle("active");
  linkMobileLayout?.classList.toggle("active");
  body.classList.toggle("menu-active");
});
