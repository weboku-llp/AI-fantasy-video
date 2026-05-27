import express from 'express';
import cors from 'cors';
import { authRouter } from './modules/auth/auth.routes';
import { profilesRouter, adminProfilesRouter } from './modules/profiles/profiles.routes';
import { videosRouter, adminVideosRouter } from './modules/videos/videos.routes';
import { subscriptionsRouter } from './modules/subscriptions/subscriptions.routes';
import { paymentsRouter } from './modules/payments/payments.routes';
import { aiJobsRouter } from './modules/ai-jobs/ai-jobs.routes';
import { usersRouter } from './modules/users/users.routes';
import { reportsRouter } from './modules/reports/reports.routes';

export function createApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.use('/api/auth', authRouter);
  app.use('/api/profiles', profilesRouter);
  app.use('/api/videos', videosRouter);
  app.use('/api/subscriptions', subscriptionsRouter);
  app.use('/api/payments', paymentsRouter);
  app.use('/api/admin/profiles', adminProfilesRouter);
  app.use('/api/admin/videos', adminVideosRouter);
  app.use('/api/admin/ai-jobs', aiJobsRouter);
  app.use('/api/admin/users', usersRouter);
  app.use('/api/admin/reports', reportsRouter);
  app.get('/api/admin/dashboard/stats', (_req, res) => res.json({ success: true }));

  return app;
}
