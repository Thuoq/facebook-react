const express = require("express")
const router = express.Router();
const UserMiddleware = require("../middlewares/auth.middleware");
const controllerUser = require("../controllers/user.controller");
router.post("/login" ,
 UserMiddleware.authenticationUserLogin,
 controllerUser.userPostFormLogin);
router.post("/signup",
  UserMiddleware.authenticationUserSignUp,
  controllerUser.userSignUp);
router.post("/:id/editUser",controllerUser.UserEditInformation);
router.post("/:id/editPriSchool",controllerUser.UserEditPriSchool);
router.get("/:id/priSchool",controllerUser.UserGetPriSchool);
router.post("/:id/priSchool",controllerUser.UserEditPriSchool);  
module.exports  = router; 