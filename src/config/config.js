import {config} from 'dotenv'

if(process.env.NODE_ENV !== 'production')
    config();

export const PORT = process.env.PORT;
export const jwt = process.env.JET_SECRET || 'SecretNote'
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_USER;
export const DB_HOST = process.env.DB_HOST;
export const DB_NAME = process.env.DB_NAME;