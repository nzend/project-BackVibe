const { Diary } = require('../../models');
const { Product } = require('../../models');

const addProducts = async (req, res) => {
  const { _id: owner } = req.user;
  const { date, productId, amount, calories } = req.body;
  const { blood } = req.user.bodyParameters;

  const product = await Product.findOne(
    { _id: productId },
    "-createdAt -updatedAt"
  );
  
  const isRecommend = (bloodGroup) => {
    return product.groupBloodNotAllowed && product.groupBloodNotAllowed[bloodGroup] === true;
  };
  const newProduct = {
    title: product.title,
    category: product.category,
    amount,
    calories,
    recommend: isRecommend(blood),
  };

  try {
    const result = await Diary.findOneAndUpdate(
      { owner, date }, 
      { $push: { products: newProduct }}, 
      { new: true } 
    );
    if (!result) {
      const newDiaryEntry = await Diary.create({ owner, date, products: [newProduct] });

      res.status(201).json(newDiaryEntry);
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(500)
  }
};

module.exports = addProducts;




