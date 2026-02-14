import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowerCase: true,
      validate: {
        validator: validator.isEmail,
        message: "Invalid email",
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    phone: Number,
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

export default User;
