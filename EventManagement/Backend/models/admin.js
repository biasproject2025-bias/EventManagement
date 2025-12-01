const mongoose = require("mongoose");
const adminDb = require("../config/adminDb");

const adminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  //   role: { type: String, default: "admin" }, // multiple admins support
});

const AdminModel = adminDb.model("Admin", adminSchema);
module.exports = AdminModel;
