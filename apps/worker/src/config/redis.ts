import IORedis from 'ioredis';
import { workerEnv } from './env';
export const redisConnection = new IORedis(workerEnv.REDIS_URL);
