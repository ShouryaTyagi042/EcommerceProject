// As the cart needs to be created with each new user
// we'll just initiate it from the userRoute
import express from "express";
import { addToCart } from "../controller/cartController.js";
const router = express.Router();

router.post("/add-to-cart", addToCart);

export default router;