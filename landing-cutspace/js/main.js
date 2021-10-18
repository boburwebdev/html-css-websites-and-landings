const formHero = document.getElementById('hero__content_form');
const inputHero = document.getElementById('hero__content_form_input');

inputHero.addEventListener('focus', () => {
    formHero.classList.add('form__active')
});

inputHero.addEventListener('blur', () => {
    formHero.classList.remove('form__active')
})