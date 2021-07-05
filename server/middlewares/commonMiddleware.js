const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const requireAuth = (req, res, next) => {
  const token = req.cookies.token;

  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        //res.redirect('/signin');
        console.log('signin please')
      } else {
        next();
      }
    });
  } else {
    console.log('signin please')
    //res.redirect('/signin');
  }
};

// check current user
const checkUser = (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        let user = await User.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

const adminMiddleware = (req, res, next) => {
  //console.log(res.locals.user.role)
  if (res.locals.user.role !== "admin") {
      return res.status(400).json({ message: "Admin access denied" });
    }
  next();
};

module.exports = { requireAuth, checkUser, adminMiddleware };