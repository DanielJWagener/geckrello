const mongoose = require("mongoose");
const { Schema } = mongoose;

const listSchema = new Schema({
  title: String,
  boardHome: { type: mongoose.Schema.ObjectId, ref: "boards" },
  archived: {
    type: Boolean,
    default: false
  }
});

const List = mongoose.model("lists", listSchema);

module.exports = List;
