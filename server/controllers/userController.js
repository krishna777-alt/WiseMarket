import bcrypt from "bcryptjs";

import User from "../models/userModel.js";
import generateTokens from "../utils/generateTokens.js";

export const login = async function (req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password required",
        status: 400,
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ status: 400, message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ status: 400, message: "Invalid credentials" });
    }

    const accessToken = generateTokens.generateAccessToken(user._id);
    const refreshToken = generateTokens.generateRefreshToken(user._id);

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 15 * 60 * 1000,
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      status: 200,
      message: "Login successfully",
      user: {
        id: user._id,
        name: user.fullname,
        email: user.email,
      },
    });
  } catch (err) {
    console.log("error:", err.message);
    res
      .status(500)
      .json({ status: 500, message: "Failed", error: err.message });
  }
};

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
