const mongoose = require("mongoose");

const SecondarySchoolSchema = new mongoose.Schema({
  idUser : ObjectId,
  name : String,
  degree: String,
  fieldStudy: String,
  startYear: Number,
  endYear: Number
})

const SecondarySchool = mongoose.model("SecondarySchool",
                                        SecondarySchoolSchema,
                                        "secondarySchool")

module.exports = SecondarySchool;