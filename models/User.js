const { Schema, model } = require("mongoose");
// const isEmail = require("validator");
const UserSchema = new Schema({
  username: {
    type: String,
    require: true,
    trim: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  //   add validator
  email: {
    type: String,
    require: true,
    trim: true,
    unique: true,
    // validate: [isEmail, "Invalid email input, Try again"],
  },
  password: {
    type: String,
    require: true,
    trim: true,
  },
});

const User = model("User", UserSchema);
module.export = User;
