const mongoose = require("mongoose");
const Board = require("../models/Board");

const catchAsync = require("../utilities/catchAsync");

const User = mongoose.model("users");

exports.getAllBoards = catchAsync(async (req, res, next) => {
  const boards = await Board.find();

  res.status(200).json({
    status: "success",
    data: boards
  });
});

exports.getBoard = catchAsync(async (req, res, next) => {
  let query = Board.findById(req.params.id);

  const board = await query;

  res.status(200).json({
    status: "success",
    data: board
  });
});

exports.createBoard = catchAsync(async (req, res, next) => {
  // Create new board and add current user to it
  const { title, background } = req.body;
  const newBoard = await Board.create({
    title,
    background,
    users: [req.user.id]
  });

  // Add board to current user (two-way referencing)
  const boards = [newBoard.id, ...req.user.boards];
  await User.findByIdAndUpdate(req.user.id, { boards });

  // Send success response
  res.status(201).json({
    status: "success",
    data: newBoard
  });
});

exports.updateBoard = catchAsync(async (req, res, next) => {
  const board = await Board.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });

  res.status(200).json({
    status: "success",
    data: board
  });
});

exports.deleteBoard = catchAsync(async (req, res, next) => {
  // Delete board
  const deletedBoard = await Board.findByIdAndDelete(req.params.id);

  // Find users who belonged to that board
  const usersPromises = deletedBoard.users.map(
    async userId => await User.findById(userId)
  );
  const users = await Promise.all(usersPromises);

  // Remove this board from each user
  // NOTE: Mongoose ObjectIDs are not strings, so strict inequality will not work here
  users.forEach(user => {
    user.boards = user.boards.filter(boardId => boardId != deletedBoard.id);
  });

  // Update new user data into database
  const usersUpdatePromises = users.map(
    async ({ id, boards }) => await User.findByIdAndUpdate(id, { boards })
  );
  await Promise.all(usersUpdatePromises);

  // Send success response
  res.status(204).json({
    status: "success",
    data: null
  });
});
