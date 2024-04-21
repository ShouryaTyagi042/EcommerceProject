import express, { Router } from "express";
import { allSellerDetails, createSeller, loginSeller } from "../controller/sellerController.js";
import { validate } from "../middleware/valid.js";
const router = express.Router();

router.post("/seller-signup",validate, createSeller);
router.post("/seller-login",loginSeller)
router.get('/all-seller',allSellerDetails)
export default router