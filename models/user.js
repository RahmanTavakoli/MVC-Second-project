const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required: true,
        trim: true,  //remove "space" entered by user
        minlength: 3,
        maxlength: 255
    },
    email:{
        type: String,
        required:true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model("User" , UserSchema);

module.exports = User;