const express = require('express');
const axios = require('axios').get;
const wordArray = require('./wordPack.json');

const app = express();
const port = 4040;

app.get('/word', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.send(200, wordArray);
})

app.get('/words', async (req, res) => {
  const data = await axios('https://random-word-api.herokuapp.com/word?number=20');
  res.header('Access-Control-Allow-Origin', '*');
  res.send(200, data.data);
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});