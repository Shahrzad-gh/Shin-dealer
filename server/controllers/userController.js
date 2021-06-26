const User = require("../models/userModel");

module.exports.getUserById_get =  (req, res) => {
  User.findOne({ _id : req.query.id }).
  exec((error, user) => {
    if(error) return res.status(400).json({ error });
    if(user) {
      res.status(200).json({ user });
    }
  })
}

module.exports.getAllUsers_get =  (req, res) => {
  User.find({}).
  exec((error, users) => {
    if(error) return res.status(400).json({ error });
    if(users) {
      res.status(200).json({ users });
    }
  })
}
