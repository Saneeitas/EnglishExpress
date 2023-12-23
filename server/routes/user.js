const router = require('express').Router();
const passport = require("passport");
const User = require("../models/User");

// User registration
router.post('/signup', (req, res) => {
  User.register({ username: req.body.username }, req.body.password, (err, user) => {
    if (err) {
      console.log(err)
      return res.status(400).json({ error: "Registration failed" });
    } else { 
      passport.authenticate("local")(req, res, () => {
        res.status(201).json({ success: "Signup successfully" });
      });
    }
  });
});

// User login
router.post('/login', (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });
  req.login(user, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Login failed" });
    } else {
      passport.authenticate("local")(req, res, () => {
        res.status(200).json({ success: "Login successfully" });
      });
    }
  });
});

// User logout
router.get('/logout', (req, res) => {
  req.logout(err => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Logout failed" });
    }
    res.status(200).json({ succes: "Logout Succefully" });
  });
});

// Protect the /user route with Passport authentication middleware
router.get('/user', (req, res) => {
  if (req.isAuthenticated()) {
    // User is authenticated, and req.user should be available
    res.send(req.user);
  } else {
    res.send('Not authenticated');
  }
});

module.exports = router;
