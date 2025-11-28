const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Import Routes

const router = require("./routes/authRoutes.js");

// Middlewares
app.use(cors());
// app.use(bodyParser.json());
app.use(express.json());

// Connect DB
connectDB();

// Test Route
app.get("/", (req, res) => {
  res.send("Server Connected Successfully 🚀");
});

// Auth Routes
app.use("/auth", router);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
