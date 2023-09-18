const { Diary } = require('../../models');
const { HttpError } = require("../../helpers");

const deleteProduct = async (req, res) => {
    const { _id: owner } = req.user;
    const { date, productId } = req.body; 

  
      const result = await Diary.findOneAndUpdate(
        { owner, date },
        { $pull: { products: { _id: productId } } }, 
        { new: true }
      );
  
      if (!result) {
        throw HttpError(404, "Not Found");
      }
  
      res.status(200).json({
        message: "Product deleted successfully",
      });
   
};

module.exports = deleteProduct;

