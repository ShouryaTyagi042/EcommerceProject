import express from "express";
import { createUser } from "../controller/userController.js";
import { createCart } from "../controller/cartController.js";
const router = express.Router();

router.post("/signup", createUser, createCart); // signup
//as cart should be created with each new signup

// router.post('/login', loginUser) // login
// router.post('/logout', auth, logoutUser) // logout

export default router;
