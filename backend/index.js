const express = require('express');
const mongoose = require('mongoose')
const app = express();

const port = process.env.PORT || 3001;

const postsRouter = require('./routes/posts');

app.use('posts', postsRouter);

app.listen(port, () => {
  console.log(`Aplikacija radi na portu: ${port}`);
});

module.exports = app;