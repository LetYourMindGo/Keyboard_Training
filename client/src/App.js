import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const path = 'http://localhost:4040/words';

  const [words, setWords] = useState([])
  const [length, setLength] = useState(0)

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

  const handleClick = e => {
    e.preventDefault();
    console.log(e.currentTarget.children[0].value);
    checkWord(e.currentTarget.children[0].value);
    e.currentTarget.reset();
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log('length2:', length);
    if (length < 5) {
      getMoreData();
      console.log('new:', words);
    }
  }, [length]);

  const createdWords = words.map(word => <div>{word}</div>)

  return (
    <div>
      {createdWords}
      <form onSubmit={handleClick}>
        <input type='text' placeholder='type here' />
        <input type='submit' value='submit' />
      </form>
    </div>
  );
}

export default App;
