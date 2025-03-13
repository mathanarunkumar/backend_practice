const mongoose = require('mongoose');

const practiceSchema = new mongoose.Schema({
  first_name: {
     type: String, 
    required: true 
},
  last_name: {
     type: String, 
     equired: true 
    },
role: { 
    type: String, 
    required: true 
},
dob: {
    type: Date, 
    required: true 
    },
gender: {
    type: String, 
    required: true 
    },
email: { 
    type: String, 
    required: true,
    unique: true 
}
});

module.exports = mongoose.model('testmern', practiceSchema);