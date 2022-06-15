const path = require('path');

const express = require('express');
const dotEnv = require('dotenv');

const indexRoutes = require('./routes/index');

//* Load Config
dotEnv.config({path: "./config/config.env"});

const app = express();

//* view Engine
app.set('view engine', 'ejs');
app.set('views', 'views');

//* Static Folders
app.use(express.static(path.join(__dirname, 'public')));

//* Routes
app.use(indexRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`sever running in ${process.env.NODE_ENV} mode on port ${PORT}`));