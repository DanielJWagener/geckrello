const mongoose = require("mongoose");
const Card = require("../models/Card");

const catchAsync = require("../utilities/catchAsync");
const factory = require("./handlerFactory");

exports.getAllCards = catchAsync(async (req, res, next) => {
  const cards = await Card.find();

  res.status(200).json({
    status: "success",
    data: cards
  });
});

exports.getCard = factory.getOne(Card);

exports.createCard = factory.createOne(Card);

exports.updateCard = catchAsync(async (req, res, next) => {});

exports.deleteCard = catchAsync(async (req, res, next) => {});
