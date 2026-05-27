import { Router } from 'express';

export const videosRouter = Router();
export const adminVideosRouter = Router();

videosRouter.get('/feed', (_req, res) => res.json({ success: true }));
videosRouter.get('/:id', (_req, res) => res.json({ success: true }));

adminVideosRouter.post('/', (_req, res) => res.json({ success: true }));
adminVideosRouter.post('/upload-url', (_req, res) => res.json({ success: true }));
adminVideosRouter.patch('/:id', (_req, res) => res.json({ success: true }));
adminVideosRouter.delete('/:id', (_req, res) => res.json({ success: true }));
