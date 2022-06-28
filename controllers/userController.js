const User = require('../models/user');

exports.login = (req, res) => {
    res.render('login', {
        pageTitle: "ورود به بخش مدیریت",
        path: "/login"
    });
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
        const { fullname ,email , password } = req.body;

        const user = await User.findOne({email})
        if(user){
            errors.push({message: "کاربری با ایمیل وارد شده قبلا ثبت نام شده است"});
            return res.render('signin', {
                pageTitle: "ثبت نام",
                path: "/signin",
                errors,
            });
        }else

        await User.create(req.body); //!solution 1
        res.redirect("/users/login");
        //    const { fullname ,email , password } = req.body; //!solution 2
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