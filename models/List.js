const mongoose = require("mongoose");
const { Schema } = mongoose;

const listSchema = new Schema({
  title: String,
  boardHome: String,
  archived: {
    type: Boolean,
    default: false
  }
});

const List = mongoose.model("lists", listSchema);

module.exports = List;
