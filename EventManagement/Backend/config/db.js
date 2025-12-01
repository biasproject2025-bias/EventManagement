const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log("student Database Connected Successfully 🚀");
  } catch (error) {
    console.error("student Connection Failed ❌");
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
