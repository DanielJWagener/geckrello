const mongoose = require("mongoose");
const List = require("../models/List");

const catchAsync = require("../utilities/catchAsync");
const factory = require("./handlerFactory");

exports.getAllLists = factory.getAll(List);
exports.getList = factory.getOne(List);
exports.createList = factory.createOne(List);

exports.updateList = catchAsync(async (req, res, next) => {});

exports.deleteList = catchAsync(async (req, res, next) => {});
