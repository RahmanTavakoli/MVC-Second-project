const path = require('path');

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const dotEnv = require('dotenv');
const morgan = require('morgan');
const flash = require('connect-flash');
const session = require('express-session');

const connectDB = require('./config/db');
const { urlencoded } = require('express');

//* Load Config
dotEnv.config({path: "./config/config.env"});

//*DataBase connection
connectDB();

const app = express();

//*Logging
if(process.env.NODE_ENV === 'development'){
    app.use(morgan("dev"));
}

//* view Engine
app.use(expressLayout)
app.set('view engine', 'ejs');
app.set("layout" , "./layouts/mainLayouts")
app.set('views', 'views');

//* Bodyparser
app.use(express.urlencoded({extended: false}));

//* Session
app.use(session({
    secret: "secret",
    cookie: {maxAge: 60000},
    resave: false,
    saveUninitialized: false,
}));

//*Flash
app.use(flash()); //req.flash

//* Static Folders
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, process.env.BOOTSTRAP )));
// app.use(express.static(path.join(__dirname, process.env.FONTAWESOME)));

//* Routes
app.use("/",require('./routes/blog'));
app.use("/users",require('./routes/users'));
app.use("/dashboard" , require('./routes/dashboard')); //!filter by /dashboard address get to dashboardRoutes
app.use(require('./controllers/error').get404)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`sever running in ${process.env.NODE_ENV} mode on port ${PORT}`));