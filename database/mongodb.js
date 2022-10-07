const mongoose = require('mongoose')

const moduleSchema = new mongoose.Schema({ // sheet 2 schema (for machine's detail)
    customer: String,
    part_no: String,
    part_name: String,
    mould_size: String,
    cavity: String,
    sale: Number,
    ton_pd: String,
    ct_sale: Number,
    ct_pd: Number,
    customer_part_no_part_name: String,
    ct: Number,
    pcs_hr: Number,
});

const insertSchema = new mongoose.Schema({ // employee insert schema (sheet 1)
    MC_TON: String,
    customer_part_no_part_name: String,
    product: String,    // format -> 20, 20 , second number is NG product
    product_2: String,  // -1 for null
    time: String,
});

function getCurrentDate() {
  let date_ob = new Date();
  let date = ("0" + date_ob.getDate()).slice(-2);
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  let year = date_ob.getFullYear();
  const collectionName = year + "/" + month + "/" + date
  return collectionName
}

module.exports = { 
    insertSchema: insertSchema,
    moduleSchema: moduleSchema,
    getCurrentDate: getCurrentDate
}


// insert example
/*
const data = {
    MC_TON: "E02-160",
    custermer: "DIN-3P449134-1A-MCHX BRAKET (1)",
    product: 75,
    productNG: 0,
    product_2: -1,  // -1 for null
    productNG_2: -1,// -1 for null
    time: "8-9",
}

mongoose.connect('mongodb://localhost:27017/PolyVision', (err) => {
    if (err) throw err;
    else {
        machineData.create(data, (err, result) => {
            if (err) throw err;
            else
                console.log("success")
        })
    }    
})
*/