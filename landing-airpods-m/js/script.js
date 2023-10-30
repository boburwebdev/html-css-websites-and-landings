const navHamburger = document.querySelector(".nav__hamburger");
const header = document.querySelector(".header");
const colorOptions = document.querySelectorAll(".color-options__list-item");
const headerContentImages = document.querySelectorAll(".header__content-images-item");
const compositionImages = document.querySelectorAll(".composition__img");
const smartCaseImages = document.querySelectorAll(".smart-case__img");

navHamburger.addEventListener("click", toggleMenu);

colorOptions.forEach(option => {
  option.addEventListener("click", () => {
    const optionTheme = option.getAttribute("data-theme");
    setTheme(option, optionTheme);
  });
})

function toggleMenu() {
  const navList = document.querySelector(".nav__list");
  navList.classList.toggle("hide");
}

function setTheme(option, theme) {
  if (option.classList.contains(theme)) {
    header.classList.remove("theme-green");
    header.classList.remove("theme-pink");
    header.classList.remove("theme-skyblue");
    header.classList.remove("theme-spacegray");
    header.classList.remove("theme-silver");

    header.classList.add(theme);

    colorOptions.forEach(colorOption => {
      if (colorOption.classList.contains(theme)) {
        colorOption.classList.add("hide");
      } else {
        colorOption.classList.remove("hide");
      }
    })

    headerContentImages.forEach(headerImage => {
      if (headerImage.classList.contains(theme)) {
        headerImage.classList.remove("hide");
      } else {
        headerImage.classList.add("hide");
      }
    });

    compositionImages.forEach(compostionImage => {
      if (compostionImage.classList.contains(theme)) {
        compostionImage.classList.remove("hide");
      } else {
        compostionImage.classList.add("hide");
      }
    });

    smartCaseImages.forEach(smartCaseImage => {
      if (smartCaseImage.classList.contains(theme)) {
        smartCaseImage.classList.remove("hide");
      } else {
        smartCaseImage.classList.add("hide");
      }
    });
  }
}