const currentUser = async (req, res) => {
  const {
    bodyParameters,
    avatarURL,
    name,
    email,
    token,
    dailyTime,
    dailyСalories,
  } = req.user;

  res.status(200).json({
    bodyParameters,
    avatarURL,
    name,
    email,
    token,
    dailyTime,
    dailyСalories,
  });
};

module.exports = currentUser;
