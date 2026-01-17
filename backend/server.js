require("dotenv").config();
const app = require("./src/app");
const { sequelize, connectDB } = require("./src/config/db");

// Connect to DB
connectDB();

// 🔥 THIS LINE CREATES TABLES
sequelize.sync({ alter: true })
  .then(() => console.log("Database synced"))
  .catch(err => console.error("Sync error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
