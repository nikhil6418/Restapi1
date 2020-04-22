const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userResponse:[{
        symptoms: String,
        travelHistory: String,
        suspectContact: String
    }],
    contact: Number,
    address: String
});


module.exports = mongoose.model('User',userSchema);