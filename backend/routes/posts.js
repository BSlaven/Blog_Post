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
  // ovdje postavljam novi post
});


module.exports = router;