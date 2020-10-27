const mongoose = require('mongoose');
const { Schema } = mongoose;

const listSchema = new Schema({
  title: String,
  boardHome: String,
  archived: {
    type: Boolean,
    default: false
  },
  cards: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'cards'
    }
  ]
});

const List = mongoose.model('lists', listSchema);

module.exports = List;
