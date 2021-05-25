const Category = require("../models/categoryModel");

module.exports.addCategory_post = async (req, res) => {
  const { name } = req.body;
  //console.log(req.body.parentId)
  try {
    const category = await Category.create({ name });
    res.status(201).json({ category: category._id });
    console.log("category Add Successfully ")

  }
  catch(err) {
    console.log("ERROR", err)
    //const errors = handleErrors(err);
    res.status(400).json({ err });
  }

}
