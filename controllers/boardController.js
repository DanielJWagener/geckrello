const mongoose = require("mongoose");
const Board = require("../models/Board");
const catchAsync = require("../utilities/catchAsync");

exports.createBoard = catchAsync(async (req, res, next) => {
  const { title, background } = req.body;
  const newBoard = await Board.create({ title, background, user: req.user.id });

  res.status(201).json({
    status: "success",
    data: { data: newBoard }
  });
});
