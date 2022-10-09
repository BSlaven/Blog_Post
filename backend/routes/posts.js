const express = require('express');
const postModel = require('../models/postModel');

const router = express.Router();

router.get('/', async (req, res) => {
  // ovdje tražim sve postove
});

module.exports = router;