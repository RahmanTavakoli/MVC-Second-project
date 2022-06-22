const {
    Router
} = require("express");
const yup = require('yup');

const router = new Router();

const schema =  yup.object().shape({
    fullname: yup.string().required("نام الزامی است").min(4).max(255),
    email: yup.string().email().required("ایمیل معتبر نیست"),
    password: yup.string().min(4).max(255),
    confirmPassword: yup.string().required().oneOf([yup.ref("password"),null])
});

//* @desc weblog login page
//* routes GET /users/loginPage
router.get('/login', (req, res) => {
    res.render('login', {
        pageTitle: "ورود به بخش مدیریت",
        path:"/login"
    });
});

//* @desc weblog signin page
//* routes GET /users/signinPage
router.get('/signin', (req, res) => {
    res.render('signin', {
        pageTitle: "ثبت نام",
        path:"/signin"
    });
});

//* @desc weblog handle page
//* routes POST /users/handle Page
router.post('/signin', (req, res) => {
    schema.validate(req.body).then((result) =>{
        console.log(result);
        res.send("All Good");
    }).catch((err) =>{
        console.log(err);
        res.send("Error" , {errors: err.errors});
    })
});

module.exports = router