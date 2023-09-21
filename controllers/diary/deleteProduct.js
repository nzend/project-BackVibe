const { Diary } = require('../../models');
const { HttpError } = require('../../helpers');

const deleteProduct = async (req, res) => {
  const { _id: owner } = req.user;
  const { date, productId } = req.query;

  if (!date || !productId) {
    throw HttpError(400, 'Please provide both date and productId');
  }

  const filter = { date, owner };
  
    const diaryEntry = await Diary.findOne(filter);

    if (!diaryEntry) {
      throw HttpError(404, 'Diary entry not found');
    }

    const product = diaryEntry.products.find(
      (product) => product._id.toString() === productId
    );

    if (!product) {
      throw HttpError(404, 'Product not found');
    }


    await Diary.findOneAndUpdate(
      filter,
      { $pull: { products: { _id: product._id } } },
      { new: true }
    );

    res.status(200).json({ message: 'Product deleted successfully' });
 
};

module.exports = deleteProduct;