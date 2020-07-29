const express = require('express');
const router = express.Router();

const Bordro = require('../models/Bordro');

router.get('/Sorgu', (req, res, next) => {
  res.render('sorgu');
});

module.exports = router;