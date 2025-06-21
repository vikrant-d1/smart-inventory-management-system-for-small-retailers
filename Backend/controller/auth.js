const User = require("../models/users")
const bcrypt = require('bcrypt');


const registerUser = async (userData) => {
  try {
    const { firstName, lastName, email, password, phoneNumber, imageUrl } = userData;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error('User already exists');
    }

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: password,
      phoneNumber,
      imageUrl
    });

    const savedUser = await newUser.save();
    return savedUser;

  } catch (err) {
    throw err; 
  }
};


  const login = async (userData) => {
    try{
      const errorMessage = 'Credential not valid.';
      const {email,password} = userData;
      const user = await User.findOne({email:email});

      if(!user){
       throw new Error(errorMessage);
      }

     const isValidPassword = await user.validateUserInputPassword(password);
    
     if(isValidPassword){
      const token = await user.getJWT();
      return {token};
    }else{
      throw new Error(errorMessage);
    }
    }catch(err){
      throw new Error(err);
    }
  }

   const getUser = async (email) => {
    try{
      const user = await User.findOne({email:email},{password:0});
      return user;
    }catch(err){
      throw new Error(err);
    }
  }



    module.exports = {
    registerUser,
    login,
    getUser,
  }