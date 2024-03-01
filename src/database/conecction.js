import sql from 'mysql2'
import { DB_NAME, DB_PASSWORD, DB_USER, DB_HOST } from '../config/config.js'


const pool = sql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export async function getConnection() {
    pool.getConnection((err, conn) => {
        if (err) console.log(err)
        console.log("Conected succesfully");
    })
};

export {sql};