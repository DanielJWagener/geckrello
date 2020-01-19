const mongoose = require("mongoose");
const Board = require("../models/Board");
const catchAsync = require("../utilities/catchAsync");

exports.createBoard = catchAsync(async (req, res, next) => {
  console.log(req.body);
  const newBoard = await Board.create(req.body);

  res.status(201).json({
    status: "success",
    data: { data: newBoard }
  });
});
