const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email : String,
  password : String,
  phoneNumber : String,
  userPhoto : {
    type: String,
    default : "https://i.postimg.cc/9XxbfFPc/society1.jpg"
  },
  userProfile : {
    type : String,
    default : "https://i.postimg.cc/tg9YsN2n/upload.png"
  },
  birthDay: Date,
  createAt: String,
  country : {
    type: String,
    default : "Viet Nam"
  },
  sex: String,
})

const User = mongoose.model("User", userSchema, "user");

module.exports = User;