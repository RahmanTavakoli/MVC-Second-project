const mongoose = require('mongoose');

const {schema} = require('./secure/userValidation');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true, "نام و نام خانوادگی الزامی است"],
        trim: true, //remove "space" entered by user
        minlength: 3,
        maxlength: 255
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 255
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

userSchema.statics.userValidation = function (body) {
    return schema.validate(body , {abortEarly: false})
}

const User = mongoose.model("User", userSchema);

module.exports = User;