import { config } from 'dotenv'

if (process.env.NODE_ENV !== 'production')
    config();

export const jwtSK = process.env.JWT_SECRETKEY || 'SecretNote'
export const DATABASE_URI = process.env.DATABASE_URI;
export const jwtRounds =  process.env.jwtRounds;