const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  email: String,
  fullName: String,
  givenName: String,
  familyName: String,
  boards: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "boards"
    }
  ],
  role: {
    type: String,
    default: "user"
  }
});

mongoose.model("users", userSchema);
