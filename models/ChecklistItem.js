const mongoose = require("mongoose");
const { Schema } = mongoose;

const checklistItemSchema = new Schema({
  label: String,
  checked: { type: Boolean, default: false }
});

module.exports = checklistItemSchema;
