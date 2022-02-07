const express = require("express");
const sequelize = require("./config/connection");
const exphbs = require('express-handlebars');
const path = require("path");


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