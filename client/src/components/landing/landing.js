import React from 'react'
import { useNavigate } from 'react-router-dom';
import './landing.css'

const Landing = ({setName, name}) => {

  const navigate = useNavigate();

  const redirect = e => {
    e.preventDefault();
    setName(name = e.currentTarget.children[0].value)
    navigate('/start')
  }

  return (
    <div className="landing-container">
      <div className="landing-container__welcoming">
        <h1 className="welcoming__title">Welcome!</h1>
        <h3 className="welcoming__text">Enter your name and begin your training!</h3>
      </div>
      <form className="landing-container__form" onSubmit={redirect}>
        <input className="form__input" type="Text" placeholder="Your name here" required />
        <button className="form__button" type="submit" >Start</button>
      </form>
    </div>
  )
}

export default Landing
