// User Model 

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: { type: String, enum: ['beneficiary', 'charity_member'], required: true},
    address: String,
    tokenBalance: { type: Number, default: 0 }
});

module.exports = mongoose.model('User', userSchema);