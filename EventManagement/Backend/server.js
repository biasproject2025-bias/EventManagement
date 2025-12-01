const express = require("express");
require("dotenv").config();

const connectDB = require("./config/db");
require("./config/adminDb"); // ✅✅✅ MOST IMPORTANT FIX

const cors = require("cors");

const app = express();

// ✅ FIXED CORS
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middlewares
app.use(express.json());

// Connect User DB
connectDB(); // ✅ User Database

// Test Route
app.get("/", (req, res) => {
  res.send("Server Connected Successfully 🚀");
});

// Auth Routes
const router = require("./routes/authRoutes.js");
app.use("/auth", router);

// Admin Routes (agar alag hai)
const adminRoutes = require("./routes/adminRoutes");
app.use("/admin", adminRoutes);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
