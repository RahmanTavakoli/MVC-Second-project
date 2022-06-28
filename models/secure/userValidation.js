const yup = require('yup');

exports.schema = yup.object().shape({
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