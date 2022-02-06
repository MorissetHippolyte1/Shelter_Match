const express = require("express");
const sequelize = require("./config/connection");
// const exphbs = require('express-handlebars');
const path = require("path");
<<<<<<< HEAD
const routes = require("./controllers/api/");
=======

 const routes = require("./controllers/api");
const Dogs = require('./models/Dogs');
const Owner = require('./models/Owner');
const PotentialOwner = require('./models/PotentialOwner');
// const routes = require("./controllers/api/index");
>>>>>>> 7d4e63df288e657abc1c9e6953fab3d2fb7c2457


const app = express();
const PORT = process.env.PORT || 3001;
<<<<<<< HEAD
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));

=======

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')));
>>>>>>> 7d4e63df288e657abc1c9e6953fab3d2fb7c2457
app.use(routes);
// const hbs = exphbs.create({});

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

sequelize.sync({ force: true }).then(() =>{
    app.listen(PORT, () => {
        console.log(`It works ${PORT}`);
    });
});