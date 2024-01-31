import express from 'express'
import "dotenv/config"
import {  createOrder } from "../controller/OrderController.js"

const router = express.Router()

router.post('/order', createOrder) 

export default router