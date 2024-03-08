import { config } from 'dotenv'

if (process.env.NODE_ENV !== 'production')
    config();

export const jwt = process.env.JET_SECRET || 'SecretNote'
export const DATABASE_URI = process.env.DATABASE_URI;
export const DATABASE_NAME=process.env.DATABASE_NAME;
export const DATABASE_USER=process.env.DATABASE_USER;
export const DATABASE_PASSWORD=process.env.DATABASE_PASSWORD;