const mongoose = require("mongoose");
const Board = require("../models/Board");
const catchAsync = require("../utilities/catchAsync");
const userController = require("./userController");

exports.createBoard = catchAsync(async (req, res, next) => {
  let userID;
  // For Postman -- temporary hack
  if (!req.user) {
    userID = "5e2381ce8541f535dbe53776"; // admin user ID
  } else {
    userID = req.user.id;
  }

  const { title, background } = req.body;
  const newBoard = await Board.create({ title, background, user: userID });

  res.status(201).json({
    status: "success",
    data: { data: newBoard }
  });
});
