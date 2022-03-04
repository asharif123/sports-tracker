const express = require("express");
const path = require("path");
const cors = require("cors")

const app = express();
app.use(cors);
const routes = require("./controllers/api");
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
app.use(express.static(path.join(__dirname, "./sports-tracker-client/public")));
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "./sports-tracker-client/build")));
};
app.use(routes);
app.get("*", (req,res)=> res.sendFile(path.join(__dirname, "./sports-tracker-client/public/index.html")));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});