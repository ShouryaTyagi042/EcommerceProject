import express from 'express';
import { addPaymentGateway } from '../controller/paymentController.js';

const router = express.Router();

router.post('/payment', addPaymentGateway);