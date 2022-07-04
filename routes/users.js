const {Router} = require("express");

const userController = require('../controllers/userController');
const { authenticated } = require("../middlewares/auth");

const router = new Router();

//* @desc weblog login page
//* routes GET /users/loginPage
router.get('/login',userController.login);

//* @desc weblog login handle
//* routes POST /users/loginPage
router.post('/login',userController.handlelogin);

//* @desc weblog logout handle
//* routes GET /users/logout
router.get('/logout',authenticated, userController.logout);

//* @desc weblog signin page
//* routes GET /users/signinPage
router.get('/signin', userController.signin);

//* @desc weblog handle page
//* routes POST /users/handle Page
router.post('/signin', userController.createUser);

module.exports = router