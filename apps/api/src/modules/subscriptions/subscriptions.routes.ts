import { Router } from 'express';
export const subscriptionsRouter = Router();

subscriptionsRouter.get('/me', (_req, res) => res.json({ success: true }));
subscriptionsRouter.post('/create', (_req, res) => res.json({ success: true, planName: 'Premium Monthly', amount: 499, currency: 'INR' }));
subscriptionsRouter.post('/cancel', (_req, res) => res.json({ success: true }));
