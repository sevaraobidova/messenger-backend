import mongoose from "mongoose";

const passwordValidator = (value: string) => {
  const regex = /^(?=.*[A-Z])(?=.*\d).+$/;
  return regex.test(value);
};

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  number: { type: Number, required: true },
  password: {
    type: String,
    required: true,
    validate: [
      passwordValidator,
      "Password must contain at least one uppercase letter and one number",
    ],
  },
  username: { type: String, required: true, unique: true },
});

const userModel = mongoose.model("Messenger", userSchema);

module.exports = userModel;
