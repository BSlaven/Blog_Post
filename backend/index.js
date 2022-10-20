require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const dbAuthData = require('./devData')

const port = process.env.PORT || 3001;

const mongoURI = process.env.MONGO_DEVELOPMENT_URI || `mongodb+srv://${dbAuthData.korisnik}:${dbAuthData.password}@cluster0.azhgugx.mongodb.net/?retryWrites=true&w=majority`

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const postsRouter = require('./routes/posts');
app.use('/posts', postsRouter);

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(console.log("Database connected!"))
  .catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Aplikacija radi na portu: ${port}`);
});

module.exports = app;