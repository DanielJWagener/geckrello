const catchAsync = require("../utilities/catchAsync");
const APIFeatures = require("./../utilities/apiFeatures");

exports.getAll = Model =>
  catchAsync(async (req, res, next) => {
    // Allow for nest GET reviews on tour (hack)
    // let filter = {};
    // if (req.params.tourId) filter = { tour: req.params.tourId };

    // EXECUTE QUERY
    const features = new APIFeatures(Model.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const docs = await features.query;

    // SEND QUERY
    res.status(200).json({
      status: "success",
      results: docs.length,
      data: docs
    });
  });

exports.getOne = Model =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);

    const doc = await query;

    res.status(200).json({
      status: "success",
      data: doc
    });
  });

exports.createOne = Model =>
  catchAsync(async (req, res, next) => {
    const newDoc = await Model.create(req.body);

    res.status(200).json({
      status: "success",
      data: newDoc
    });
  });

exports.updateOne = Model =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    res.status(200).json({
      status: "success",
      data: doc
    });
  });

exports.deleteOne = Model =>
  catchAsync(async (req, res) => {
    await Model.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      data: null
    });
  });
