


const { Product } = require("../../models");

const getAllProducts = async (req, res) => {
 
  const { page = 1, limit = 20, recommended,  category, title } = req.query;

  if (Object.values(req.user.bodyParameters).includes(undefined)) {
    throw HttpError(203, "The user parameters are not specified, for further work, enter your data correctly.");
  }

  const {blood} = req.user.bodyParameters
  

  const skip = (page - 1) * limit;

  const filter = {};

  const isRecommend = (bloodGroup, product) => {
    return product.groupBloodNotAllowed && product.groupBloodNotAllowed[bloodGroup] === true;
  };

  if (recommended === "true") {
  
    const bloodField = `groupBloodNotAllowed.${blood}`;
    filter[bloodField] = true;
  }
  
  if(recommended === "false") {
    const bloodField = `groupBloodNotAllowed.${blood}`;
    filter[bloodField] = false;
  }

  if (category) {

    filter.category = category;
  }

  if (title) {

    const titleRegex = new RegExp(title, "i"); 
    filter.title = titleRegex;
  }

  const result = await Product.find(filter, "-createdAt -updatedAt")
    .skip(skip)
    .limit(limit);
 
    const updateResult = result.map((product) => {
      const newItem =  {
        id: product._id,
        weight: product.weight, 
        calories: product.calories, 
        category: product.category,
        title: product.title,
        recommended: isRecommend(blood, product),
        }
        return newItem ; 
    })


  res.json(updateResult);
};

module.exports = getAllProducts;




