import { Router } from 'express';

export const profilesRouter = Router();
export const adminProfilesRouter = Router();

profilesRouter.get('/', (_req, res) => res.json({ success: true }));
profilesRouter.get('/:slug', (_req, res) => res.json({ success: true }));
profilesRouter.get('/:profileId/videos', (_req, res) => res.json({ success: true }));

adminProfilesRouter.post('/', (_req, res) => res.json({ success: true }));
adminProfilesRouter.patch('/:id', (_req, res) => res.json({ success: true }));
adminProfilesRouter.delete('/:id', (_req, res) => res.json({ success: true }));
