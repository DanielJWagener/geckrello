const mongoose = require("mongoose");
const Card = require("../models/Card");

const catchAsync = require("../utilities/catchAsync");
const factory = require("./handlerFactory");

exports.getAllCards = factory.getAll(Card);
exports.getCard = factory.getOne(Card);
exports.createCard = factory.createOne(Card);
exports.updateCard = factory.updateOne(Card);
exports.deleteCard = factory.deleteOne(Card);

exports.updateChecklistItem = catchAsync(async (req, res, next) => {
  const updatedCard = await Card.findOneAndUpdate(
    {
      _id: req.params.cardId,
      checklist: { $elemMatch: { _id: req.params.itemId } }
    },
    req.body,
    { new: true }
  );

  res.status(200).json({
    status: "success",
    data: updatedCard
  });
});

// Sneaky update function, just takes advantage of the DELETE method to delineate itself from the updateChecklistItem handler
exports.deleteChecklistItem = catchAsync(async (req, res, next) => {
  const updatedCard = await Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { checklist: { _id: req.params.itemId } } },
    { new: true }
  );

  res.status(200).json({
    status: "success",
    data: updatedCard
  });
});
