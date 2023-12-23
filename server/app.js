/** @format */
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const session = require("express-session");
const mongoose = require("mongoose");
const passport = require("passport");
const User = require("./models/User");
const userRoutes = require("./routes/user");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(
  cors({
    origin: "http://192.168.206.23:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "my little secret.",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

const methodOverride = require("method-override");
app.use(methodOverride("_method"));

mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://localhost:27017/shopDB")
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });

passport.use(User.createStrategy());
passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

//Routes
app.use("/api", shopRoutes);
app.use("/api", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
