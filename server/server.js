require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require('body-parser')
const RouterUser = require("./routers/user.router");


// SET ORIGIN
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

 
mongoose.connect(process.env.DATA_BASE,{
	useNewUrlParser: true,
	useCreateIndex: true, 
	useFindAndModify: false,
	useUnifiedTopology: true
}).then( () => { 
	console.log("DB connections successfully")
}) 

app.use("/user",RouterUser);
const PORT = process.env.PORT || 8000; 
app.listen(PORT, (req,res) => {
  console.log("SERVERUNING")
})