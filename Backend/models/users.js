const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    firstName: 'String',
    lastName : 'String',
    email: 'String',
    password: 'String',
    phoneNumber: 'Number',
    imageUrl: 'String',
});

UserSchema.methods.getJWT = function () {
  const user = this;

  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY is not defined in the environment variables.');
  }

  const token = jwt.sign(
    { _id: user._id }, 
    process.env.JWT_KEY, 
    { expiresIn: '1d' }
  );
  
  return token;
};

UserSchema.methods.validateUserInputPassword = async function (passwordInputByUser) {
  const user = this;
  const isValidPassword = bcrypt.compareSync(passwordInputByUser, user?.password);
  return isValidPassword;
};

UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
   this.password = await bcrypt.hash(this.password, 10);
  next();
});


const User = mongoose.model("users", UserSchema);
module.exports = User;