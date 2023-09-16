

const { Product } = require("../../models");

const getAllProducts = async (req, res) => {
  console.log("REQ", req.query);
  const { page = 1, limit = 10, blood, category, title } = req.query;
  const skip = (page - 1) * limit;

 
  const validBloodValues = ["1", "2", "3", "4"];
  const isBloodValid = validBloodValues.includes(blood);

  const filter = {};

  if (isBloodValid) {
  
    const bloodField = `groupBloodNotAllowed.${blood}`;
    filter[bloodField] = true;
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