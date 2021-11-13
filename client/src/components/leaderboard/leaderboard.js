import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './leaderboard.css';

const Leaderboard = () => {
  const [data, setData] = useState([])
  const getData = async () => {
    let data = await axios.get('http://localhost:4040/leaderboard');
    setData(data.data);
  }
  
  useEffect(() => {
    getData();
  }, [])

  console.log('this', data);

  const results = () => {
    let leaders;
    if (data.length){
    leaders = data.map(obj => <li className="list-item">
      <p>Name: {obj.name}</p>
      <p>Speed: {obj.speed} letters/minut</p>
      </li>)
    } else {
      leaders = <p>No data yet</p>
    }
    return leaders;
  }
  
  return (
    <div className="leaderboard-container">
      <ul className="leaderboard-container__list">
        {results()}
      </ul>
    </div>
  )
}

export default Leaderboard
