const mongoose = require("mongoose")

const AddressSchema = new mongoose.Schema({
  idUser : ObjectId,
  country: String,
  postcode : String,
  distinct: String,
  state : String
})


const Address = mongoose.model("Address", AddressSchema , "address" );

module.exports = Address