const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { model } = require("mongoose");

// handle errors
const handleErrors = (err) => {
  let errors = { email: "", password: "" };

  // incorrect email
  if (err.message === "incorrect email") {
    errors.email = "That email is not registered";
  }

  // incorrect password
  if (err.message === "incorrect password") {
    errors.password = "That password is incorrect";
  }

  // duplicate email error
  if (err.code === 11000) {
    errors.email = "that email is already registered";
    return errors;
  }

  // validation errors
  if (err.message.includes("user validation failed")) {
    console.log(err);
    Object.values(err.errors).forEach(({ properties }) => {
      console.log(properties);
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

// create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });
};

// controller actions
module.exports.signup_get = (req, res) => {};

module.exports.login_get = (req, res) => {
  console.log("login-get");
  res.status(201).json({ user: res.locals.user._id });
};

module.exports.landing_get = (req, res) => {
  //res.render('landing');
  console.log("landing-get");
};

module.exports.signup_post = async (req, res) => {
  const { firstName, lastName, email, password, role } = req.body;

  try {
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      role,
    });
    const token = createToken(user._id);
    res.cookie("token", token, { httpOnly: false, maxAge: maxAge * 1000 });
    res.status(201).json({ user });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.login_post = async (req, res) => {
  console.log("login-post");

  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie("token", token, { httpOnly: false });
    res.status(200).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    console.log(errors);
    res.status(400).json({ errors });
  }
};

module.exports.logout_get = (req, res) => {
  res.cookie("token", "", { httpOnly: false, maxAge: 1 });
  res.redirect("/");
};

module.exports.loggedIn_get = (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json(false);

    jwt.verify(token, process.env.JWT_SECRET);

    res.send(true);
  } catch (err) {
    handleErrors(err);
    res.json(false);
  }
};

module.exports.getUser_get = (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json(false);

    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
      } else {
        let user = await User.findById(decodedToken.id);
        //res.locals.user = user.role;
        (user.password = undefined), res.send(user);
      }
    });
  } catch (err) {
    console.log(err);
  }
};
