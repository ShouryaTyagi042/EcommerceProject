import express from "express";
import {  allUserDetails, createUser, updateUser } from "../controller/userController.js";
import { loginUser } from "../controller/userController.js";
import { logoutUser } from "../controller/userController.js";
import { validate } from "../middleware/valid.js";
const router = express.Router();

router.post("/signup", validate, createUser); // signup
router.post("/login", loginUser) // login
router.post('/logout',logoutUser) // logout
router.get('/all-users',allUserDetails)
router.post('/update-user',updateUser)

export default router;