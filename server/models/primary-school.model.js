const mongoose = require("mongoose");

const PrimarySchoolSchema = new mongoose.Schema({
  idUser: ObjectId,
  name: String,
  degree: String,
  fieldStudy: String,
  academyYear: Number
})

const PrimarySchool = mongoose.model("PrimarySchool",PrimarySchoolSchema, "primarySchool");

module.exports = PrimarySchool;