import sql from 'mssql'
import {DB_NAME, DB_PASSWORD, DB_USER, DB_HOST} from '../config/config.js'


const dbsettings = {
    user: DB_USER,
    password: DB_PASSWORD,
    server: DB_HOST,
    database: DB_NAME,
    port: 1433,
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
};

export async function getConnection() {
    try {
        const pool = await sql.connect(dbsettings)
        .then(console.log('Connection good'));
        return pool;
    } catch (err) {
        console.error(err)
    }
}
export {sql};