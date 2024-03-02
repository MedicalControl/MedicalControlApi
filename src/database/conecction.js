import pg  from 'pg';
import { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD, PORT } from '../config/config.js'

const db = new pg.Client({
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: PORT,
    database: DB_NAME,
    
});

export function Connection(){
    db.connect()
    .then(() => {
        console.log(`Database connected in the port ${db.port}`)})
    .catch((err) => {
        console.log(err);
    })
}