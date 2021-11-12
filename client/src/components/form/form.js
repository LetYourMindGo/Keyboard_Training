import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import './form.css'

const Form = ({checkWord, minutes, seconds, setTimerOn, timerOn}) => {

  const navigate = useNavigate();

  const startTimer = (time, display) => {
    let timer = time, min, sec;
    if(timerOn){
      setInterval(() => {
        min = parseInt(timer / 60, 10);
        sec = parseInt(timer % 60, 10);

        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;

        display.textContent = min + ":" + sec;
        if (--timer < 0) {
          timer = time;
          setTimerOn(false)
          navigate('/results')
          }
      }, 1000);
    }
    return;
  }

  useEffect(() => {
    let time;
    const minutesTotal = 60 * minutes;
    time = minutesTotal + seconds
    const display = document.querySelector('.timer-container__timer');
    startTimer(time, display);
  }, [timerOn]);

  const timerDuration = e => {
    e.preventDefault();
    if(!timerOn){
      setTimerOn(true)
    }
  };
  
  const handleClick = e => {
    e.preventDefault();
    checkWord(e.currentTarget.children[0].value);
    e.currentTarget.reset();
  }

  return (
    <div className="form-container">
      <form onSubmit={handleClick} className="form-container__form">
        <input type='text' placeholder='Set timer and start typing first word' className="form__input" onChange={timerDuration} />
      </form>
    </div>
  )
}

export default Form
