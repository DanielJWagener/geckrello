const mongoose = require("mongoose");
const { Schema } = mongoose;

const boardSchema = new Schema({
  title: {
    type: String,
    default: "Board title"
  },
  background: {
    type: String,
    default: "#66A3FF"
  },
  user: String
});

// boardSchema.virtual("users", {
//   ref: "users",
//   foreignField: "boards",
//   localField: "_id"
// });

const Board = mongoose.model("boards", boardSchema);

module.exports = Board;
