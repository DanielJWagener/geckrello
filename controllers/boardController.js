const mongoose = require("mongoose");
const Board = require("../models/Board");

const catchAsync = require("../utilities/catchAsync");

const User = mongoose.model("users");

exports.createBoard = catchAsync(async (req, res, next) => {
  const { title, background } = req.body;
  const newBoard = await Board.create({
    title,
    background,
    users: [req.user.id]
  });

  const boards = [newBoard.id, ...req.user.boards];

  await User.findByIdAndUpdate(req.user.id, { boards });

  res.status(201).json({
    status: "success",
    data: { data: newBoard }
  });
});
