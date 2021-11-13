const express = require('express');
const axios = require('axios').get;
const cors = require('cors');

const app = express();
const port = 4040;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

let leaderboard = []

app.get('/words', async (req, res) => {
  const data = await axios('https://random-word-api.herokuapp.com/word?number=20');
  res.header('Access-Control-Allow-Origin', '*');
  res.send(200, data.data);
})

app.put('/leaderboard', (req, res) => {
  const {name, speed} = req.body;
  leaderboard.push({name, speed})
  console.log(leaderboard);
  res.header('Access-Control-Allow-Origin', '*');
  res.send(201)
})

app.get('/leaderboard', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.send(200, leaderboard)
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});