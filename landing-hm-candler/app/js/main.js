const headerMenuHamburger = document.querySelector(".header .nav__menu-hamburger");
const headerNavMenu = document.querySelector(".header .nav__menu");

headerMenuHamburger.addEventListener("click", () => {
  headerNavMenu.classList.toggle("active");
});

const swiperFeedbacks = new Swiper('.feedbacks__slider', {
  loop: true,
  pagination: {
    el: '.swiper-pagination--feedbacks',
    clickable: true
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
});

const swiperCertificates = new Swiper('.certificates__slider', {
  slidesPerView: "auto",
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination--certificates',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    480: {
      slidesPerView: "auto"
    },
    768: {
      spaceBetween: 20
    }
  }
});

const faqQuestions = document.querySelectorAll(".faq__content-item__question");

faqQuestions.forEach(question => {
  question.addEventListener("click", e => {
    console.log(e.currentTarget.parentElement);
    const currentParent = e.currentTarget.parentElement;
    const currentAnswer = currentParent.querySelector(".faq__content-item__answer");
    
    e.currentTarget.classList.toggle("opened");
    currentAnswer.classList.toggle("visible");

    if (e.currentTarget.classList.contains("opened")) {
      currentAnswer.style.maxHeight = currentAnswer.scrollHeight + "px";
    } else {
      currentAnswer.style.maxHeight = 0;
    }
  });
});