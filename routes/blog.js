const {
    Router
} = require("express");

const router = new Router();

//* @desc weblog index page
//*routes GET /
router.get('/', (req, res) => {
    res.render('index', {
        pageTitle: "وبلاگ من",
        path: "/"
    });
});

module.exports = router;