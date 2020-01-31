const mongoose = require("mongoose");

const catchAsync = require("../utilities/catchAsync");
const factory = require("./handlerFactory");

const User = mongoose.model("users");

// SELF
exports.logout = (req, res) => {
  req.logout();
  res.redirect("/");
};

exports.getCurrentUser = (req, res) => {
  res.send(req.user);
};

exports.deleteCurrentUser = catchAsync(async (req, res) => {
  console.log(req.user);
  await User.findByIdAndDelete(req.user._id);

  req.method = "GET";

  res.status(204).json({
    status: "success",
    data: null
  });

  // todo: redirect user after deletion
});

exports.updateCurrentUser = catchAsync(async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.user.id, req.body, {
    new: true
  });

  res.status(200).json({
    status: "success",
    data: {
      user: updatedUser
    }
  });
});

// ADMIN ONLY
exports.getAllUsers = factory.getAll(User);
exports.getUser = factory.getOne(User);
exports.createUser = factory.createOne(User);
exports.updateUser = factory.updateOne(User);

exports.deleteUser = catchAsync(async (req, res) => {
  await User.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: "success",
    data: null
  });
});
