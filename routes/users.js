const {Router} = require("express");

const userController = require('../controllers/userController');

const router = new Router();

//* @desc weblog login page
//* routes GET /users/loginPage
router.get('/login',userController.login);

//* @desc weblog signin page
//* routes GET /users/signinPage
router.get('/signin', userController.signin);

//* @desc weblog handle page
//* routes POST /users/handle Page
router.post('/signin', userController.createUser);

module.exports = router