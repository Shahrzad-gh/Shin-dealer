const Product = require("../models/categoryModel");

module.exports.addCategory_post = async (req, res) => {
  const { name, parentId } = req.body;
  try {
    const product = await Product.create({ name, parent_Id });
    res.status(201).json({ product: category._id });
    console.log("category Add Successfully ")

  }
  catch(err) {
    console.log("ERROR", err)
    //const errors = handleErrors(err);
    res.status(400).json({ err });
  }

}
