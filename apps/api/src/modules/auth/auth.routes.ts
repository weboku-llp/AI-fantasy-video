import { Router } from 'express';
export const authRouter = Router();

authRouter.post('/register', (_req, res) => res.json({ success: true }));
authRouter.post('/login', (_req, res) => res.json({ success: true }));
authRouter.post('/logout', (_req, res) => res.json({ success: true }));
authRouter.get('/me', (_req, res) => res.json({ success: true }));
