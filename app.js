const path = require('path');

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const dotEnv = require('dotenv');
const morgan = require('morgan');

const connectDB = require('./config/db');
const blogRoutes = require('./routes/blog');
const dashboardRoutes = require('./routes/dashboard');


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


//* Static Folders
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, process.env.BOOTSTRAP )));
// app.use(express.static(path.join(__dirname, process.env.FONTAWESOME)));

//* Routes
app.use(blogRoutes);
app.use("/dashboard" , dashboardRoutes); //!filter by /dashboard address get to dashboardRoutes

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`sever running in ${process.env.NODE_ENV} mode on port ${PORT}`));