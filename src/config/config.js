import {config} from 'dotenv'

if(process.env.NODE_ENV !== 'production')
    config();

export const PORT = process.env.PORT;
export const jwt = process.env.JET_SECRET || 'SecretNote'