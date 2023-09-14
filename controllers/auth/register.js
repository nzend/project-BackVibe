const bcrypt = require("bcrypt");
const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const { authSchema } = require("../../schemas")


const register = async (req, res) => {
    const { error } = authSchema.registerSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      throw HttpError(409, "Email already in use");
    }
  
    const hashPassword = await bcrypt.hash(password, 10);
   
    const newUser = await User.create({
      ...req.body,
      password: hashPassword,
    });

  
    res.status(201).json({
      email: newUser.email,
    });
  };

  module.exports = register;