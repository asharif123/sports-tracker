const express = require("express");
const path = require("path");

const app = express();

const routes = require("./controllers");
const sequelize = require("./config/connection");
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'Super secret secret',
  //starndard settings
    resave: false,
    saveUninitialized: false,
  };

  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});