import express from 'express'
import "dotenv/config"
import {  cancelOrder, createOrder } from "../controller/OrderController.js"

const router = express.Router()

router.post('/order', createOrder) 
router.post('/cancel-order',cancelOrder)
export default router