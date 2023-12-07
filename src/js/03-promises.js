import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const elements = {
  form: document.querySelector('.js-form'),
};

elements.form.addEventListener('submit', createAllPromises);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function createAllPromises(evt) {
  evt.preventDefault();
  const form = evt.currentTarget;
  const firstDelay = Number(form.elements.delay.value);
  const delayStep = Number(form.elements.step.value);
  const amount = Number(form.elements.amount.value);
  for (let i = 0; i < amount; i++) {
    createPromise(i + 1, firstDelay + delayStep * i)
      .then(({ position, delay }) => {
        iziToast.show({
          messageColor: '#212121',
          backgroundColor: '#3fe86f',
          messageSize: '18px',
          position: 'topRight',
          progressBar: false,
          animateInside: false,
          transitionIn: 'fadeIn',
          transitionOut: 'fadeOut',
          timeout: 3000,
          pauseOnHover: false,
          message: `✅ Fulfilled promise ${position} in ${delay}ms`,
        });
      })
      .catch(({ position, delay }) => {
        iziToast.show({
          messageColor: '#212121',
          backgroundColor: '#fa6b55',
          messageSize: '18px',
          position: 'topRight',
          progressBar: false,
          animateInside: false,
          transitionIn: 'fadeIn',
          transitionOut: 'fadeOut',
          timeout: 3000,
          pauseOnHover: false,
          message: `❌ Rejected promise ${position} in ${delay}ms`,
        });
      });
  }
  form.reset();
}
