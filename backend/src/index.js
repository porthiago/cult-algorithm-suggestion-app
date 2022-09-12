require('dotenv').config();
const express = require('express');
const app = express();
const knex = require('./connection.js');
const contentRouter = require('./routes/contentRouter');
const ratingRouter = require('./routes/ratingRouter');

const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use('/content', contentRouter);
app.use('/rating', ratingRouter);

app.listen(PORT, () => {
  console.log('Server is running on port 8000');
});
