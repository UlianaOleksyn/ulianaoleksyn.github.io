"use strict";
window.addEventListener('DOMContentLoaded', () => {

    const hamburger = document.querySelector(".hamburger"),
          menu = document.querySelector(".menu"),
          menuItems = menu.querySelectorAll(".menu_item");

    hamburger.addEventListener("click", () =>{
        hamburger.classList.toggle("hamburger_active");
        menu.classList.toggle("menu_active");
    });

    function closeHamburgerMenu() {
        hamburger.classList.remove("hamburger_active");
        menu.classList.remove("menu_active");
    }

    window.addEventListener("keydown", (event) => {
        if (event.code == "Escape"){
            closeHamburgerMenu();
        }
    });

    menuItems.forEach(i =>{
        i.addEventListener("click", () => {
            closeHamburgerMenu();
        });

    });


});