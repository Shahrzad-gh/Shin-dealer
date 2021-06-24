const User = require("../models/UserModel");

module.exports.getUserById_get = async (req, res) => {
  console.log("id",req)
  User.findOne({ _id : req.query.id }).
  exec((error, user) => {
    if(error) return res.status(400).json({ error });
    if(user) {
      console.log(user)
      res.status(200).json({ user });
    }
  })
}

module.exports.getAllUsers_get = async (req, res) => {
  Product.find({}).
  exec((error, users) => {
    if(error) return res.status(400).json({ error });
    if(users) {
      res.status(200).json({ users });
    }
  })
}
