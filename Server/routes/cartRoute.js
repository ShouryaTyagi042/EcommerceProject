// As the cart needs to be created with each new user
// we'll just initiate it from the userRoute
import express from "express";
import { addToCart } from "../controller/cartController.js";
import { deleteItem } from "../controller/cartController.js";
import { emptyCart } from "../controller/cartController.js";
import { getItems } from "../controller/cartController.js";
const router = express.Router();

router.post("/add-to-cart/:mail/:id", addToCart);
router.get("/get-item/:mail", getItems);
router.post("/delete-item", deleteItem);
router.post("/empty-cart", emptyCart);

export default router;