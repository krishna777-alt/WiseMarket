import bcrypt from "bcryptjs";

import User from "../models/userModel.js";

// export const getData = function (req, res) {
//   try {
//     res.status(200).json({ message: "Successfull" });
//   } catch (err) {
//     console.log("error:", err.message);
//     res.status(500).json({ message: "Failed", error: err.message });
//   }
// };

export const signup = async function (req, res) {
  try {
    const { fullname, email, password, confirmPassword, phone } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ status: 400, message: "User already exists" });
    }
    if (confirmPassword != password) {
      return res
        .status(400)
        .json({ status: 400, message: "Password didnt match!" });
    }
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);
    if (!fullname || !email || !password) {
      return res
        .status(400)
        .json({ status: 400, message: "All fields required" });
    }

    if (password.length < 3) {
      return res.status(400).json({
        status: 400,
        message: "Password must be at least 8 characters",
      });
    }
    const user = await User.create({
      fullname,
      email,
      password: hashedPassword,
      phone,
    });
    user.password = undefined;
    res
      .status(201)
      .json({ status: 201, message: "Successfully Registerd", user });
  } catch (err) {
    res
      .status(500)
      .json({ status: 500, message: "Server error", ERROR: err.message });
    console.log("ERROR:", err.message);
  }
};
