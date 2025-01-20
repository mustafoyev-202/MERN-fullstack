import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";
import path from "path";
import mongoose from "mongoose";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

const __dirname = path.resolve();

app.use("/api/products", productRoutes);
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

// Start server and connect to database
const startServer = async () => {
  try {
    await connectDB(); // Ensure database connection before starting the server
    app.listen(PORT, () => {
      console.log("Server is running on port: " + PORT);
    });
  } catch (error) {
    console.error("Failed to connect to the database:", error.message);
    process.exit(1); // Exit with failure code
  }
};

startServer();
