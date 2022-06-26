const mongoose = require('mongoose');

const yup = require('yup');

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
        minlength: 5,
        maxlength: 255
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const schema = yup.object().shape({
    fullname: yup.string()
        .required("نام الزامی است")
        .min(4, "نام نباید کمتر از 4 حرف باشد دوست عزیز")
        .max(255, "نام نباید بیشتر از 255 حرف باشد دوست عزیز"),
    email: yup.string()
        .email("ایمیل معتبر نیست")
        .required("ایمیل الزامی است"),
    password: yup.string()
        .required("رمز ورود الزامی است")
        .min(4, "رمز ورود نباید کمتر از 4 حرف باشد دوست عزیز")
        .max(255, "رمز ورود نباید بیشتر از 255 حرف باشد دوست عزیز"),
    confirmPassword: yup.string()
        .required("تکرار رمز ورود الزامی است")
        .oneOf([yup.ref("password"), null] , "رمز ورود یکسان نیست")
});

userSchema.statics.userValidation = function (body) {
    return schema.validate(body , {abortEarly: false})
}

const User = mongoose.model("User", userSchema);

module.exports = User;