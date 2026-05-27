import { z } from 'zod';
export const subscriptionSchema = z.object({ planName: z.literal('Premium Monthly') });
