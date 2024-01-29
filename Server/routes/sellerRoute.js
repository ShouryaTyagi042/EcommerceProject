import express, { Router } from "express";
import { createSeller, loginSeller } from "../controller/sellerController.js";
const router = express.Router();

router.post("/seller-signup", createSeller);
router.post("/seller-login",loginSeller)

export default router