const mongoose = require("mongoose");

const catchAsync = require("../utilities/catchAsync");

const User = mongoose.model("users");

// SELF
exports.logout = (req, res) => {
  req.logout();
  res.redirect("/");
};

exports.getCurrentUser = (req, res) => {
  res.send(req.user);
};

exports.deleteCurrentUser = (req, res) => {};

exports.updateCurrentUser = (req, res) => {};

// ADMIN ONLY
exports.getAllUsers = (req, res) => {};

exports.getUser = (req, res) => {};

exports.createUser = (req, res) => {};

exports.updateUser = (req, res) => {};

exports.deleteUser = (req, res) => {};
