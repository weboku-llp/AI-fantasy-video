import { z } from 'zod';
export const videoCreateSchema = z.object({ profileId: z.string(), title: z.string().min(2), slug: z.string().min(2), type: z.enum(['FULL_30_MIN','FULL_15_MIN','PREVIEW_30_SEC']), durationSeconds: z.number().int().positive() });
