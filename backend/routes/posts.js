const express = require('express');
const Post = require('../models/postModel');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const allPosts = await Post.find();
    res.status(200).send(allPosts);
  } catch(error) {
    console.log(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const post = await Post.findById(id);
    res.status(200).send(post);
  } catch(error) {
    console.log(error)
  }
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
  const id = req.params.id;
  
  // ovdje mijenjam post sa navedenim id
});

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id
    await Post.findByIdAndRemove(id);
    res.status(200).send({
      msg: 'Post je uspješno obrisan'
    })
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;