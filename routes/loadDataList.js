const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const schema = require('../database/mongodb').schema
const getCurrentDate = require('../database/mongodb').getCurrentDate
const _ = require('lodash')  // deep clone

router.get('/', (req, res) => {
    res.send('WTF?')
})

function addEmptyElement(List, start, end) {
    var emptyElement = {
        product: '-',
        product_2: '-',
        time: null,
    }
    for(var j = start ; j < end ; j++){
        const curTime = `${j} - ${j+1}`
        var element = _.cloneDeep(emptyElement)
        element.time = curTime
        List.push(element)
    }
    return List
}

router.post('/', (req, res) => {
    const collectionName = getCurrentDate();
    const colletcion = mongoose.model(collectionName, schema);
    var DataList = {
        MC_TON: req.body.MC_TON,
        List: []
    }
    colletcion.find({ MC_TON: req.body.MC_TON }, (err, docs) => {
        if (err) throw err;
        var i = 0
        for(i = 0 ; i < docs.length ; i++){
            DataList.List = addEmptyElement(DataList.List, i, docs[i].time[0])
            DataList.List.push({
                module: docs[i].module,
                product: docs[i].product,
                product_2: docs[i].product_2,
                time: docs[i].time,
            })
        }
        addEmptyElement(DataList.List, i, 24)
        res.send({
            List: DataList
        })
    });
})

module.exports = router