const {
    Router
} = require("express");
const{authenticated} = require('../middlewares/auth');

const router = new Router();

//* @desc Dashboard
//* @route GET /dashboard
router.get('/', authenticated,(req, res) => {
    res.render('dashboard', {
        pageTitle: "داشبورد | بخش مدیریت",
        path:"/dashboard",
        layout:"./layouts/dashLayout"
    });
});

module.exports = router;