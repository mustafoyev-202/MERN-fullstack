import express from "express";
import mongoose from "mongoose";
import Product from "../models/product.model.js";
import {
  deleteProducts,
  getProducts,
  postProducts,
  putProducts,
} from "../controllers/product.controllers.js";

const router = express.Router();

// Route to create a product
router.post("/", postProducts);

// Route to fetch all products
router.get("/", getProducts);

// Route to update a product
router.put("/:id", putProducts);

// Route to delete a product
router.delete("/:id", deleteProducts);

export default router;
