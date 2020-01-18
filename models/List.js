const mongoose = require("mongoose");
const { Schema } = mongoose;

const listSchema = new Schema({
  title: String,
  boardHome: { type: mongoose.Schema.ObjectId, ref: "boards" }
});

mongoose.model("lists", listSchema);
