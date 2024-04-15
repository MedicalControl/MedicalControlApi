import {DataTypes} from 'sequelize'
import { pool } from '../database/index.js'

import { Users } from './patients/patients.Model.js'
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

Specialty.hasMany(Doctors, {
    foreignKey: {
        allowNull: false, 
        name: 'idSpecialty'
    }, 
    sourceKey: 'idSpecialty'
});

Doctors.belongsTo(Specialty, {
    foreignKey: {
        allowNull: false, 
        name: 'idSpecialty'
    },
    targetKey: 'idSpecialty'
})
Users.hasOne(Doctors, {
    foreignKey: {
        allowNull: false,
        name: "idUser"
    },
    sourceKey: 'idUser'
});
Doctors.belongsTo(Users, {
    foreignKey: {
        allowNull: false,
        name: "idUser"
    },
    sourceKey: 'idUser'
});
