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

userSchema.pre(/^find/, function(next) {
  this.populate({
    path: "boards"
    // select: 'name photo'
  });
  next();
});

mongoose.model("users", userSchema);
