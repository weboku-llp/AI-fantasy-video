import { z } from 'zod';
export const profileSchema = z.object({ name: z.string(), slug: z.string(), bio: z.string(), tags: z.array(z.string()) });
