import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/header.js';
import Landing from './components/landing/landing.js';
import Name from './components/name/name.js';
import Timer from './components/timer/timer.js';
import Word from './components/word/word.js';
import Form from './components/form/form.js';
import Results from './components/results/results.js';

function App() {
  const path = 'http://localhost:4040/words';

  const [words, setWords] = useState([])
  const [length, setLength] = useState(0)
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(1);
  const [timerOn, setTimerOn] = useState(false);
  const [wordCounter, setWordCounter] = useState(0);
  const [letterCounter, setLetterCounter] = useState(0);
  const [name, setName] = useState('');
  const [time, setTime] = useState(minutes + ":" + seconds);

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
    setLetterCounter(letterCounter + value.length)
    setWordCounter(wordCounter + 1);
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
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={
          <Landing setName={setName} name={name} />
        } />
        <Route path="/start" element={
          <div className="app__start">
            <Name name={name} />
            <Timer setMinutes={setMinutes} minutes={minutes} setSeconds={setSeconds} seconds={seconds} time={time} />
            <Word createdWords={createdWords} setLetterCounter={setLetterCounter} letterCounter={letterCounter} />
            <Form checkWord={checkWord} minutes={minutes} seconds={seconds} setTimerOn={setTimerOn} timerOn={timerOn} setTime={setTime} />
          </div>
        } />
        <Route path="/results" element={
          <div>
            <Results wordCounter={wordCounter} minutes={minutes} seconds={seconds} letterCounter={letterCounter} name={name} />
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;
