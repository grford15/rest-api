const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('We are home!');
});

app.get('/posts', (req, res) => {
  res.send('We are on posts');
});

app.listen(3000, () => console.log('app is listening on port 3000'));
