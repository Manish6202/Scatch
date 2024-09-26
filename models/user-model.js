const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
fullname : {
    type: String,
    minLength: 3,
    trim: true,
},
email : String,
password : String,
cart : {
    type: array,
    default: []
},
isadmin : Boolean,
order : {
    type: array,
    default: []
},
contact : Number,
picture : String
});

module.exports = mongoose.model("user", userSchema);