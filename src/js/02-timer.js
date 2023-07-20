import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
import 'notiflix/src/notiflix.css';
import { convertMs } from "./convertMs";
import { refs } from "./refs";

refs.btnEl.disabled = true;
let targetDate = null;
refs.btnEl.addEventListener('click', onclick)

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        targetDate = selectedDates[0];
       if(targetDate < new Date()){
        return Notiflix.Notify.failure('Будь ласка, виберіть майбутню дату для вiдлiку')
       }       
        refs.btnEl.disabled = false;
    },
  };

  flatpickr('#datetime-picker',options);
  
  function onclick(evt) {
    const timerId = setInterval(() => {
        const currentDate = new Date()
        const timeLeft = targetDate - currentDate;
        const convertTime = convertMs(timeLeft)
        createTimer(convertTime);
        if(timeLeft < 1000 ){
            clearInterval(timerId);
            refs.btnEl.disabled = true;
        }
    }, 1000)
  }

  function addLeadingZero(value){
    return value.toString().padStart(2, '0');
  }

function createTimer(obj){
const { days, hours, minutes, seconds } = obj

refs.dayEl.textContent = addLeadingZero(days);
refs.hourEl.textContent = addLeadingZero(hours);
refs.minuteEl.textContent = addLeadingZero(minutes);
refs.secondEl.textContent = addLeadingZero(seconds);
}




