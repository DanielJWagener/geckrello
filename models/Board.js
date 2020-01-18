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

mongoose.model("boards", boardSchema);
