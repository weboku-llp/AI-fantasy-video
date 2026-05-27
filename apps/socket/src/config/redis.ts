import IORedis from 'ioredis';
import { socketEnv } from './env';
export const socketRedis = new IORedis(socketEnv.REDIS_URL);
