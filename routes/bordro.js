const express = require('express');
const router = express.Router();

// Models
const Bordro = require('../models/Bordro');

router.get('/new', (req, res, next) => {
  const bordro = new Bordro({
    title: 'Deneme'
  });

  bordro.save((err, data) => {
    if(err){
      console.log(err);
    }else{
      res.json(data);
    }
  });
});

module.exports = router;
