import { z } from 'zod';
export const videoSchema = z.object({ profileId: z.string(), title: z.string(), type: z.enum(['FULL_30_MIN','FULL_15_MIN','PREVIEW_30_SEC']), durationSeconds: z.number().int().positive() });
