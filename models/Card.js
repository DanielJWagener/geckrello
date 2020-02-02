const mongoose = require("mongoose");
const { Schema } = mongoose;
const ChecklistItemSchema = require("./ChecklistItem");

const cardSchema = new Schema({
  title: String,
  description: {
    type: String,
    default: ""
  },
  checklist: [ChecklistItemSchema],
  listHome: String,
  boardHome: String,
  archived: {
    type: Boolean,
    default: false
  }
});

const Card = mongoose.model("cards", cardSchema);

module.exports = Card;
