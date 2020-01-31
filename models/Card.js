const mongoose = require("mongoose");
const { Schema } = mongoose;

const cardSchema = new Schema({
  title: String,
  description: String,
  checklist: [
    {
      checked: {
        type: Boolean,
        default: false
      },
      itemTitle: String
    }
  ],
  listHome: { type: mongoose.Schema.ObjectId, ref: "lists" }
});

const Card = mongoose.model("cards", cardSchema);

module.exports = Card;
