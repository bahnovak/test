// eslint-disable-next-line import/no-unresolved
import './style.scss';

const requestUrl = 'http://jsonplaceholder.typicode.com/posts';

const input = document.querySelector('.form__input');
const button = document.querySelector('.form__button');
const incorrect = document.querySelector('.form__incorrect');
const sucsess = document.querySelector('.form__sucsess');

const request = (url, body) => fetch(url, {
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
  },
}).then((response) => response.json());

const click = () => {
  button.classList.add('form__button_click');
  setTimeout(() => {
    button.classList.remove('form__button_click');
  }, 200);
};

const sucsessRequest = () => {
  sucsess.classList.add('form__sucsess_true');
  setTimeout(() => {
    sucsess.classList.remove('form__sucsess_true');
  }, 1000);
};

const incorrectData = () => {
  incorrect.classList.add('form__incorrect_true');
  setTimeout(() => {
    incorrect.classList.remove('form__incorrect_true');
  }, 1000);
};

const valid = () => {
  if (input.value === '') {
    incorrectData();
  } else {
    const tel = {
      tel: input.value,
    };
    request(requestUrl, tel)
      .then(() => {
        sucsessRequest();
        input.value = '';
      })
      .catch((err) => { console.log(err); });
  }
};

button.addEventListener('click', (e) => {
  e.preventDefault();
  valid();
  click();
});
