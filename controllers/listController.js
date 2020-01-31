const mongoose = require("mongoose");
const List = require("../models/List");

const catchAsync = require("../utilities/catchAsync");
const factory = require("./handlerFactory");

exports.getAllLists = catchAsync(async (req, res, next) => {
  const lists = await List.find();

  res.status(200).json({
    status: "success",
    data: lists
  });
});

exports.getList = factory.getOne(List);
exports.createList = factory.createOne(List);

exports.updateList = catchAsync(async (req, res, next) => {});

exports.deleteList = catchAsync(async (req, res, next) => {});
