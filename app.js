const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

const postRoute = require('./routes/posts');

app.use('/posts', postRoute);

app.get('/', (req, res) => {
  res.send('We are home!');
});

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true },
  () => console.log('Connected to DB'),
);

app.listen(3000, () => console.log('app is listening on port 3000'));
