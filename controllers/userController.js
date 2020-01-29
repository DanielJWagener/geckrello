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
exports.getAllUsers = catchAsync(async (req, res) => {
  const users = await User.find();

  res.status(200).json({
    status: "success",
    data: {
      data: users
    }
  });
});

exports.getUser = catchAsync(async (req, res) => {
  const user = await User.findById(req.params.id);

  res.status(200).json({
    status: "success",
    data: {
      data: user
    }
  });
});

exports.createUser = catchAsync(async (req, res) => {
  const user = await User.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      data: user
    }
  });
});

exports.updateUser = catchAsync(async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });

  res.status(200).json({
    status: "success",
    data: {
      data: user
    }
  });
});

exports.deleteUser = catchAsync(async (req, res) => {
  await User.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: "success",
    data: null
  });
});
