const mongoose = require("mongoose");
const Card = require("../models/Card");

const catchAsync = require("../utilities/catchAsync");
const factory = require("./handlerFactory");

exports.getAllCards = factory.getAll(Card);
exports.getCard = factory.getOne(Card);
exports.createCard = factory.createOne(Card);
exports.updateCard = factory.updateOne(Card);

exports.deleteCard = catchAsync(async (req, res, next) => {});
