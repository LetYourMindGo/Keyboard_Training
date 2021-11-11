import React from 'react'
import './timer.css'

const Timer = ({setDuration, duration}) => {
  
  const increaseDuration = e => {
    e.preventDefault();
    setDuration(duration + 1);
  }

  const decreaseDuration = e => {
    e.preventDefault();
    setDuration(duration - 1);
  }

  return (
    <div className="timer-container">
      <button type="submit" className="timer-container__button-plus" onClick={increaseDuration}>+</button>
      <div className="timer-container__timer">0{duration}:00</div>
      <button type="submit" className="timer-container__button-minus" onClick={decreaseDuration}>-</button>
    </div>
  )
}

export default Timer;
