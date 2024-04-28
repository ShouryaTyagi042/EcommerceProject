import express, { Router } from "express";
import { allProductsDetails, createNewProduct, getProductByMail } from "../controller/productController.js";
import { getProducts, getProductsById } from "../controller/productController.js";

import Product from "../models/product.js";
const router = express.Router();


router.get("/products",getProducts);
router.post("/add-new-product", createNewProduct);
router.get("/product/:id", getProductsById);
router.get("/all-products",allProductsDetails);
router.get("/products/:sellerMail", getProductByMail)

router.get('/seller/:sellerId', async (req, res) => {
    try {
      const products = await Product.find({ sellerId: req.params.sellerId });
      res.json(products);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

export default router