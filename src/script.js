
// eslint-disable-next-line import/no-unresolved
import './style.scss';

const input = document.querySelector('.form__input');
const button = document.querySelector('.form__button');
const incorrect = document.querySelector('.form__incorrect');

const click = () => {
  button.classList.add('form__button_click');
  setTimeout(() => {
    button.classList.remove('form__button_click');
  }, 200);
};

const valid = () => {
  if (input.value === '') {
    incorrect.classList.add('form__incorrect_true');
    setTimeout(() => {
      incorrect.classList.remove('form__incorrect_true');
    }, 1000);
  }
};

button.addEventListener('click', (e) => {
  e.preventDefault();
  valid();
  click();
});
