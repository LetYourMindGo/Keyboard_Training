import React from 'react'
import './name.css'

const Name = ({name}) => {
  return (
    <div className="name-container">
      <h2 className="name-container__text">Get ready, {name}!</h2>
    </div>
  )
}

export default Name
