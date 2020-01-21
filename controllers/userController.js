const mongoose = require("mongoose");

const catchAsync = require("../utilities/catchAsync");

const User = mongoose.model("users");

exports.logout = (req, res) => {
  req.logout();
  res.redirect("/");
};

exports.getCurrentUser = (req, res) => {
  res.send(req.user);
};

exports.requireLogin = catchAsync(async (req, res, next) => {
  // If we already have a user on the request, great!
  if (req.user) {
    return next();
  }

  // Allow Postman authorization header in development, assume user is admin
  if (
    process.env.NODE_ENV === "development" &&
    req.headers["postman-token"] &&
    req.headers.authorization
  ) {
    const admin = await User.findOne({ role: "admin" });
    req.user = admin;
    return next();
  }

  // Else, no one is logged in. Send error
  res.status(401).send({ error: "You must be logged in!" });
});
