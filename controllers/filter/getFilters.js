const { Filter } = require('../../models');

const getFilters = async (req, res) => {
  console.log("REQ", req.query);
  
  const result = await Filter.find({...req.query}, "-createdAt -updatedAt");
   console.log("RES LENGTH",result.length);

  res.json(result);
};

module.exports = getFilters;



