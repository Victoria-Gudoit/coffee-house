const burgerBtn = document.querySelector("#burger");
const burgerNav = document.querySelector("#burger-nav");
burgerBtn.addEventListener("click", burgerBtnClick);
burgerNav.addEventListener("click", closeMenuClick);

function closeMenuClick(event) {
  if (!event.target.classList.contains("header-nav--burger")) {
    this.classList.toggle("header-nav--burger");
    burgerBtn.classList.toggle("burger--close");
  }
}

function burgerBtnClick() {
  this.classList.toggle("burger--close");
  burgerNav.classList.toggle("header-nav--burger");
}

export { burgerBtnClick, closeMenuClick };
