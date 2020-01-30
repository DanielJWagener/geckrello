const catchAsync = require("../utilities/catchAsync");

exports.getOne = Model =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);

    const doc = await query;

    res.status(200).json({
      status: "success",
      data: doc
    });
  });
