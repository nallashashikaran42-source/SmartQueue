import path from 'node:path';

export const ENV = {
  PORT: Number(process.env.PORT || 3000),
  NODE_ENV: process.env.NODE_ENV || 'development',
  AUTH_SECRET:
    process.env.AUTH_SECRET || 'smartqueue-civic-dev-secret-change-in-production',
  REFRESH_SECRET:
    process.env.REFRESH_SECRET || 'smartqueue-refresh-dev-secret-change-in-production',
  ACCESS_TOKEN_TTL_SECONDS: 60 * 60 * 4, // 4 hours
  REFRESH_TOKEN_TTL_SECONDS: 60 * 60 * 24 * 14, // 14 days
  TOKEN_TTL_SECONDS: 60 * 60 * 24 * 7,
  DB_FILE_PATH:
    process.env.SMARTQUEUE_DB_PATH ||
    path.resolve(process.cwd(), '.data', 'smartqueue-db.json'),
};
