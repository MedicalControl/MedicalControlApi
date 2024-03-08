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
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
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