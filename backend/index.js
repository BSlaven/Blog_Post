const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const postsRouter = require('./routes/posts');
app.use('/posts', postsRouter);

console.log('Ovo je moj process.env: ', process.env.MONGO_DEVELOPMENT_URI)

mongoose
  .connect('mongodb+srv://bslaven:suncaneulice@cluster0.azhgugx.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(console.log("Database connected!"))
  .catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Aplikacija radi na portu: ${port}`);
});

module.exports = app;