const update = async (req, res) => {
  const body = req.body;
  console.log('body');
  const now = new Date(new Date() - 568036800000);
  console.log(now);
  res.json(body);
}

module.exports = update