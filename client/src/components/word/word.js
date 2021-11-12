import React from 'react'
import './word.css'

function Word({createdWords}) {

  return (
    <div className="word-container">
      <h2 className="word-container__word">{createdWords[0]}</h2>
    </div>
  )
}

export default Word
