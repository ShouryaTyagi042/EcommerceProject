import express from "express";
import { createUser } from "../controller/userController.js";
import { loginUser } from "../controller/userController.js";
import { logoutUser } from "../controller/userController.js";
import { validate } from "../middleware/valid.js";
const router = express.Router();

router.post("/signup", validate, createUser); // signup
router.post("/login", loginUser) // login
router.post('/logout',logoutUser) // logout

export default router;