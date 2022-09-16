require('dotenv').config();
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;////////Level 6 Security////////////////

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.route("/")

// HOME ROUTE
.get((req,res) => {
  res.render("home");
});


app.listen(process.env.PORT || 3000, ()=>{
  console.log("Server Started on port 3000");
});
