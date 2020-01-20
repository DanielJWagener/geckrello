const mongoose = require("mongoose");
const Board = require("../models/Board");
const catchAsync = require("../utilities/catchAsync");
const postmanAuth = require("../utilities/postmanAuth");

exports.createBoard = catchAsync(async (req, res, next) => {
  const userID = postmanAuth(req);

  const { title, background } = req.body;
  const newBoard = await Board.create({ title, background, user: userID });

  res.status(201).json({
    status: "success",
    data: { data: newBoard }
  });
});
