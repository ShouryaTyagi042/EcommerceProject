import express, { Router } from "express";
import { createNewProduct } from "../controller/productController.js";
import { getProducts, getProductsById } from "../controller/productController.js";
const router = express.Router();


router.get("/products",getProducts);
router.post("/add-new-product", createNewProduct);
router.get("/product/:id", getProductsById);


export default router