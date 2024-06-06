const mongoose = require('mongoose');

//Initialise schema
const carSchema = mongoose.Schema({
  model: { type: Number, required: true },
  make: { type: String, required: true },
  colour: { type: String, required: true },
  reg: { type: String, required: true },
  owner: { type: String, required: true },
  address: { type: String, required: true },
});;

const carModel = mongoose.model('Car', carSchema)

module.exports = {
    carModel
}

