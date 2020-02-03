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
    { $set: { "checklist.$.checked": true } },
    { new: true }
  );

  res.status(200).json({
    status: "success",
    data: updatedCard
  });
});
