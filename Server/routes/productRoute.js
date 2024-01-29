import express, { Router } from "express";
import { createNewProduct } from "../controller/productController.js";
const router = express.Router();

router.post("/add-new-product", createNewProduct);


export default router