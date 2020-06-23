const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = require("../models/user.model");
exports.authenticationUserSignUp = async  (req,res,next) => {
  const {email} = req.body;
  const exitsUser = await User.findOne({email: email});
  if(exitsUser) {
    res.status(404).json({
      message : "Email User Exits",
    })
    return;
  }
  next();
}
exports.authenticationUserLogin = async (req,res,next) => {
  const {email , password} = req.body;
  const userExits = await User.findOne({email : email});
  if(!userExits) {
    res.status(404).json({
      message : "Not User exits"
    })
  }
  await bcrypt.compare(password, userExits.password).then(function(result) {
    if(result) {
      res.locals.user = userExits;
      next();
    }else {
      res.status(404).json({
        message : "Wrong password"
      })
      return;
    }
  })
  
}
