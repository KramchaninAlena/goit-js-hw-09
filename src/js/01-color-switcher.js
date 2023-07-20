function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  const bodyEl = document.querySelector('body')
  const startBtn = document.querySelector('button[data-start]');
  const stopBtn = document.querySelector('button[data-stop]');
  
  function changeColor(){
    const backGroundColor = getRandomHexColor();
    bodyEl.style.backgroundColor = backGroundColor;
  }
  
startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
        timerId = setInterval(changeColor, 1000);
        stopBtn.disabled = false;
});

stopBtn.addEventListener('click', () => {
clearInterval(timerId)
stopBtn.disabled = true;
startBtn.disabled = false;
});

