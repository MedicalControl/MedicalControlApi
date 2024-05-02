import { Sequelize } from 'sequelize';
import { DATABASE_URI} from '../config/config.js'

export const pool = new Sequelize(DATABASE_URI);


export async function getConnection() {
    pool.sync().then(() => {
        console.log("Database connected");
    })
    .catch((err) => console.log(err));
}