import React from 'react'
import './name.css'

const Name = ({name}) => {
  return (
    <div className="name-container">
      <h2 className="name-container__text">Good luck, {name}!</h2>
    </div>
  )
}

export default Name
