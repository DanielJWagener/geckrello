const mongoose = require("mongoose");
const { Schema } = mongoose;

const boardSchema = new Schema({
  name: String,
  background: String
});

boardSchema.virtual("users", {
  ref: "users",
  foreignField: "boards",
  localField: "_id"
});

const Board = mongoose.model("boards", boardSchema);

module.exports = Board;
