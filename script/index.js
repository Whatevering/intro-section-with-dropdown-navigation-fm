"use strict";
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
menuButton === null || menuButton === void 0 ? void 0 : menuButton.addEventListener("click", () => {
    link === null || link === void 0 ? void 0 : link.classList.toggle("active");
    linkMobileLayout === null || linkMobileLayout === void 0 ? void 0 : linkMobileLayout.classList.toggle("active");
    body.classList.toggle("menu-active");
});
closeMenuButton === null || closeMenuButton === void 0 ? void 0 : closeMenuButton.addEventListener("click", () => {
    link === null || link === void 0 ? void 0 : link.classList.toggle("active");
    linkMobileLayout === null || linkMobileLayout === void 0 ? void 0 : linkMobileLayout.classList.toggle("active");
    body.classList.toggle("menu-active");
});
linkMobileLayout === null || linkMobileLayout === void 0 ? void 0 : linkMobileLayout.addEventListener("click", () => {
    link === null || link === void 0 ? void 0 : link.classList.toggle("active");
    linkMobileLayout === null || linkMobileLayout === void 0 ? void 0 : linkMobileLayout.classList.toggle("active");
    body.classList.toggle("menu-active");
});
