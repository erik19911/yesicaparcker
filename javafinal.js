const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".menu");
const open =document.querySelector(".open-menu");
const  close=document.querySelector(".close-menu")
const lin=document.querySelectorAll('.menu a[href="#"]')

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("menu_visible");
});
  
  open.addEventListener("click", () => {
    navMenu.classList.toggle("menu_visible");

 
  });

close.addEventListener("click" , () => {
  navMenu.classList.toggle("menu_visible");

});





