import { z } from 'zod';
export const aiJobsCreateSchema = z.object({ profileId: z.string(), prompt: z.string().min(1), durationSeconds: z.number().int().positive(), provider: z.string().min(1) });
