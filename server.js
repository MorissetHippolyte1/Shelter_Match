const express = require("express");
const sequelize = require("./config/connection");
const path = require("path");

 const routes = require("./controllers/api");
const Dogs = require('./models/Dogs');
const Owner = require('./models/Owner');
const PotentialOwner = require('./models/PotentialOwner');
// const routes = require("./controllers/api/index");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')));
app.use(routes);

sequelize.sync({ force: true }).then(() =>{
    app.listen(PORT, () => {
        console.log(`It works ${PORT}`);
    });
});