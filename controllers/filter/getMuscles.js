const { Filter } = require('../../models');

const getMuscles = async (req, res) => {
  console.log("REQ", req.query);
  


  // const result = await Filter.find({ filter: 'Muscles' });
  
  const result = await Filter.find({...req.query}, "-createdAt -updatedAt");
   

  res.json(result);
};

module.exports = getMuscles;

const { Product } = require("../../models");

const getAllProducts = async (req, res) => {
  



 

  


  const result = await Product.find(filter, "-createdAt -updatedAt")
    .skip(skip)
    .limit(limit);

  console.log(result.length);
  res.json(result);
};

module.exports = getAllProducts;