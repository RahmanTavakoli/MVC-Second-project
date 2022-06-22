const {
    Router
} = require("express");

const router = new Router();

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
    console.log(req.body);
    res.send("weblog");
});

module.exports = router