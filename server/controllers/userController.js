import User from "../models/userModel";

export const signup = async function (req, res) {
  try {
    const { fullname, email, password, confirmPassword, phone } = req.body;

    if (password != confirmPassword) {
      return res
        .status(401)
        .json({ status: 401, message: "Password  not mathched!" });
    }

    const user = await User.create({
      fullname,
      email,
      password,
      phone,
    });
    res
      .status(201)
      .json({ status: 201, message: "Successfully Registerd", user });
  } catch (err) {
    res.status(501).json({ status: 501, message: err.message });
  }
};
