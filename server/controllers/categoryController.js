const Category = require("../models/categoryModel");

createCategories = (categories, parentId = null) => {
  const categoryList = [];
  let category;

  if(parentId == null){
    category = categories.filter(cat => cat.parentId == undefined)
  }else{
    category = categories.filter(cat => cat.parentId == parentId)
  }
  for(let cate of category){
    categoryList.push({
      _id: cate._id,
      name: cate.name,
      children: createCategories(categories, cate._id)
      
    })
  }
  return categoryList;
}

module.exports.addCategory_post = async (req, res) => {
  const categoryObject  = {
    name : req.body.name
  }
  categoryObject.parentId = req.body.parentId;
  
  try {
    const category = await Category.create(categoryObject);
    res.status(201).json({ category });
    console.log("category Add Successfully ")

  }
  catch(err) {
    console.log("ERROR", err)
    //const errors = handleErrors(err);
    res.status(400).json({ err });
  }

}

module.exports.getCategories_get = (req, res) => {
  Category.find({})
  .exec((error, categories) => {
    if(error) return  res.status(400).json({ error });
    if(categories){
      const categoryList = createCategories(categories);
      res.status(200).json({ categoryList });
    }
  })
}
