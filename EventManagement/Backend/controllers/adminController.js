const bcrypt = require("bcrypt");
const AdminModel = require("../models/admin");
const jwt = require("jsonwebtoken");

// ADMIN REGISTER
exports.adminRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const adminExist = await AdminModel.findOne({ email });
    if (adminExist) {
      return res.status(400).json({ error: "Admin already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await new AdminModel({
      name,
      email,
      password: hashedPassword,
    }).save();

    res.status(201).json({ message: "Admin Registered Successfully ✅" });
  } catch (err) {
    res.status(500).json({ error: "Admin Register Failed" });
  }
};

// ADMIN LOGIN
exports.adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await AdminModel.findOne({ email });
    if (!admin) {
      return res.status(404).json({ error: "Admin not found" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid Password" });
    }

    const token = jwt.sign(
      { id: admin._id, role: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.status(200).json({
      message: "Admin Login Successful ✅",
      token,
      name: admin.name,
      email: admin.email,
    });
  } catch (err) {
    res.status(500).json({ error: "Admin Login Failed" });
  }
};
