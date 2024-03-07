import { QueryTypes, Sequelize } from 'sequelize';
import { DATABASE_URI } from '../config/config.js'
import pkg from 'pg';
import { userModel } from '../model/user.Model.js';


const pool = new Sequelize(DATABASE_URI + "?sslmode=require"); 

export async function getConnection() {
    try{
        await pool.authenticate();
        console.log('Connection has been established successfully');
        const User = userModel(pool);
        await pool.sync();
    }catch(err){
        console.log(err);
    }
}

export {pool};