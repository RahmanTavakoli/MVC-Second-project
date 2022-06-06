const path = require('path');

const express = require('express');

const indexRoutes = require('./routes/index');

const app = express();
const PORT = 3000;

//* viwe Engine
app.set('view engine', 'ejs');
app.set('views', 'views');

//* Static Folders
app.use(express.static(path.join(__dirname, 'public')));

//* Routes
app.use(indexRoutes);

app.listen(PORT, () => console.log("sever running on port 3000"));