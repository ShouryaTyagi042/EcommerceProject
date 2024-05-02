import express from "express";
import {  ProfileDisplay, allUserDetails, createUser, loginUser, updateUser } from "../controller/userController.js";
import { logoutUser } from "../controller/userController.js";
import { validate } from "../middleware/valid.js";
const router = express.Router();


// Middleware to check if the user is authenticated
// const isAuthenticated = (req, res, next) => {
//     if (req.session.user) {
//       next();
//     } else {
//       res.status(401).json({ message: 'Unauthorized' });
//     }
//   };
router.post("/signup", validate, createUser); // signup
router.post("/login", loginUser) // login
router.post('/logout',logoutUser) // logout
router.get('/all-users',allUserDetails)
router.post('/update-user',updateUser)
router.get('/name-display',ProfileDisplay)

export default router;