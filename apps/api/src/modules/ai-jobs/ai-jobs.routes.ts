import { Router } from 'express';
export const aiJobsRouter = Router();

aiJobsRouter.get('/', (_req, res) => res.json({ success: true }));
aiJobsRouter.post('/', (_req, res) => res.json({ success: true }));
aiJobsRouter.get('/:id', (_req, res) => res.json({ success: true }));
aiJobsRouter.patch('/:id/cancel', (_req, res) => res.json({ success: true }));
