const express = require('express')
const app = express()
const port = 8081

const cors = require('cors')
const corsOptions = {
    origin: [
        'http://localhost:8080',
        'http://127.0.0.1:8080',
    ],
}

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/PolyVision', (err) => {
    if (err) throw err;
    else
        console.log("connect to DB!!");
})

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/insert', require('./routes/insert.js'))
app.use('/loadMachineInfo', require('./routes/loadMachineInfo.js'))
app.use('/loadDataList', require('./routes/loadDataList'))

app.listen(port, () => {
  console.log(`Your first Express app is successfully running! You can view the output of this app at http://localhost:${port}`)
})