const bcrypt = require('bcryptjs');
const passport = require('passport');

const User = require('../models/user');

exports.login = (req, res) => {
    res.render('login', {
        pageTitle: "ورود به بخش مدیریت",
        path: "/login",
        message: req.flash("success_msg"),
        error: req.flash("error")
    });
}

exports.handlelogin = (req, res, next) => {
    passport.authenticate("local", {
        successRedirect: "/dashboard",
        failureRedirect: "/users/login",
        failureFlash: true
    })(req, res, next);
}

exports.signin = (req, res) => {
    res.render('signin', {
        pageTitle: "ثبت نام",
        path: "/signin"
    });
}

exports.createUser = async (req, res) => {
    const errors = [];
    try {
        await User.userValidation(req.body);
        const {
            fullname,
            email,
            password
        } = req.body;

        const user = await User.findOne({
            email
        })
        if (user) {
            errors.push({
                message: "کاربری با ایمیل وارد شده قبلا ثبت نام شده است"
            });
            return res.render('signin', {
                pageTitle: "ثبت نام",
                path: "/signin",
                errors,
            });
        }
        //*hash password
        //TODO: solution shortly for hashing password
        const hash = await bcrypt.hash(password, 10)
        await User.create({
            fullname,
            email,
            password: hash
        })
        req.flash("success_msg", "ٍثبت نام موفقیت امیز بود")
        res.redirect("/users/login");

        //TODO: solution normaly for hashing password
        // bcrypt.genSalt(10, (err, salt) => {
        //     if (err) throw err;
        //     bcrypt.hash(password, salt, async (err, hash) => {
        //         if (err) throw err;

        //         await User.create({
        //             fullname ,
        //             email , 
        //             password : hash
        //         }); //!solution 1 register to database
        //         res.redirect("/users/login");
        //     })
        // })
        //!___________________________________________________________
        //    const { fullname ,email , password } = req.body; //!solution 2 register to database
        //    const user = new User({
        //     fullname ,
        //     email , 
        //     password
        //    });
        //    user.save() // save user to mongodb
        //    .then((user) => {
        //     console.log(user);
        //     res.redirect("/users/login");
        //    }).catch((err) => {
        //     if (err) throw err; 
        //    });
    } catch (err) {
        console.log(err);
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
}