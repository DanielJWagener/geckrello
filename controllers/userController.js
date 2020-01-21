const mongoose = require("mongoose");
const User = mongoose.model("users");

exports.logout = (req, res) => {
  req.logout();
  res.redirect("/");
};

exports.getCurrentUser = (req, res) => {
  res.send(req.user);
};

exports.requireLogin = async (req, res, next) => {
  //console.log(req.headers);
  console.log(req.headers["postman-token"]);
  console.log(process.env.NODE_ENV);
  if (req.user) {
    return next();
  }

  if (process.env.NODE_ENV === "development" && req.headers["postman-token"]) {
    const admin = await User.findOne({ role: "admin" });
    req.user = admin;
    return next();
  }

  res.status(401).send({ error: "You must be logged in!" });

  //next();
};
