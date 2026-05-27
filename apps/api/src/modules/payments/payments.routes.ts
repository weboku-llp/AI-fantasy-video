import { Router } from 'express';
export const paymentsRouter = Router();

paymentsRouter.post('/razorpay/webhook', (_req, res) => res.json({ success: true }));
