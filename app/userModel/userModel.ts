import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  number: { type: Number, required: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
});

const userModel = mongoose.model("Messenger", userSchema);

module.exports = userModel;
