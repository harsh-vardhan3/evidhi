// models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type : String,
   required: true
  },
  
  email: {
    type : String,
    
  },
  mobile:  {
    type : String,
   
  },
  password:  {
    type : String,
    
  },
  confirmPassword:  {
    type : String ,
    
  },
 
  profilePicture:  {
    type : String ,
    
  }, 
  evidhicoins: {
    type : String ,
    
  },
  lspDetails: {
    lspId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Lsp',
    },
    paymentDetails: {
      // Adjust the structure based on your payment details
      type: mongoose.Schema.Types.Mixed,
    },
  }
  
  // Assuming you store the image filename
});

const User = mongoose.model('User', userSchema);

module.exports = User;
