import Notiflix from 'notiflix';
import 'notiflix/src/notiflix.css';

 const formEl = document.querySelector('.form');
 formEl.addEventListener('submit', onSubmitForm);

function onSubmitForm(evt) {
  evt.preventDefault();
  const { delay, step, amount } = evt.target.elements;
  console.log(delay.value, step.value, amount.value);
  let currentDelay = Number(delay.value);
  for(let i = 1; i <= Number(amount.value); i +=1){
     createPromise(i, currentDelay)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
      currentDelay += Number(step.value)
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay })
      } else {
       reject({ position, delay }) 
      }
    }, delay)
  })
  return promise;
}