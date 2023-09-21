

const { Product } = require("../../models");

const getAllProducts = async (req, res) => {
  console.log("REQ", req.query);
  const { page = 1, limit = 20, recommended,  category, title } = req.query;

  const {blood} = req.user.bodyParameters

  const skip = (page - 1) * limit;

  const filter = {};

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

  console.log(result.length);
  res.json(result);
};

module.exports = getAllProducts;




