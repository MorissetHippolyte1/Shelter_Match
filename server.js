const express = require("express");
const sequelize = require("./config/connection");
// const exphbs = require('express-handlebars');
const path = require("path");

const passport = require('passport');


 const routes = require("./controllers/api");
const Dogs = require('./models/Dogs');
const Owner = require('./models/Owner');
const PotentialOwner = require('./models/PotentialOwner');
const auth = require('./models/auth');
// const routes = require("./controllers/api/index");







const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.static("public"));





app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));

app.use(require("./controllers/api/StoryRoutes"));

const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

sequelize.sync({ force: false }).then(() =>{
    app.listen(PORT, () => {
        console.log(`It works ${PORT}`);
    });
});