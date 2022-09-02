const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const machineData = require('../database/mongodb').machineData

const machineList = [
  "E01-160",
  "E02-160",
  "E03-160",
  "E04-160",
  "E05-160",
  "E06-160",
  "E07-160",
  "E08-160",
  "E09-160",
  "E10-160",
  "E11-160",
  "E12-160",
  "E13-160",
  "E14-160",
  "E15-160",
]
const moduleList = [
  "SHA-PCOVPA344WRF0-SPLASH COVER",
  "DIN-3P449134-1A-MCHX BRAKET (1)",
  "BEK-5753910100/MC-BOX_FAN_COVER",
  "SHA-PCOVPA345WRF0-SPLASH COVER REAR",
  "FJS-9378213012-DRAIN PORT",
  "ELE-132734202-SUPPORT, HOSE DRAIN, HIGH",
  "BEK-5752760100/MC-DISPLAY GLASS BEKO",
  "BEK-5750060100/MC-PLASTIC RAIL # BEK-5850060200/MC-PLASTIC RAIL",
  "KN-ANO375065/8DS00-AY-BUMPER BOTTOM COVER",
  "BEK-5751660100-ICE CUBE TRAY",
  "SHA-PCOVPA669CBFA-R LAMP COVER L # SHA-PCOVPA670CBFA-R LAMP COVER R",
  "KN-ANO375064/0WM00-AY-FRONT BUMPER SCREEN",
  "SEA-323469/MC-BS SIDE PLATE",
  "REPAIR MACHINE",
  "ELE-A03791303-SUPPOR WIRE SHELF LH # ELE-A03791304-SUPPOR WIRE SHELF RH",
]

router.post('/', function (req, res) {
  res.send({ 
    machine: machineList,
    module: moduleList,
  });
})

module.exports = router;