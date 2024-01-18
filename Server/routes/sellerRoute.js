import express, { Router } from "express";
import { createSeller } from "../controller/sellerController.js";
const router = express.Router();

router.post("/seller-signup", createSeller);


export default router