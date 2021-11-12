import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import './form.css'

const Form = ({checkWord, minutes, seconds, setTimerOn, timerOn, setTime}) => {

  const navigate = useNavigate();

  const startTimer = (time, display) => {
    let timer = time, min, sec;
    console.log(typeof timer);
    

    if(timerOn && timer !== 0){
      const interval = setInterval(() => {
        min = parseInt(timer / 60, 10);
        sec = parseInt(timer % 60, 10);
        console.log('tick');
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;

        setTime(display.textContent = min + ":" + sec);

        if (--timer < 0) {
          timer = parseInt(time);
          setTimerOn(false)
          navigate('/results')
          clearInterval(interval)
          }
      }, 1000);
      console.log('hej');
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
