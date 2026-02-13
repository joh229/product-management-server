require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

// ROUTES
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();


// ================================
// Connect MongoDB
// ================================
connectDB();


// ================================
// Middlewares
// ================================
app.use(cors());
app.use(express.json());


// ================================
// Health Check
// ================================
app.get("/ping", (req, res) => {
  res.send("SERVER OK");
});


// ================================
// Routes
// ================================
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);


// ================================
// 404 Handler
// ================================
app.use((req, res) => {
  res.status(404).json({ message: "Route Not Found" });
});


// ================================
// Global Error Handler
// ================================
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Server Error" });
});


// ================================
// Start Server
// ================================
const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});