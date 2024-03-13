import { DataTypes } from 'sequelize'

import { pool } from '../database/index.js'
import { Rol } from './rols.Model.js'

export const Users = pool.define('Users', {
    idUser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                msg: "The email is invalid"
            },
            notNull: {
                msg: 'fields cannot be empty'
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'fields cannot be empty'
            }
        }
    },
    id:{
        type: DataTypes.INTEGER, 
        defaultValue: 2, 
    }
})

Rol.hasMany(Users, {
    foreignKey: 'id',
    sourceKey: 'idRol'
})

Users.belongsTo(Rol, {
    foreignKey: 'id',
    targetKey: 'idRol'
})