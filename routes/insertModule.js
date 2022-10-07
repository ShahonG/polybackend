const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const moduleSchema = require('../database/mongodb').moduleSchema

router.get('/', function (req, res) {
    res.send('WTF?');
})

router.post('/', function (req, res) {
    const collection = mongoose.model("MachineInfo", moduleSchema)
    console.log(req.body._value)
    
    collection.create(req.body._value, (err) => {
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