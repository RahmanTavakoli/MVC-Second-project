const {
    Router
} = require("express");
const User = require('../models/user');


const router = new Router();

//* @desc weblog login page
//* routes GET /users/loginPage
router.get('/login', (req, res) => {
    res.render('login', {
        pageTitle: "ورود به بخش مدیریت",
        path: "/login"
    });
});

//* @desc weblog signin page
//* routes GET /users/signinPage
router.get('/signin', (req, res) => {
    res.render('signin', {
        pageTitle: "ثبت نام",
        path: "/signin"
    });
});

//* @desc weblog handle page
//* routes POST /users/handle Page
router.post('/signin', async (req, res) => {
    try {
        await User.userValidation(req.body);
        // user.create(req.body)
        res.redirect("/users/login");
    } catch (err) {
        console.log(err);
        const errors = [];
        err.inner.forEach((e) => {
            errors.push({
                name: e.path,
                message: e.message,
            });
        });

        return res.render('signin', {
            pageTitle: "ثبت نام",
            path: "/signin",
            errors,
        });
    }
});

module.exports = router