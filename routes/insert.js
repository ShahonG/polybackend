const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const schema = require('../database/mongodb').schema
const getCurrentDate = require('../database/mongodb').getCurrentDate

router.get('/', function (req, res) {
    res.send('WTF?');
})

router.post('/', function (req, res) {
  const collectionName = getCurrentDate()
  const collection = mongoose.model(collectionName, schema)
  
  req.body.product = `${req.body.product}, ${req.body.productNG}`
  if (req.body.product_2 != null) {
    req.body.product_2 = `${req.body.product_2}, ${req.body.productNG_2}`
  }
  console.log(req.body)

  delete req.body.productNG
  delete req.body.productNG_2
  
  collection.create(req.body, (err) => {
    if (err){
      res.send("Failed");
      throw err;
    }
    else {
      console.log("Success");
      res.send("Success");
    }
  })
})

module.exports = router;