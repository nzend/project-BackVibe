const { User } = require("../../models");
const jwt = require("jsonwebtoken");
const { HttpError } = require("../../helpers");
const bcrypt = require("bcrypt");
const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(401, "Email or password invalid");
  }

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw HttpError(401, "Email or password invalid");
  }

  const payload = { id: user._id };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });
  const userData = await User.findByIdAndUpdate(
    user._id,
    { token },
    {
      new: true,
      select: "-_id -createdAt -updatedAt -password -verify -verificationToken",
    }
  );

  res.json(userData);
};

module.exports = login;
