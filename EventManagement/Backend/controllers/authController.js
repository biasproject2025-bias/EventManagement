const bcrypt = require("bcrypt");
const userModel = require("../models/user.js");
const jwt = require("jsonwebtoken");
// REGISTER
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await new userModel({
      name,
      email,
      password: hashedPassword,
    }).save();

    res.status(201).json({ message: "Registration successful", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went s wrong", success: false });
  }
};

// LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid password" });
    }
    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "24h",
      }
    );
    console.log("TOKEN:", token);

    res.status(200).json({
      token,
      email: user.email,
      name: user.name,
      message: "Login successful",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};
