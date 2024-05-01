import {DataTypes} from 'sequelize'
import { pool } from '../database/index.js'

export const  Doctors = pool.define('Doctors',{
    idDoctor: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    }, 
    name: {
        type: DataTypes.STRING   
    }, 
    lastName: {
        type: DataTypes.STRING
    }
});

export const Specialty =  pool.define('Specialty', {
    idSpecialty: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    }, 
    nameOfSpecialty: {
        type: DataTypes.STRING,
    }
});

