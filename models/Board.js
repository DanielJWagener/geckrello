const mongoose = require("mongoose");
const { Schema } = mongoose;

const boardSchema = new Schema({
  title: {
    type: String,
    default: "Board title"
  },
  background: {
    type: String,
    default: "blue"
  },
  users: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "users",
      required: [true, "A board must associated with a user"]
    }
  ]
});

// boardSchema.virtual("users", {
//   ref: "users",
//   foreignField: "boards",
//   localField: "_id"
// });

const Board = mongoose.model("boards", boardSchema);

module.exports = Board;
