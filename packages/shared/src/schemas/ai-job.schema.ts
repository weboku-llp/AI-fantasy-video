import { z } from 'zod';
export const aiJobSchema = z.object({ profileId: z.string(), prompt: z.string().min(1), durationSeconds: z.number().int().positive() });
