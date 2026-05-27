import { z } from 'zod';
export const profileCreateSchema = z.object({ name: z.string().min(2), slug: z.string().min(2), bio: z.string().min(1), tags: z.array(z.string()).default([]) });
