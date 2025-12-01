const mongoose = require("mongoose");

const adminDb = mongoose.createConnection(process.env.ADMIN_DB_URL);

adminDb.on("connected", () => {
  console.log("✅ Admin Database Connected Successfully");
});

adminDb.on("error", (err) => {
  console.log("❌ Admin DB Error:", err.message);
});

module.exports = adminDb;
