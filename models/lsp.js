// models/user.js
const mongoose = require('mongoose');

const lspSchema = new mongoose.Schema({
  name: {
    type : String,
   required: true
  },
  aadhaarLicense: {
    type: String,
    
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
  speciality:  {
    type : String , 
    
  },
  profilePicture:  {
    type : String ,
    
  }, 
  evidhicoins: {
    type : String ,
    
  },
  userDetails: {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    paymentDetails: {
      // Adjust the structure based on your payment details
      type: mongoose.Schema.Types.Mixed,
    },
  },

  // Assuming you store the image filename
});

const Lsp = mongoose.model('Lsp', lspSchema);

module.exports = Lsp;
