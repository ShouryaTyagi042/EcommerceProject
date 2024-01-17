import express from "express";
import { createUser } from "../controller/userController.js";
const router = express.Router();

router.post("/signup", createUser); // signup
// router.post('/login', loginUser) // login
// router.post('/logout', auth, logoutUser) // logout

export default router;
