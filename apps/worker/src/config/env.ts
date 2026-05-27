import dotenv from 'dotenv';
dotenv.config();
export const workerEnv = { REDIS_URL: process.env.REDIS_URL || 'redis://localhost:6379' };
