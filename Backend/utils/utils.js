const  mongoose = require('mongoose');

function mongooseID(Id){
  const mongoId = new mongoose.Types.ObjectId(Id);
  return mongoId;
}

module.exports = {
  mongooseID
}