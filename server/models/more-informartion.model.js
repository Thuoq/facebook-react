const mongoose = require("mongoose");

const MoreInformationSchema = new mongoose.Schema({
  idUser : ObjectId,
  interested : String,
  language : Array,
})

const MoreInformation = mongoose.model("MoreInformation",MoreInformationSchema,"moreInformation");


module.exports = MoreInformation;
