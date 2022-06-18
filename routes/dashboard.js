const {
    Router
} = require("express");

const router = new Router();

//* @desc Dashboard
//* @route GET /dashboard
router.get('/', (req, res) => {
    res.render('dashboard', {
        pageTitle: "داشبورد | بخش مدیریت",
        path:"/dashboard",
        layout:"./layouts/dashLayout"
    });
});

//* @desc weblog login page
//* routes GET /dashboard/loginPage
router.get('/login', (req, res) => {
    res.render('login', {
        pageTitle: "ورود به بخش مدیریت",
        path:"/login"
    });
});


module.exports = router;