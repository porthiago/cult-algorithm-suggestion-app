const express = require('express');
const app = express();
const knex = require('./connection.js');
const contentRouter = require('./routes/contentRouter');
const ratingRouter = require('./routes/ratingRouter');

app.use(express.json());

app.use('/content', contentRouter);
app.use('/rating', ratingRouter);

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
