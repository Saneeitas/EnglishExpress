const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  firstanme: String,
  lastname: String,
  username: String,
  password: String,
});

userSchema.plugin(passportLocalMongoose);

module.exports = new mongoose.model("User", userSchema);