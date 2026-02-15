import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

async function protect(req, res, next) {
  try {
    const token = req.cookies.accessToken;
    if (!token) {
      return res.status(401).json({ message: "Not authenticated" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    req.user = user;
    // console.log("User:", req.user);

    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token" });
    console.log("ERROR:", error.message);
  }
}

export default protect;
