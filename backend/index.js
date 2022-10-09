const express = require('express');
const mongoose = require('mongoose')
const app = express();

const port = process.env.PORT || 3001;

const postsRouter = require('./routes/posts');

app.use('posts', postsRouter);

// mongoose
//   .connect(process.env.MONGO_DEV_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false    
//   })
//   .then(console.log("Database connected!"))
//   .catch(err => console.log(err));

// app.listen(port, function () {
//   console.log("Runnning on " + port);
// });

app.listen(port, () => {
  console.log(`Aplikacija radi na portu: ${port}`);
});

module.exports = app;