import React from 'react'
import './timer.css'

const Timer = ({setMinutes, setSeconds, minutes, seconds, time}) => {
  
  const increaseMinutes = e => {
    e.preventDefault();
    setMinutes(minutes + 1);
  }

  const increaseSeconds = e => {
    e.preventDefault();
    setSeconds(seconds + 10);
    if(seconds === 50) {
      setSeconds(seconds - 50);
      setMinutes(minutes + 1);
    }
  }

  const decreaseMinutes = e => {
    e.preventDefault();
    if(minutes > 0) {
      setMinutes(minutes - 1);
    }
  }

  const decreaseSeconds = e => {
    e.preventDefault();
    if(seconds > 0 || minutes > 0) {
      setSeconds(seconds - 10);
      if(seconds === 0 && minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(seconds + 50);
      }
    }
  }

  console.log('time:', time);

  return (
    <div className="timer-container">
      <div className="timer-container__button-plus">
        <button type="submit" className="button-plus__minutes" onClick={increaseMinutes}>+</button>
        <button type="submit" className="button-plus__seconds" onClick={increaseSeconds}>+</button>
      </div>
      <div className="timer-container__timer">{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</div>
      <div className="timer-container__button-minus">
        <button type="submit" className="button-minus__minutes" onClick={decreaseMinutes}>-</button>
        <button type="submit" className="button-minus__seconds" onClick={decreaseSeconds}>-</button>
      </div>
    </div>
  )
}

export default Timer;
