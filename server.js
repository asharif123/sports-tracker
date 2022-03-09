const express = require("express");
const session = require('express-session');

const path = require("path");
const cors = require("cors")

const app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
const routes = require("./controllers/api");
const sequelize = require("./config/connection");
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'Super secret secret',
      cookie: {
    // Stored in milliseconds (86400 === 1 day)
        maxAge: 864000000000,
  },

  //starndard settings
    resave: false,
    saveUninitialized: false,
  };

app.use(session(sess));
  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 app.use(express.static(path.join(__dirname, "./sports-tracker-client/public")));
 if(process.env.NODE_ENV === "production"){
     app.use(express.static(path.join(__dirname, "./sports-tracker-client/build")));
 };
// app.get("/test", (req, res) => {
//   res.status(200).json('test')
// })
app.use(routes);
app.get("*", (req,res)=> res.sendFile(path.join(__dirname, "./sports-tracker-client/public/index.html")));
sequelize.sync({ force: false }).then(() => {
   app.listen(PORT, () => console.log("Now listening"));
});