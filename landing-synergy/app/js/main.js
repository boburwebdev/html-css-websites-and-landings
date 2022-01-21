// Smooth Scroll to "What we do" section from "Hero" section
const linkHeroArrowDown = document.querySelector(".hero__bottom .hero__arrows-down");

linkHeroArrowDown.addEventListener("click", goToWhatWeDo);

function goToWhatWeDo(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

// Swiper for "Projects"
const projectsSwiper = new Swiper('.projects .swiper', {
  loop: true,
  slidesPerView: 1,
  updateOnWindowResize: true,
  
  lazy: {
    loadPrevNext: true,
    loadPrevNextAmount: 1
  },

  pagination: {
    el: '.projects-swiper-pagination',
    type: 'bullets',
    clickable: true
  }
});


// Swiper for "Testimonials";
const testimonialsSwiper = new Swiper('.testimonials .swiper', {
  loop: true,
  slidesPerView: 1,
  updateOnWindowResize: true,
  
  lazy: {
    loadPrevNext: true,
    loadPrevNextAmount: 1
  },

  pagination: {
    el: '.testimonials-swiper-pagination',
    type: 'bullets',
    clickable: true
  }
});


// Floating labels for "Contacts" section;
const contactInputs = document.querySelectorAll('.contacts__form-input');
const contactTextarea = document.querySelectorAll('.contacts__form-textarea');
const contactsForm = document.querySelector('.contacts__form');

contactsForm.addEventListener('submit', e => {
  e.preventDefault()
});

checkKeyUpEvent(contactInputs);
checkKeyUpEvent(contactTextarea);

function checkKeyUpEvent(elements) {
  if (elements) {
    elements.forEach(element => {
      element.addEventListener('keyup', addOrRemoveNonEmpty);
    });
  }
}

function addOrRemoveNonEmpty(e) {
  const currentValue = e.target.value;

    if (currentValue !== '') {
      e.target.classList.add('not-empty');
    } else {
      e.target.classList.remove('not-empty')
    }
}

