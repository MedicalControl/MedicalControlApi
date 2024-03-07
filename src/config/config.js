import { config } from 'dotenv'

if (process.env.NODE_ENV !== 'production')
    config();

export const DATABASE_URI = process.env.DATABASE_URI;
export const jwt = process.env.JET_SECRET || 'SecretNote'