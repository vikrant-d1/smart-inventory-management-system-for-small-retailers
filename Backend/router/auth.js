
const express = require("express");
const authRoute = express.Router();
const authController = require("../controller/auth")
const {sendSuccess, sendError} = require("../utils/response")
const { userAuth }  = require('../middlewares/userAuth');

authRoute.post("/register", (req, res) => {
  const {firstName, lastName, email,phoneNumber,password, imageUrl} = req.body;
   authController.registerUser({firstName, lastName, email, password,phoneNumber,imageUrl}).then(resData=>{
    res.cookie('token',resData?.token);
    sendSuccess(res,{},"Account register successfully",201);
  }).catch(err=>{
     sendError(res,err,err?.message,400)
  })
});

authRoute.post("/login",(req, res) => {
  const { email, password} = req.body;
  return authController.login({email,password}).then(loginResponse=>{
    res.cookie('token', loginResponse?.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Lax',
      maxAge: 24 * 60 * 60 * 1000,
    });

    sendSuccess(res,loginResponse,"Login Successful",200);
  }).catch(err=>{
    sendError(res,err,err?.message,400)
  });
});

authRoute.post("/logout",userAuth,(req, res) => {
   res.clearCookie('token');
   res.status(200).json({ message: 'Logged out successfully' });
});

authRoute.get("/get-user",userAuth,(req, res) => {
  let email = req.user[0].email;
  return authController.getUser(email).then(resData=>{
    sendSuccess(res,resData,"Login Successful",200);
  }).catch(err=>{
    sendError(res,err,err?.message,400)
  });
});


module.exports = authRoute;


