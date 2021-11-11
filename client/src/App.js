import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/header/header.js';
import Timer from './components/timer/timer.js';
import Word from './components/word/word.js';
import Form from './components/form/form.js';

function App() {
  const path = 'http://localhost:4040/words';

  const [words, setWords] = useState([])
  const [length, setLength] = useState(0)
  const [duration, setDuration] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  const getData = () => {
    fetch(path)
    .then(res => res.json())
    .then(res => {
      setWords(res)
      setLength(res.length)
    })
  }

  const getMoreData = async () => {
    let data = await fetch(path)
    .then(res => res.json())
    .then(res => res)
    setWords([...words, ...data])
  }

  const checkWord = value => {
    const newWords = words.filter(word => word !== value)
    setWords(newWords);
    setLength(newWords.length)
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (length < 5) {
      getMoreData();
    }
  }, [length]);

  const createdWords = words.map(word => <div>{word}</div>)

  return (
    <div className="main-container">
      <Header />
      <Routes>
        <Route path="/" element={
          <div>OOOOOOPs</div>
        } />
        <Route path="/start" element={
          <div>
            <Timer setDuration={setDuration} duration={duration} />
            <Word createdWords={createdWords} />
            <Form checkWord={checkWord} duration={duration} setTimerOn={setTimerOn} timerOn={timerOn} />
          </div>
        } />
        <Route path="/results" element={
          <div>YEEEEEEEEEEy</div>
        } />
      </Routes>
    </div>
  );
}

export default App;
