const mongoose = require("mongoose");
const Card = require("../models/Card");

const catchAsync = require("../utilities/catchAsync");
const factory = require("./handlerFactory");

exports.getAllCards = catchAsync(async (req, res, next) => {});

exports.getCard = factory.getOne(Card);

exports.createCard = catchAsync(async (req, res, next) => {});

exports.updateCard = catchAsync(async (req, res, next) => {});

exports.deleteCard = catchAsync(async (req, res, next) => {});
