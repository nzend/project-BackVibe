const jwt = require("jsonwebtoken");
const { HttpError } = require("../helpers/");
const { SECRET_KEY } = process.env;
const { User } = require("../models");

const authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  console.log(token);

  if (bearer !== "Bearer") {
    next(HttpError(401));
  }
  try {
    const { id } = jwt.verify(token, SECRET_KEY, {});
    console.log(id);

    const user = await User.findById(id);

    console.log("User", user);

    if (!user || !user.token || user.token !== token) {
      next(HttpError(401));
    }
    req.user = user;

    next();
  } catch {
    next(HttpError(401));
  }
};

module.exports = authenticate;
