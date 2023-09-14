const { User } = require("../../models");
const { authSchema } = require("../../schemas")
const jwt = require("jsonwebtoken");
const { HttpError } = require("../../helpers");
const bcrypt = require("bcrypt");
const { SECRET_KEY } = process.env;

const login = async (req, res) => {
    const { error } = authSchema.loginSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }
    const { email, password } = req.body;
  
    const user = await User.findOne({ email });
    if (!user) {
      throw HttpError(401, "Email or password invalid");
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      throw HttpError(401, "Email or password invalid");
    }
  
    const payload = { id: user.id };
  
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });
    await User.findByIdAndUpdate(user._id, { token });
  
    res.status(201).json({
      token,
      user: {
        email: user.email,
      },
    });
  };

  module.exports = login;