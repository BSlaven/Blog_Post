const express = require('express');
const Post = require('../models/postModel');

const router = express.Router();

router.get('/', async (req, res) => {
  // ovdje tražim sve postove
});

router.get('/:id', async (req, res) => {

  // ovdje tražim jedan post sa navedenim id
});

router.post('/newPost', async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    res.status(200).json({
      msg: 'Kreiran je novi post'
    })
  } catch(e) {
    console.log(e);
  }
});

router.put('/edit/:id', async (req, res) => {
  // ovdje mijenjam post sa navedenim id
});

router.delete('/:id', async (req, res) => {
  // ovdje brišem post sa navedenim id
})

module.exports = router;