import React from 'react'
import './form.css'

const Form = ({checkWord, duration, setTimerOn, timerOn}) => {
  const startTimer = (duration, display) => {
    let timer = duration, minutes, seconds;
    setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            console.log('0');
            setTimerOn(false)
        }
    }, 1000);
  }

  const timerDuration = e => {
    e.preventDefault();
    if(!timerOn){
      const minutes = 60 * duration,
          display = document.querySelector('.timer-container__timer');
      startTimer(minutes, display);
      setTimerOn(true)
    }
    return;
  };
  
  const handleClick = e => {
    e.preventDefault();
    checkWord(e.currentTarget.children[0].value);
    e.currentTarget.reset();
  }

  return (
    <div className="form-container">
      <form onSubmit={handleClick} className="form-container__form">
        <input type='text' placeholder='type here' className="form__input" onChange={timerDuration} />
        <button type='submit' className="form__button">Submit</button>
      </form>
    </div>
  )
}

export default Form
