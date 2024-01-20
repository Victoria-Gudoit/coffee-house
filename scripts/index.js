import { burgerBtnClick, closeMenuClick } from "./components/Burger";
import { swiper } from "./components/Slider";
document.addEventListener("DOMContentLoaded", initApp);
function initApp() {
  closeMenuClick;
  burgerBtnClick;
  swiper();
}
const btnMenu = document.querySelector("#btn-menu");

btnMenu.addEventListener("click", btnMenuClick);

function btnMenuClick(event) {
  this.classList.add("active");
  document.location.href = "menu.html";
  event.preventDefault();
}
