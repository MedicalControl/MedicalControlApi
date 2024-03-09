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
                msg: "El email tiene que ser valido"
            },
            notNull: {
                msg: 'Los campos no pueden estar vacios'
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Los campos no pueden estar vacios'
            }
        }
    },
})

Rol.hasMany(Users, {
    foreignKey: 'id',
    sourceKey: 'idRol'
})

Users.belongsTo(Rol, {
    foreignKey: 'id',
    targetKey: 'idRol'
})