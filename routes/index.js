const {Router} = require("express");

const router = new Router();

router.get('/', (req , res) =>{
    res.render('index' , {pageTitle:"وبلاگ من"});
});

module.exports = router;
